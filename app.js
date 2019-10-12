var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql')
var multer = require('multer')
var fs = require('fs');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Router = require('./route');

var app = express();

let jwt = require('jsonwebtoken');
let cert = fs.readFileSync('./private.key');
let token 

var id 
var arrAllSocket = []
let houseList = []

//图片存储
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/img');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname );
  }
})
var upload = multer({ storage: storage });

io.on('connection',function(socket){
  socket.on('online', function(id){
    console.log(id,"加入聊天室")
    arrAllSocket[id] = socket.id
    console.log("online:",arrAllSocket)
    io.emit('houseList', houseList)
  })
  //创建房间
  socket.on('createHouse',(data)=>{
    console.log('创建参数',data)
    let params = {
      houseId: '',
      type: data.type,
      user: []
    }
    if(houseList.length===0){
      console.log('插入第一个房间')
      houseList.push({
        houseId: 0,
        type: data.type,
        user: [{
          id: data.userId,
          name: data.userName,
          url: data.userUrl,
          state: 0,
          operation:0
        }]
      })
    } else {
      for(let i=0;i<houseList.length;i++) {
        if(houseList[i].houseId!=i) {
          params.houseId = i;
          let user = {
            id: data.userId,
            name: data.userName,
            url: data.userUrl,
            state: 0,
            operation:0
          }
          params.user.push(user)
          houseList.splice(i, 0, params)
          console.log('房间状态',houseList)
          break;
        }
        if(i==(houseList.length-1)){
          console.log('末尾添加房间')
          houseList.push({
            houseId: i+1,
            type: data.type,
            user: [{
              id: data.userId,
              name: data.userName,
              url: data.userUrl,
              state: 0,
              operation:0
            }]
          })
          break;
        }
      }
    }
    
    io.emit('houseList', houseList)
  })
  //用户进入
  socket.on('addUser', (data)=>{
    console.log('请求插入：', data)
    houseList.forEach((item, index)=>{
      console.log(item)
      if(item.houseId == data.houseId) {
        let params = {
          id: data.userId,
          name: data.userName,
          url: data.userUrl,
          state: 0,
          operation:0
        }
        houseList[index].user.push(params)
        console.log('插入结果', houseList)
      }
    })
    io.emit('houseList', houseList)
  })
  //用户离开
  socket.on('userLeave', (data)=>{
    houseList.forEach((item, index)=>{
      if(item.houseId==data.houseId) {
        item.user.forEach((u, number)=>{
          if(u.id==data.userId){
            houseList[index].user.splice(number, 1)
            if(houseList[index].user.length===0) {
              houseList.splice(index,1)
            }
          }
        });
      }
    })
    io.emit('houseList', houseList)
  })
  //准备
  socket.on('ready', (data)=>{
    houseList.forEach((item, index)=>{
      if(item.houseId===data.houseId) {
        item.user.forEach((u, number)=>{
          if(u.id===data.userId) {
            houseList[index].user[number].state = data.state
            houseList[index].user.forEach(()=>{
              io.to(arrAllSocket[u.id]).emit('ready',houseList[index]);
            })
          }
        })
      }
    })
  })
  //出拳
  socket.on('done',(data)=>{
    houseList.forEach((item,index)=>{
      if(item.houseId===data.houseId) {
        item.user.forEach((u,number)=>{
          if(u.id===data.userId) {
            houseList[index].user[number].operation = data.operation
            houseList[index].user.forEach(()=>{
              io.to(arrAllSocket[u.id]).emit('opration',houseList[index]);
            })
          }
        })
      }
    })
  })
  socket.on('houseList',()=>{
    console.log('请求大厅列表')
    io.emit('houseList', houseList)
  })
  //消息
  socket.on('message',function(str){
    console.log(str)
    io.to(arrAllSocket[str.to]).emit('message',str);
    io.to(arrAllSocket[str.say]).emit('message',str);
    console.log("已发送")
    Router.saveMsg(str)
  })
  socket.on('disconnect',function(){
    io.emit('leave',id)
  })
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8081");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header("X-Powered-By",' 3.2.1'); 
  next();
});


app.get('/', (req, res)=>{res.sendFile(__dirname+'/'+'public/'+'index.html') });
app.get('/battle', (req, res)=>{res.sendFile(__dirname+'/'+'public/'+'battle.html') });
app.post('/login', Router.Login)
app.post('/insert', Router.Insert)
app.get('/user-info', Router.userInfo)
app.post('/friend-info', Router.friendInfo)
app.post('/upload-info', Router.uploadInfo)
app.post('/upload-img', upload.single('user'), Router.uploadImg)
app.post('/img',upload.single('img'),Router.Img);
app.post('/friend',Router.Friend)
app.post('/history', Router.History)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
http.listen(8080)
