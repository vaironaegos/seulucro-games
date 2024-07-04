// https://hatatori.github.io/works/linha?t=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLWhvbW9sb2cucHJpbWViZXRzLmJldC9zaWduLWluL2N1c3RvbWVyIiwiaWF0IjoxNjc2NzU3MzkzLCJleHAiOjE2NzcxODkzOTMsIm5iZiI6MTY3Njc1NzM5MywianRpIjoieG9HMGc3V2Z6aWcxamp1USIsInN1YiI6IjE3OWYzZDdjLTlmNjctMTFlZC04MGQ4LTAyNDJhYzFhMDAwMiIsInBydiI6IjVlMzliMzMwOTg0Y2E4NWU2OWYwYjA4ZjIzYzg3MWY3MzVlMTU2MjQiLCJuYW1lIjoiUHJpbWUgQmV0cyBPZmljaWFsIiwiZW1haWwiOiJwcmltZWJldHNvZmljaWFsQHByaW1lYmV0cy5iZXQifQ.HX4nGgxpXySddzkltZDsrcWODi5Cbeuu2vxqtKVVgOU

import user from "./user.js"
// import table from "./table.js"
import message from "./message.js"
import game from "./game.js"
import time from "./time.js"
import LINK from "./LINK.js"

let connection = {

  url: LINK.url,
  bet_url: LINK.bet_url,
  cachout_url: LINK.cachout_url,
  complete_url: LINK.complete_url,

  init(){
    let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLWhvbW9sb2cucHJpbWViZXRzLmJldC9zaWduLWluL2N1c3RvbWVyIiwiaWF0IjoxNjc2NzU4NTY0LCJleHAiOjE2NzcxOTA1NjQsIm5iZiI6MTY3Njc1ODU2NCwianRpIjoiTW5DeWJJZVZUczVxcEVGcSIsInN1YiI6IjE3OWYzZDdjLTlmNjctMTFlZC04MGQ4LTAyNDJhYzFhMDAwMiIsInBydiI6IjVlMzliMzMwOTg0Y2E4NWU2OWYwYjA4ZjIzYzg3MWY3MzVlMTU2MjQiLCJuYW1lIjoiUHJpbWUgQmV0cyBPZmljaWFsIiwiZW1haWwiOiJwcmltZWJldHNvZmljaWFsQHByaW1lYmV0cy5iZXQifQ.tnE8lST-HkhbZFhCsKTT2P5gbpLU6uK7H7JF-QXQeGA"
    let search = window.location.search
    let t = search.includes('t=') == false ? token : search.split("=").pop()
    connection.token = t
  },

  cachout(){

    console.log('cachout')

    let obj = { "multiplier": game.porcent }
    
    fetch(this.url+this.cachout_url,{
      method:"POST",
      headers:{ 
          "accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": "Bearer "+this.token
      },
      body: JSON.stringify(obj)
    })
  },

  complete(){

    fetch(this.url+this.complete_url,{
      method:"PUT",
      headers:{ 
          "accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": "Bearer "+this.token
      }
    })
    .then(e=>e.json())
    .then(e=>{
      // alert('ok')
      // game.end()
      // game.end()
      // p_texto.innerHTML = 'x'+tik.multiplier
    })
  },

  bet(){
    console.log('bet')
    let obj = { "amount": user.bet }
    if(user.mult != Infinity) obj["multiplier"] = user.mult
    fetch(this.url+this.bet_url,{
      method:"POST",
      headers:{ 
          "accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": "Bearer "+this.token
      },
      body: JSON.stringify(obj)
    })

  }
}

connection.init()

// var socket = io("https://ws-double-crash.primebets.bet");
var socket = io(LINK.ws);

socket.on('connect', (ok) => {

  const payload = { token: connection.token, game: 'crash' }

  socket.emit('register', payload)
  
  socket.on('registerCallback', msg => {

    // console.log('register')
    // console.log(msg)
    
    
    // time.d2 = new Date(msg.currentRound.createdAt)
    // time.d2 = new Date(tik.baseTime)
    // time.d2 = new Date(msg.currentRound.updatedAt)
    
    // let a = new Date(msg.currentRound.timestamp)
    // let b = new Date()

    // let c = (b.getTime() - a.getTime())/1000
    // console.log(c)
    
    
    // console.log('>> tempo')
    // time.d2 = new Date(msg.currentRound.timestamp)
    // console.log(time.d2.getTime())
    // console.log(new Date())

    // console.log(d.getTime())
    // let d = new Date()

    // console.log('>> ')
    // console.log(time.d2.getTime())
    // console.log(d.getTime())
    // console.log(d.getTime() - time.d2.getTime())
    // console.log((d.getTime() - time.d2.getTime())/1000)

    // game.porcent = msg.multiplier
    // game.porcent = msg.multiplier
    // console.log(game.porcent)

    
    // time.t = msg.currentRound.timestamp
    // time.d2 = new Date(msg.currentRound.updatedAt)
    
    // let d = new Date()
    // time.d2 = new Date(msg.currentRound.timestamp)


    user.setMoney(msg.balance)
    // table.historico = msg.currentRound.history

    msg.currentRound.id
    connection.id = msg.currentRound.id
  })
  
  socket.on('crash.tick', tik => {
    
    console.log(tik)
    // time.d2 = new Date(tik.timestamp)
    // time.d2 = new Date(tik.updatedAt)
    // time.d2 = new Date(tik.baseTime)

    time.d2 = new Date(tik.baseTime)
    
    // let my_time = new Date().getTime()
    // time.delay = Math.abs(time.d2.getTime() - my_time)
    // time.d2 = new Date(time.d2.getTime() + time.delay)


    // time.d2 = new Date(time.d2.getTime() + my_time )
    // time.d2 = new Date(tik.baseTime)
    // console.log(my_time)

    // console.log('tempo')
    // console.log(new Date(time.d2.getTime()))
    // console.log(time.d2.getTime())
    // console.log(new Date(my_time))
    // console.log(my_time)
    // console.log((time.d2.getTime() - my_time))
    // console.log(Math.abs(time.d2.getTime() - my_time))
    // console.log(Math.abs(time.d2.getTime() - my_time)/1000)
    // console.log(Math.abs(time.d2.getTime() - my_time)/10000)

    // let a = new Date(tik.timestamp)
    // let b = new Date(tik.createdAt)
    // let c = (b.getTime() - a.getTime())/1000
    // console.log("tik")
    // console.log(tik)

    // let d = new Date().getTime()
    // console.log('tik')
    // console.log(tik)
    // console.log(tik.timestamp)
    // console.log(d)
    
    if(tik.status == 'complete'){
      game.end()
      console.log(game.porcent)
      p_texto.innerHTML = 'x'+tik.multiplier
    }

    if(tik.status == 'started'){
      game.reset()

      time.d3 = new Date()
      time.d2 = new Date(tik.updatedAt)
      game.porcent = time.calc()

    }
    
  })

  // message.normal(tik.multiplier)


})



export default connection