import LINK from "./LINK.js"
import button from "./button.js"
import message from "./message.js"

let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLWhvbW9sb2cucHJpbWViZXRzLmJldC9zaWduLWluL2N1c3RvbWVyIiwiaWF0IjoxNjc1ODc5NjA2LCJleHAiOjE2NzYzMTE2MDYsIm5iZiI6MTY3NTg3OTYwNiwianRpIjoiQ1BUVmNLTWdHMlRGQmppYSIsInN1YiI6IjE3OWYzZDdjLTlmNjctMTFlZC04MGQ4LTAyNDJhYzFhMDAwMiIsInBydiI6IjVlMzliMzMwOTg0Y2E4NWU2OWYwYjA4ZjIzYzg3MWY3MzVlMTU2MjQiLCJuYW1lIjoiUHJpbWUgQmV0cyBPZmljaWFsIiwiZW1haWwiOiJwcmltZWJldHNvZmljaWFsQHByaW1lYmV0cy5iZXQifQ.ehQ-Dvbt-6pDYazXlmbl6_0JJCSYkX3uhxyOGy9dGXk"

let token_string = window.location.search.split("t=").at(-1)

let connection = {
    // amount: 33,
    // color: 1,

    // token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLWhvbW9sb2cucHJpbWViZXRzLmJldC9zaWduLWluL2N1c3RvbWVyIiwiaWF0IjoxNjc1NjI4MDQxLCJleHAiOjE2NzU3MTQ0NDEsIm5iZiI6MTY3NTYyODA0MSwianRpIjoiUjI0M0FqcmFNbjhZRXhieiIsInN1YiI6IjZkMzM4MGYyLWZjMjMtNDY2ZS1hNWM0LTlkZDdjNjg3NzkyYiIsInBydiI6IjVlMzliMzMwOTg0Y2E4NWU2OWYwYjA4ZjIzYzg3MWY3MzVlMTU2MjQiLCJuYW1lIjoiQmxhbmNoZSBNY0dseW5uIiwiZW1haWwiOiJhcm5vLnN0b2tlc0B5YWhvby5jb20ifQ.SFzwHi7fBScBfzGOzkk7QE9EnTeNAdK54XBIjkETUKA",
    token: token_string == "" ? token : token_string,

    bet(amount, color){

        // fetch("https://api-homolog.primebets.bet/games/double/bet",{
        fetch(LINK.con,{
            method:"POST",
            headers:{ 
                "accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer "+this.token
            },
            body: JSON.stringify({amount:amount,color:color})
        })
        .then(e=>{ 
            if(e.status == 400 || e.status == 403){
                message.normal("Algo saiu errado")
            }
        })
    }
}

export default connection