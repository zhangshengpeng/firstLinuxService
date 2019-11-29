let Router = require('./route')

let socketio = {};
let socket_io = require('socket.io')

//node-canvas
let canvas = require('canvas')

var arrAllSocket = []
let houseList = []
let canvs = []

socketio.getSocketio = (server)=>{
    let io = socket_io.listen(server);
    
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
            user: [{
              id: data.userId,
              name: data.userName,
              url: data.userUrl,
              state: 0,
              operation:0
            }]
          }
          if(houseList.length==0){
            console.log('插入第一个房间')
            params.houseId = 0
            if(data.type=='2'){
              let canv = canvas.createCanvas(1000, 820)
              canvs[0] = canv
            }
            houseList.push(params)
          } else {
            for(let i=0;i<houseList.length;i++) {
              if(houseList[i].houseId!=i) {
                params.houseId = i;
                houseList.splice(i, 0, params)
                if(data.type=='2'){
                  canvs[i] = canvas.createCanvas(1000, 820)
                }
                console.log('房间状态',houseList)
                break;
              }
              if(i==(houseList.length-1)){
                console.log('末尾添加房间')
                params.houseId = i+1
                houseList.push(params)
                if(data.type=='2'){
                  canvs[i+1] = canvas.createCanvas(1000, 820)
                }
                break;
              }
            }
          }
          
          io.emit('houseList', houseList)
          io.to(arrAllSocket[data.userId]).emit('createHouse',houseList);
        })
        //用户进入
        socket.on('addUser', (data)=>{
          console.log('请求插入：', data)
          houseList.forEach((item, index)=>{
            if(item.houseId == data.houseId) {
              let params = {
                id: data.userId,
                name: data.userName,
                url: data.userUrl,
                state: 0,
                operation:0
              }
              houseList[index].user.push(params)
              houseList[index].user.forEach((item)=>{
                io.to(arrAllSocket[item.id]).emit('addUser',houseList[index]);
              })
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
                    canvs.splice(index,1)
                  }
                }
              });
            }
          })
          io.emit('houseList', houseList)
        })
        //准备
        socket.on('ready', (data)=>{
          console.log('状态修改', data)
          houseList.forEach((item, index)=>{
            if(item.houseId==data.houseId) {
              item.user.forEach((u, number)=>{
                if(u.id==data.userId) {
                  houseList[index].user[number].state = data.state
                  houseList[index].user[number].operation = 0
                  houseList[index].user.forEach((i)=>{
                    io.to(arrAllSocket[i.id]).emit('ready',houseList[index]);
                  })
                }
              })
            }
          })
        })
        //出拳
        socket.on('done',(data)=>{
          console.log('出拳', data)
          houseList.forEach((item,index)=>{
            if(item.houseId==data.houseId) {
              item.user.forEach((u,number)=>{
                if(u.id==data.userId) {
                  houseList[index].user[number].operation = data.operation
                  houseList[index].user.forEach((u)=>{
                    io.to(arrAllSocket[u.id]).emit('operation',houseList[index]);
                  })
                  console.log('出拳结果', houseList[index])
                }
              })
            }
          })
        })
        socket.on('houseList',()=>{
          console.log('请求大厅列表')
          io.emit('houseList', houseList)
        })
        //获取房间用户
          socket.on('getUsers',(houseId)=>{
          houseList.forEach((item)=>{
            if(item.houseId==houseId){
              io.emit('getUser', item.user)
            }
          })
        })
        //画布更新及转发
        socket.on('action', (data)=>{
          console.log('houseList:',houseList)
          let house = houseList.filter((item)=>{
            if(item.houseId==data.houseId){
              return item
            }
          })
          let canv = canvs[data.houseId]
	        let ctx = canv.getContext('2d')
          ctx.strokeStyle = data.pen.color
          ctx.fillStyle = data.pen.color
          ctx.lineWidth = data.pen.size

          data.arr.forEach((item, index)=>{
            ctx.lineTo(item.x, item.y);
            if(index===0) {
              ctx.arc(item.x, item.y, 0, 0, 2*Math.PI, true)
              ctx.stroke();
              console.log('执行fill')
            }
            ctx.stroke()
          })
          ctx.beginPath()
          if(house.length>0){
            house[0].user.forEach((item)=>{
              io.to(arrAllSocket[item.id]).emit('ac',data);
            })
          }
        })
        //初次加载画布数据
        socket.on('RoomInit',(data)=>{
          io.to(arrAllSocket[data.userId]).emit('RoomInit',canvs[data.houseId].toDataURL('image/png'));
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
          console.log('用户离开', socket.id)
          arrAllSocket.forEach((item, index)=>{
            if(item==socket.id) {
              houseList.forEach((house, I)=>{
                house.user.forEach((u,i)=>{
                  if(u.id==index) {
                    console.log('离开用户：', u)
                    house.user.splice(i,1)
                    if(house.user.length==0) {
                      houseList.splice(I, 1)
                    }
                  }
                })
              })
              arrAllSocket.splice(index,1)
              console.log("队列：",arrAllSocket)
            }
          })
          io.emit('houseList', houseList)
        })
      })
}

module.exports = socketio;
