// https://ws.homolog.primebets.bet/games/mines/init

import Values from "./Values.js"
import Cards from "./Cards.js"
import Logic from "./Logic.js"
import Message from "./Message.js"
// https://api-homolog.primebets.bet/games/mines/init
// url: "https://ws-homolog.primebets.bet"
let Connection = {

  url: "https://api-homolog.primebets.bet",
  u_init: "/games/mines/init",
  u_start: "/games/mines/start",
  u_win: "/games/mines/{roundId}/win",
  u_loss: "/games/mines/{roundId}/loss",
  u_cashout: "/games/mines/{roundId}/cash-out",

  rep_id: "{roundId}",
  
  // token: "?t=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLmhvbW9sb2cucHJpbWViZXRzLmJldC9zaWduLWluIiwiaWF0IjoxNjc0OTMyMjc4LCJleHAiOjE2NzQ5NTAyNzgsIm5iZiI6MTY3NDkzMjI3OCwianRpIjoid092ekVmaGF2azhmNDZEViIsInN1YiI6ImYxMWEyNmIzLTUzNjQtNGYxZi1hYzUwLTMzMzE3MzY5MGQ0MyIsInBydiI6IjhjOWYxNWZiYmVjZDc2MWNmODMwZDA5NjQ4MWUzNGUxM2JlZjg4ZjMiLCJuYW1lIjoiQWRtaW5pc3RyYWRvciIsImVtYWlsIjoiYWRtaW5AcHJpbWViZXRzLmJldCJ9.6HB4F3YH_Je6YCsJ0szDybch7D6fCnlg6qS8K7DdPYo",

  // token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLmhvbW9sb2cucHJpbWViZXRzLmJldC9zaWduLWluIiwiaWF0IjoxNjc0OTMyMjc4LCJleHAiOjE2NzQ5NTAyNzgsIm5iZiI6MTY3NDkzMjI3OCwianRpIjoid092ekVmaGF2azhmNDZEViIsInN1YiI6ImYxMWEyNmIzLTUzNjQtNGYxZi1hYzUwLTMzMzE3MzY5MGQ0MyIsInBydiI6IjhjOWYxNWZiYmVjZDc2MWNmODMwZDA5NjQ4MWUzNGUxM2JlZjg4ZjMiLCJuYW1lIjoiQWRtaW5pc3RyYWRvciIsImVtYWlsIjoiYWRtaW5AcHJpbWViZXRzLmJldCJ9.6HB4F3YH_Je6YCsJ0szDybch7D6fCnlg6qS8K7DdPYo",
  // token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLWhvbW9sb2cucHJpbWViZXRzLmJldC9zaWduLWluL2N1c3RvbWVyIiwiaWF0IjoxNjc1MTcyOTIxLCJleHAiOjE2NzUzODI5MjEsIm5iZiI6MTY3NTE3MjkyMSwianRpIjoiRGJUc0h5YXFrU3lIMTNQTCIsInN1YiI6IjE3OWYzZDdjLTlmNjctMTFlZC04MGQ4LTAyNDJhYzFhMDAwMiIsInBydiI6IjVlMzliMzMwOTg0Y2E4NWU2OWYwYjA4ZjIzYzg3MWY3MzVlMTU2MjQiLCJuYW1lIjoiUHJpbWUgQmV0cyBPZmljaWFsIiwiZW1haWwiOiJwcmltZWJldHNvZmljaWFsQHByaW1lYmV0cy5iZXQifQ.UTXosKcnfWBlJKu2Du5_94xj7oV1Zr1loIO_wau-LME",

  token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLWhvbW9sb2cucHJpbWViZXRzLmJldC9zaWduLWluL2N1c3RvbWVyIiwiaWF0IjoxNjc1MTcyOTIxLCJleHAiOjE2NzUzODI5MjEsIm5iZiI6MTY3NTE3MjkyMSwianRpIjoiRGJUc0h5YXFrU3lIMTNQTCIsInN1YiI6IjE3OWYzZDdjLTlmNjctMTFlZC04MGQ4LTAyNDJhYzFhMDAwMiIsInBydiI6IjVlMzliMzMwOTg0Y2E4NWU2OWYwYjA4ZjIzYzg3MWY3MzVlMTU2MjQiLCJuYW1lIjoiUHJpbWUgQmV0cyBPZmljaWFsIiwiZW1haWwiOiJwcmltZWJldHNvZmljaWFsQHByaW1lYmV0cy5iZXQifQ.UTXosKcnfWBlJKu2Du5_94xj7oV1Zr1loIO_wau-LME",

  conf:{},

  init(){
    // axios.get(this.url+this.u_init+this.token)
    // axios.get(this.url+this.u_init+this.token)
    // axios.post(this.url+this.u_init, {
    //   headers: {
    //     'Authorization': 'Bearer ' + this.token,
    //     'Content-Type': 'application/json'
    //   }
    // })

    this.headers = {
      'Accept': 'application/json',
      "Content-type": "application/json; charset=UTF-8",
      'Authorization': 'Bearer ' + this.token
    }

    fetch(this.url+this.u_init,{
      method: 'POST',
      headers: this.headers,
    })
    .then(e=>e.json())

    .then(e=> {

      this.check_connection(e)
      this.check_connection(e.status)
      let {balance, minBet, maxBet, taxes, user, gameId} = e.data
      Values.setWallet(balance)
      Values.minBet = minBet
      Values.maxBet = maxBet
      Values.taxes = taxes
      Values.setTaxes(taxes)
      
      Values.id = gameId
      Values.name = user.name
      Values.username = user.username
      
      Logic.setButton("Jogar")
      
      Cards.setBombs(4)

      Cards.FieldBombs(Cards.bombs);
      Cards.Render();


    })


    

    // .then(e=>{ Connection.start() })
    // /games/mines/init
  },

  start(){

    // /games/mines/{gameId}/start
    // { "bombs": 3, "betAmount": 2.5 }

    let obj = {
      "bombs": Values.bombs,
      "betAmount": Values.bet
    }

    let url = this.url+this.u_start

    this.r = fetch(url, {method: "POST",headers: this.headers,body: JSON.stringify(obj)})
    .then(e=>e.json())
    .then(e=> { 
      this.roundId = e.data.roundId  
      Values.setBonus(e.data.continue)
    })

    // axios.post(this.url+this.u_start, obj).then(e=> this.check_connection(e.status))


    


  },

  win(){ 
    // /games/mines/{gameId}/win
    // { "position": 0, "sequence": 1 }

    

    let url = this.url+this.u_win
    url = url.replace(this.rep_id, this.roundId)

    let obj = {
      position: Cards.position,
      sequence: Values.coins_reveled
    }

    
    fetch(url, { method: "POST", headers: this.headers, body: JSON.stringify(obj), })
    .then(e=>e.json())
    .then(e=>{
      Values.setBonus(e.data.continue)
      Values.setMoneyPast(e.data.cashout)
    })
    

  },

  loss(){
    // /games/mines/{gameId}/loss
    // { "position": 0, "sequence": 3 }

    

    let url = this.url+this.u_loss
    url = url.replace(this.rep_id, this.roundId)


    let obj = {
      position: Cards.position,
      sequence: Values.coins_reveled+1
    }

    this.loss_promisse = fetch(url, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(obj),
    })
    .then(e=>e.json())
    .then(e=>{
      Values.setBonus(0)
    })
  },

  cachout(){
    let url = this.url+this.u_cashout
    url = url.replace(this.rep_id, this.roundId)
    let obj = {
      position: Cards.position,
      sequence: Values.coins_reveled
    }
    fetch(url, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(obj),
    })
    .then(e=>e.json())
    .then(e=>{
   
      Values.setWallet(e.data.balance)
    })
  },

  check_connection(num){

    let msg = {
      404: "404 - não encontrado",
      403: "403 - Algo deu errado, sessão expirou",
      401: "401 - Algo deu errado, sessão expirou",
    }

    if(Object.keys(msg).includes(num.toString())) Message(msg[num])
  }
}



export default Connection