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
  })
  socket.on('message',function(str){
    console.log(str)
    io.to(arrAllSocket[str.to]).emit('message',str);
    io.to(arrAllSocket[str.say]).emit('message',str);
    console.log("已发送")
    Router.saveMsg(str)
  })
  console.log(" 已连接")
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




app.get('/', (req, res)=>{res.sendFile(__dirname+'/'+'public/'+'index.html') });
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
