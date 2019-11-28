var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var multer = require('multer')

let canvas = require('canvas')
let canv = canvas.createCanvas(1000, 820)
let ctx = canv.getContext('2d')
console.log(ctx.createImageData)

var app = express();
//gzip插件
let compression = require('compression')

var Router = require('./route');


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

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(compression());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
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
app.post('/set-game', Router.setGameResult)
app.post('/get-game', Router.getGameResult)

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

