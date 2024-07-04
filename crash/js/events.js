import user from "./user.js"
import button from "./button.js"
import game from './game.js'
import message from "./message.js"
import logic from "./logic.js"
import app from "./vue.js"

let events = {}

bt_double.onclick = () => {
    // if(!button.checkName('Apostar')) return
    // user.setBet(user.bet * 2)
    // inp_bet_value.value = user.bet
    logic.dobrar_valor_aposta()
}

bt_half.onclick = () => {
    if(user.bet > 1) logic.dividir_valor_aposta()
}

// inp_bet_value.onkeyup=function(e){
//     user.setBet(this.value)
// }

// inp_mult_value.onkeyup=function(e){
//     user.setMult(this.value)
// }


bt_main.onclick = () => {
    
    console.log(button.getName())

    if(app.user.status == 'livre'){
        // console.log('clicou em apostar')
        // app.user.status == 'apostou'
        logic.apostar()
    }

    // if(app.user.status == 'apostou'){

    //     if(game.status == 2){
    //         button.aguardar()
    //         return
    //     }
        
    //     if(game.status == 'parado'){
    //         logic.retirar()
    //     }
    // }

    // logic.apostar()
}

export default events