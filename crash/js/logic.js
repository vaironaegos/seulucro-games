import button from "./button.js"
import game from "./game.js"
// import user from "./user.js"
import message from "./message.js"
import money from "./money.js"

import app from './vue.js'

let logic = {

    dobrar_valor_aposta() {
        // if (game.status == 2) return
        if (app.user.status != 'livre') return
        app.user.bet *= 2
    },

    dividir_valor_aposta() {
        if (app.user.status != 'livre') return
        if(app.user.bet/2 > 1) app.user.bet /= 2
    },

    apostar() {

        game.stoped = true

        if (app.user.bet > app.user.wallet) {
            message.fail("Ops!", "Seu saldo não é suficiente, aposte um valor menor")
            return
        }

        // const item = !!game.pendding.find(e=>e.id == app.user.id)

        // durante o carregamento
        console.log('logic.apostar')
        // if(game.status == 1 && !item){

        if (app.user.status != 'apostou' && game.status == 1) {
            game.pendding.push(app.user)
            app.user.wallet = app.user.wallet - app.user.bet
            button.aguardar()
            app.user.status = 'apostou'
        }

        
        if (app.user.status == 'livre' && game.status == 2){
            game.pendding.push(app.user)
            app.user.wallet = app.user.wallet - app.user.bet
            button.aguardar()
            app.user.status = 'aguardando'
        }


        // console.log(!game.pendding.find(e=>e.id == app.user.id))

        // quando estiver voando
        // if(game.status == 2 && !game.pendding.find(e=>e.id == app.user.id)){
        //     game.pendding.push(app.user)
        //     app.user.wallet = app.user.wallet - app.user.bet
        //     // app.user.status = 'apostou'
        //     button.aguardar()
        //     app.user.status = 'aguardando'
        // }

        // if(game.status == 1){
        //     game.pendding.push(app.user)
        //     app.user.wallet = app.user.wallet - app.user.bet
        //     app.user.status = 'apostou'
        //     button.retirar()
        // }


        // game.pendding.push(app.user)
        // app.user.wallet = app.user.wallet - app.user.bet
        // app.user.status = 'apostou'
        // button.aguardar()


        // }

        // if(app.user.status == 'livre'){
        //     app.user.wallet = app.user.wallet - app.user.bet
        //     app.user.status = 'apostou'
        //     button.aguardar()
        // }


        // button.aguardar()
    },

    retirar() {

        console.log('logic.retirar')

        const item = game.pendding.find(e => e.id == app.user.id)

        if (item) {
            game.pendding = []
            app.user.status = 'livre'
            const sum = app.user.bet * game.porcent - app.user.bet
            app.user.wallet += app.user.bet + sum
            message.success("Ganhou!", "Acaba de ganhar "+ money(sum))
            button.apostar()
        }
    },

    aguardar() {
        console.log('logic.aguardar')
    }


    // collect(){
    // console.log(button.el.innerHTML = "Apostar")
    // if(button.checkName('Apostar')){
    //     button.setName('Aguarde')
    //     game.canBet = false
    // }
    // if(button.checkName('Retirar')){
    //     // let lucro = user.bet * user.mult
    //     let lucro = user.bet * game.porcent
    //     user.setMoney(user.bet + user.money + lucro)
    //     button.setName('Apostar')
    //     game.canBet = true
    //     message.msgWin(lucro)
    // }
    // }
}



export default logic