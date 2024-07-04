import cards from "./cards.js";
import historic from "./historic.js";
import message from "./message.js";
import table from "./table.js";
import stats from "./stats.js";
import loading from "./loading.js";
import connection from "./connection.js";
import button from "./button.js";
import colors from './colors.js'
import user from './user.js'
import LINK from './LINK.js'
// let socket = io()



let communication = {
    add(obj){
        message.normal("add")
        socket.emit("bets", obj)
    },
    renew(){ 
        message.normal("renew")
        socket.emit("zerar", []) 
    },
    refresh(){
        message.normal("refresh")
        socket.emit("bets_refresh")
    },
    fill(){ 
        message.normal("fill")
        // socket.emit("fill")
        fakelist.slice(0,10).map(obj=>this.add(obj))
    },

    loading_end(){ 
        let r = (Math.random()*10)|0
        cards.choice(r)
        // socket.emit("loading_end") 
    },
    historic(){
        socket.emit("historic")
    },
    historic_add(num){
        socket.emit("historic_add", num)
        this.historic()
    }
}

// table.setLista(fakelist)
// communication.refresh()

// communication.historic()

// socket.on('bets', arr => { table.setLista(arr) })
// socket.on('bets_refresh', arr => { table.setLista(arr) })
// socket.on('zerar', ar  => { table.setLista([]) })
// socket.on('fill', ar  => { table.setLista(ar);  })
// socket.on('card_choice_num', num  => { cards.choice(num)  })
// socket.on('historic_res', ar  => { historic.list = ar  })

// socket.on('tempo', ar  => { 

// table.setLista([])

// let n = 0
// window.addEventListener('keyup', e=>{
    // if(e.key == "q") communication.renew()
    // if(e.key == "3" || e.key == "2" || e.key == "1") communication.add(fakelist[n++])
// })

// let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLWhvbW9sb2cucHJpbWViZXRzLmJldC9zaWduLWluL2N1c3RvbWVyIiwiaWF0IjoxNjc1NjI4MDQxLCJleHAiOjE2NzU3MTQ0NDEsIm5iZiI6MTY3NTYyODA0MSwianRpIjoiUjI0M0FqcmFNbjhZRXhieiIsInN1YiI6IjZkMzM4MGYyLWZjMjMtNDY2ZS1hNWM0LTlkZDdjNjg3NzkyYiIsInBydiI6IjVlMzliMzMwOTg0Y2E4NWU2OWYwYjA4ZjIzYzg3MWY3MzVlMTU2MjQiLCJuYW1lIjoiQmxhbmNoZSBNY0dseW5uIiwiZW1haWwiOiJhcm5vLnN0b2tlc0B5YWhvby5jb20ifQ.SFzwHi7fBScBfzGOzkk7QE9EnTeNAdK54XBIjkETUKA"



document.querySelector("#loadingpage").style.display = "flex"
document.querySelector("#topo").style.display = "none"
document.querySelector("#table").style.display = "none"
document.querySelector(".pages").style.display = "none"

var socket = io(LINK.ws);

socket.on('connect', () => {
    const payload = { token: connection.token, game: 'double' }
    socket.emit('register', payload)

    socket.on('registerCallback', msg=>{

        console.log('registerCallback')
        console.log(msg)
        
        // colors(msg.settings.colors)
        colors(msg.settings.colors)

        stats.setWallet(msg.balance)
        stats.setWallet(msg.balance)
        stats.setName(msg.username)
        stats.setId(msg.id)
        
        if( user.id == undefined ) user.id = msg.id

        console.log(user.id)

        // loading.resetTime(15)
        // table.sethistoric(msg.history)
        // historic.list = msg.history
        // if(msg.username)

        let user_active_table = table.lista.filter(e=>e.name == e.username).length

        if(user_active_table){
            button.setButton("Apostou")
        }


    })

    socket.on('double.tick', tik=>{

        stats.hud_off()
        
        // console.log('testando')
        // console.log(tik.status)
        console.log('tik')
        console.log(tik)

        historic.list = tik.history
        

        

        document.querySelector("#loadingpage").style.display = "none"
        document.querySelector("#topo").removeAttribute('style')
        document.querySelector("#table").removeAttribute('style')
        document.querySelector(".pages").removeAttribute('style')

        if(user.time == false) {
            loading.resetTime(15)
            user.time = true
        }

        if(tik.status == "waiting"){
            table.tablenormal()

            if(user.bet == false) button.setButton("Apostar")
            // stats.hud_on()

            // let time_a = new Date(tik.updatedAt)
            // let time_b = new Date()
            
            // let time_dif = time_a.getTime() - time_b.getTime()
            // time_dif = time_dif/1000
            
            // 
            // 

            

        }

        

        if(tik.status == "started") {
            stats.hud_off()
            
            if(user.id != undefined && user.bet){
                let ob = tik.bets.find(e=>e.user.id == user.id)
                let new_balance = ob.user.balance
                stats.temp_balance = new_balance
                // console.log(stats)
            }
        }
        
        //started
        if(tik.status == "started" && tik.color == 1) {
            let n = [1,3,5,7,9]
            n = n[(Math.random()*n.length)|0]
            cards.choice(n)
            // table.tablewinnumber(n)
            // setTimeout(()=>{ table.tablewinnumber(n) },2000)
        }

        if(tik.status == "started" && tik.color == 2) {
            let n = [2,4,6,8]
            n = n[(Math.random()*n.length)|0]
            cards.choice(n)
            // table.tablewinnumber(n)
            // setTimeout(()=>{ table.tablewinnumber(n) },2000)
        }


        if(tik.status == "started" && tik.color == 3) {
            cards.choice(0)
            // setTimeout(()=>{ table.tablewinnumber(0) },2000)
        }

        // stats.setWallet(ob.user.balance)
        

        

        // complete
        
        if(tik.status == "complete"){
            

            // atualiza valor do usuário

            if(user.bet) stats.setWallet(stats.temp_balance)
            
            historic.list = tik.history
            
            message.normal("Jogada encerrada")

            table.tablewinnumber(cards.choice_number)

            user.bet = false
            user.time = false
            cards.status = 'stop'

            // button.setButton("Apostar")
            // stats.hud_on()

            
            //aqui
            // console.log(tik.bets)
            // function refreshwallet(tik){
            //     let ob = tik.bets.find(e=>e.user.id == stats.id)
            //     let new_balance = ob.user.balance
            //     stats.setWallet(new_balance)
            // }
            
            // refreshwallet(tik)

            
            

            // loading.resetTime(10)

            // message.normal("ok")

            // 
            // 
            // 
            // 
            // 
            // 
            // 
            // 
            // button.setButton('Apostar')
        }

        table.lista = tik.bets

        table.lista_a = tik.bets.filter(e=>e.color == 1)
        table.lista_b = tik.bets.filter(e=>e.color == 2)
        table.lista_c = tik.bets.filter(e=>e.color == 3)
        
        table.lista_a_total = tik.summary[0].sum
        table.lista_b_total = tik.summary[1].sum
        table.lista_c_total = tik.summary[2].sum

        table.lista_a_quantity = tik.summary[0].count
        table.lista_b_quantity = tik.summary[1].count
        table.lista_c_quantity = tik.summary[2].count

    });
})

// socket.on("connect", function() {
//   
// });

// socket.on("event", function(data) {
//   
// });

// socket.on("disconnect", function() {
//   
// });



export default communication