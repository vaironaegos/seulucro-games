import line from "./line.js"
import message from "./message.js"
import foguete from "./foguete.js"
import values from "./values.js"
import estrelas from "./estrelas.js"
import button from "./button.js"
import logic from "./logic.js"
import table from "./table.js"


let game = {

    porcent: 1,
    stop: false,
    limit: 30,
    canBet: true,

    screen:{
        width: bloco.offsetWidth,
        height: bloco.offsetHeight
    },

    voar(){


        // estoura quando chega no limite
        if(this.porcent == this.limit) {
            this.explode()
            setTimeout(()=>this.renew(), 2000)
            
            if(button.checkName("Retirar") && values.profit > 0) {
                button.setName("Apostar")
                values.profit = 0
            }
        }

        // console.log(this.canBet)
        // console.log(this.stop)

        if(button.checkName('Retirar')){
            values.profit = parseFloat((values.bet * this.porcent).toFixed(2))
            button.el.setAttribute('data-value', " (R$ "+ values.profit.toFixed(2) +")")
            
            
            

        }else{
            button.el.setAttribute('data-value', ''  )
        }
        
        // coleta o dinheiro quando clica em retirar
        if(
            this.canBet == false && 
            this.porcent.toFixed(2) == values.mult.toFixed(2) && 
            button.checkName('Retirar')
            ){
            logic.collect()
        }

        // quando o multiplicador do jogo passa do multiplicador da aposta, fim
        if(this.canBet == false && this.porcent > values.mult && button.checkName('Retirar')){
            button.setName("Apostar");
            message.alert("Perdeu")
            this.canBet = true
        }

        this.porcent += 0.01
        this.porcent = parseFloat(this.porcent.toFixed(3))

        // animação de texto e foguete
        line(this.porcent*10)
        if(this.porcent > 90 || this.stop == true) return
        setTimeout(()=>{ this.voar() },1*1000/60)
        message.normal("x"+this.porcent.toFixed(2))
        estrelas.proximaEstrela()
        fundo.style.transform = `translateY(${this.porcent * 200}px)`;
    },

    explode(){
        // table.addHistoric(this.porcent)
        foguete.explode()
        this.pause()
    },

    pause(){
        this.stop = true
    },

    init(){
        values.setBet(values.bet)
        values.setMult(values.mult)
        values.setMoney(values.money)
    },
    
    setLimit(n){
        this.limit = n
    },

    reset(){
        if(button.checkName("Aguarde")){
            values.setMoney(values.money - values.bet)
            button.setName("Retirar")
        }
        // this.canBet = true

        this.porcent = 1
        this.stop = false
        foguete.reset()
        this.voar()
    },

    renew(){
        let tempo = 5
        let t = this
        let r = parseFloat((Math.random()*10).toFixed(2))
        this.setLimit(r)
        //this.canBet = true 
        function go(){
            message.normal(tempo--)
            setTimeout(()=>{ 
                if(tempo > 0) go()
                else t.reset()
             },1000)
        }go()
    }
}

window.addEventListener("resize", (event) => {
    game.screen = {
        width: bloco.offsetWidth,
        height: bloco.offsetHeight
    }
});

export default game