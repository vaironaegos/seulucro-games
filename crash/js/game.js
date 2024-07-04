import line from "./line.js"
import message from "./message.js"
import foguete from "./foguete.js"
// import values from "./values.js"
import estrelas from "./estrelas.js"
import button from "./button.js"
import logic from "./logic.js"
// import table from "./table.js"
import time from "./time.js"
import loading from "./loading.js"
import app from "./vue.js"


let game = {

    porcent: 1,
    stoped: false,
    limit: 2,
    canBet: true,
    status: 1, // 1 parado, 2 voando, 3 explodiu

    screen: {
        width: bloco.offsetWidth,
        height: bloco.offsetHeight
    },

    pendding: [],

    start() {
        // button.apostar()
        this.status = 1
        app.game.status = 1

        this.porcent = 1
        const screen_width = document.body.offsetWidth / 400
        estrelas.backgrounStarPositionSky(this.porcent ** 1.5 ** screen_width * -1)
        estrelas.backgrounStarPositionSky2(this.porcent ** 1.5 ** screen_width)
        line(this.porcent ** 2 * 20 - 15)
        message.normal("x0.0")
        foguete.reset()
        foguete.rocket_off()
        console.log('game.reset')
    },

    voar() {
        this.status = 2
        app.game.status = 2

        foguete.rocket_on()
        // button.retirar()
        // button.aguardar()
        app.user.porcent = this.porcent

        const item = this.pendding.find(e=>e.id == app.user.id) || false

        if ( item && app.user.status == 'apostou' ){
            button.retirar()
        }
        
        this.porcent = parseFloat((this.porcent + 0.01).toFixed(2))

        // se o usuário ganhar
        if(this.porcent == app.user.multiplier && app.user.status == "apostou"){
            logic.retirar()
        }

        // se o usuário ganhar
        if(this.porcent == this.limit){
            console.log('game.explodiu')
            this.explode() 
        }


        const screen_width = document.body.offsetWidth / 700

        line(this.porcent ** 2 * 20 - 15)
        
        // estrelas.backgrounStarPositionSky(this.porcent ** 1.5 ** screen_width * - 1)
        // estrelas.backgrounStarPositionSky2(this.porcent ** 1.5 ** screen_width)
        
        estrelas.backgrounStarPositionSky(this.porcent * 20)
        estrelas.backgrounStarPositionSky2(this.porcent * 200)
        message.normal("x" + (this.porcent).toFixed(2).toString().padStart(2, '0'))

        setTimeout(() => {
            if (this.status == 2)
                this.voar()
        }, 1000 / 60)
    },

    explode() {
        this.status = 3
        app.game.status = 3

        foguete.rocket_off()
        foguete.explode()

        setTimeout(()=>{
            this.start()
            loading.resetTime(10)
        }, 3000)
    },

    pause() {
        this.stop = true
    },

    init() {
        values.setBet(values.bet)
        values.setMult(values.mult)
        values.setMoney(values.money)
    },

    setLimit(n) {
        this.limit = n
    },

    // reset() {
        // if (button.checkName("Aguarde")) {
        //     values.setMoney(values.money - values.bet)
        //     button.setName("Retirar")
        // }
        // this.canBet = true

        // this.porcent = 1
        // this.stop = false
        // foguete.reset()
        // this.voar()
    // },

    // renew() {
    //     let tempo = 5
    //     let t = this
    //     let r = parseFloat((Math.random() * 10).toFixed(2))
    //     this.setLimit(r)
    //     //this.canBet = true 
    //     function go() {
    //         message.normal(tempo--)
    //         setTimeout(() => {
    //             if (tempo > 0) go()
    //             else t.reset()
    //         }, 1000)
    //     } go()
    // },
}

window.addEventListener("resize", (event) => {
    game.screen = {
        width: bloco.offsetWidth,
        height: bloco.offsetHeight
    }
});

// window.addEventListener("keyup", e => {
//     if (e.key == "q") {
//         game.start()
//     }

//     if (e.key == "w") {
//         game.voar()
//     }

//     if (e.key == "e") {
//         console.log('ok')
//         game.explode()
//     }

//     if (e.key == "4") {
//         button.retirar()
//     }
// })

// window.addEventListener('mousemove', e => {
//     let porc = e.clientX/document.body.offsetWidth * 100
//     line(porc)
//     estrelas.backgrounStarPositionSky(porc*-1)
//     estrelas.backgrounStarPositionSky2(porc*2)
//     message.normal("x"+porc.toFixed(2))
//     fundo.style.transform = `translateY(${porc * 20}px)`;
//     console.log( porc )
// })


export default game