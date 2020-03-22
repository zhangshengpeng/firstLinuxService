let express = require('express');
let router = express.Router()
let mysql = require('mysql')
let fs = require('fs');
let multer = require('multer')
var jwt = require('jsonwebtoken');
var cert = fs.readFileSync('./private.key');

var connection = mysql.createConnection({
	host: '101.132.116.167',
	port: '3306',
	user: 'root',
	password: '1234',
	database: 'mydatabase'
  })	
exports.connection = connection
connection.connect();

var cnt=0;
var conn=function(){
	var sql = "SELECT id FROM userbaseinfo";
    connection.query(sql,function(err,result){ })     
    cnt++;
    console.log("Mysql重连接成功! 次数:"+cnt);
}
setInterval(conn, 3600*1000);

exports.Login = (req, res)=> {
	let sql = "SELECT id FROM userbaseinfo WHERE id ='"+req.body.id+"' AND password='"+req.body.password+"' ";
	connection.query(sql,function(err,result){
		if (result.length==0) {
		res.status(200);
		res.send({status:"0"});
	}
	else{
		const token = jwt.sign(
			{
				id:req.body.id,

			},cert,{ 
				 expiresIn: 24*60*60
			})
		res.send({
			token:token,
			status:"1"
		});
	}
	})
}

exports.Insert = (req, res)=> {
	let  add = 'INSERT INTO userbaseinfo(name,id,password) VALUES(?,?,?)';
	let  Params = [req.body.id,req.body.id,req.body.password];
	let sql = "SELECT id FROM userbaseinfo WHERE id = '"+req.body.id+"'";

	connection.query(sql, (err, result)=>{
		if(result.length>0){
			res.send({
			  status:"0"
			});
		} else {
			connection.query(add, Params, (err, result)=>{
				if(err){ console.log(err) } 
				else { res.send({ status:"1" }); }
			})
		}
	})
}

exports.userInfo = (req, res)=> {
	let token = req.cookies.token;
	jwt.verify(token, cert, (err, decoded)=> {
		if(err||!decoded) {
			res.send({
				status: 1
			})
		} else if(decoded.id){
			let sql = `SELECT * from userbaseinfo WHERE id = '${decoded.id}'`;
			connection.query(sql,function(err,result){
				if(result.length==1){
		 			res.send(result[0])
				} else res.send(result)
			})
		}
	}) 
}
exports.friendInfo = (req, res)=> {
	let token = req.cookies.token;
	jwt.verify(token,cert,function(err,decoded){
		if (err||!decoded) {
		  res.send({ status: 1 });
		} else if (decoded.id) {
		  var sql  = "SELECT name,url,id FROM userbaseinfo JOIN friend ON friend.friend_id = userbaseinfo.id  WHERE  user_id = '"+decoded.id+"'"
			 connection.query(sql,function(err,result){
				 if(result.length>0){
					 res.send(result)
				}
					 else if (result.length==0) {
						 console.log("can not find user");
						 res.send(result);
					 }
					 else{
						 console.log(err)
					 }
			 })
		}
	})
}
exports.saveMsg = (str)=> {
	var sql  = "INSERT INTO message(say,message,time,_to,url,src) VALUES(?,?,?,?,?,?)"
		var Params = [str.say,str.message,str.time,str.to,str.url,str.src]
		connection.query(sql,Params,function(err,result){
			if (err) {
				console.log(err)
			}
		})
}
exports.saveCanv = (data)=> { 
	if(data.paintingId >0) {
		let sql = `UPDATE painting SET base64 = ? WHERE paintingId = '${data.paintingId}'`
		connection.query(sql,data.canv,(err,result)=>{
			if (err) { console.log(err) }
			else console.log(result)
		})
	} else {
		let sql = `SELECT * FROM painting`
		connection.query(sql,(err, result)=> {
			if(err) {
				console.log(err)
			} else {
				console.log(result)
			}
		})
	}
}
exports.History = (req, res)=> {
	var sql = "SELECT * FROM message WHERE (say = '"+req.body.userId+"'AND  _to = '"+req.body.friendId+"') or (say = '"+req.body.friendId+"'AND  _to = '"+req.body.userId+"')"
	connection.query(sql,function(err,result){
		if (err) { console.log(err) }
		else{ res.send(result) }
	})
}
exports.uploadInfo = (req, res) => {
	token = req.cookies.token;
	jwt.verify(token,cert,function(err,decoded){
	  id = decoded.id
	})
	console.log("修改信息",req.body)
	var sql = "UPDATE userbaseinfo set name = ?, address = ?, url = ? WHERE id = '"+id+"'"
	var Params = [req.body.name, req.body.address, req.body.url]
	connection.query(sql,Params,function(err,result){
		  if (err) { console.log('[INSERT ERROR] - ',err.message); }
		  else{
			  res.send({
				  name: req.body.name,
				  address: req.body.address,
				  url: req.body.url
			  })
		  }
	  })
  }
  exports.uploadImg = (req, res)=>{
	  token = req.cookies.token;
	  jwt.verify(token,cert,function(err,decoded){
        id = decoded.id
	  })
	  let file = req.file;
	 console.log('文件保存路径：%s', file.path);
	 let arr = file.path.split('public');
	 arr[1] = arr[1].replace("\\","/")
	 arr[1] = arr[1].replace("\\","/")
	 res.send({
				url:arr[1]
			})
  }
  exports.Img  = function(req,res){
	token = req.cookies.token;
	jwt.verify(token,cert,function(err,decoded){
        id = decoded.id
    })
	 var file = req.file;
	 console.log('文件保存路径：%s', file.path);
	 var arr = file.path.split('public');
	 arr[1] = arr[1].replace("\\","/")
	 arr[1] = arr[1].replace("\\","/")
		res.send({ imgUrl:arr[1] })
}
exports.Friend = function(req,res){
	console.log("好友操作：",req.body)
	if (req.body.operation == "add") {
		var s = "SELECT id FROM userbaseinfo WHERE id = '"+req.body.friend_id+"'"
		var sql = "INSERT INTO friend(user_id,friend_id)VALUES(?,?)"
		connection.query(s,function(err,result){
			if (result.length < 1 ) {
				console.log("添加好友结果：该用户不存在！")
				res.send({status:1})
			}else{
				connection.query("SELECT * FROM friend WHERE user_id = '"+req.body.user_id+"' AND friend_id = '"+req.body.friend_id+"'",
					function(err,result){
						if (result.length>0) {
							console.log("已经为好友")
							res.send({status:2})
						}else{

							connection.query(sql,[req.body.user_id,req.body.friend_id],function(err,result){
								if (err) {console.log(err)}
							})
							connection.query(sql,[req.body.friend_id,req.body.user_id],function(err,result){
								if (err) {console.log(err)}
									else{
									console.log("添加成功：")
									res.send({status:0})
									}
							})
						}
					})
			}
		})
	}
		else if(req.body.operation == "delete"){
			console.log("删除操作")
			var sql1 = "DELETE FROM friend WHERE user_id = '"+req.body.user_id+"'AND friend_id = '"+req.body.friend_id+"'"
			var sql2 = "DELETE FROM friend WHERE user_id = '"+req.body.friend_id+"'AND friend_id = '"+req.body.user_id+"'"
			var s = "SELECT * FROM friend WHERE user_id = '"+req.body.user_id+"' AND friend_id = '"+req.body.friend_id+"'"
			
			connection.query(s,function(err,result){
				if (result) {
					connection.query(sql1,function(err,result){
						if (err) {console.log(err)}
					})
					connection.query(sql2,function(err,result){
						if (result) {
							console.log("删除好友成功")
							res.send({status:0})}
					})
				}
				else{
					console.log("好友不存在！")
					res.send({status:1})}
			})
			
		}
	}

exports.setGameResult = (req, res)=>{
	req = req.body
	let sql = "INSERT INTO gamelist(houseId, type, userA, userB, userAOperation, userBOperation, date) VALUE (?,?,?,?,?,?,?)"
		let date = new Date() 
	let params = [req.houseId, req.type, req.userA, req.userB, req.userAOperation, req.userBOperation, date]
	connection.query(sql, params, (err, result)=>{
			if (result) {
					console.log("插入成功") 
					res.send({status:1})
			} else if(err){
					console.log(err)
			}
	}) 
}

exports.getGameResult = (req, res)=> {
	req = req.body
	let sql = `SELECT * FROM gamelist WHERE userA = ${req.userA}`
	connection.query(sql,(err, result)=>{
		if(result) {
			res.send(result)
		} else if(err) {
			console.log(err)
		}
	})
}



