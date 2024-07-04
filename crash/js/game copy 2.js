import line from "./line.js"
import message from "./message.js"
import foguete from "./foguete.js"
import values from "./values.js"
import estrelas from "./estrelas.js"
import button from "./button.js"
import logic from "./logic.js"
import table from "./table.js"
import time from "./time.js"


let game = {

    porcent: 1,
    stop: false,
    limit: 2,
    canBet: true,

    screen:{
        width: bloco.offsetWidth,
        height: bloco.offsetHeight
    },

    end(){
        this.explode()
        // game.porcent = val
        if(button.checkName("Retirar") && values.profit > 0) {
            button.setName("Apostar")
            values.profit = 0
        }
    },

    voar(){

        // estoura quando chega no limite
        if(this.porcent >= this.limit) {

            this.explode()

            setTimeout(()=>this.renew(), 2000)
            
            if(button.checkName("Retirar") && values.profit > 0) {
                button.setName("Apostar")
                values.profit = 0
            }
        }


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

        time.d3 = new Date()
        


        // console.log(time.d3.getTime())

        // console.log(time.d2.getTime())
        // console.log(time.d3.getTime())
        // console.log((time.d3.getTime() - time.d2.getTime())/1000)

        // console.log(time)
        this.porcent = time.calc()

        // this.porcent = parseFloat(this.porcent.toFixed(3))

        // animação de texto e foguete
        line(this.porcent * 5)

        if(this.porcent > 90 || this.stop == true) return
        // if(this.stop == true) return
        
        setTimeout(()=>{ this.voar() }, 1000/60)
        
        message.normal("x"+this.porcent.toFixed(2))
        // estrelas.proximaEstrela()
        estrelas.backgrounStarPositionSky(this.porcent)
        // console.log(this.porcent)
        
        fundo.style.transform = `translateY(${this.porcent * 20}px)`;
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

window.addEventListener("keyup", e=>{
    // ajusta todas as posições
    if(e.key == "1"){ 
        line(0)
        estrelas.backgrounStarPositionSky(0)
        estrelas.backgrounStarPositionSky2(0)
        message.normal("x0.0")
    }

    if(e.key == "2"){ 
        game.reset()
    }

    if(e.key == "3"){ 
        foguete.explode()
        // game.message
    }
})

window.addEventListener('mousemove', e=>{
    let porc = e.clientX/document.body.offsetWidth * 100
    line(porc)
    estrelas.backgrounStarPositionSky(porc*-1)
    estrelas.backgrounStarPositionSky2(porc*2)
    message.normal("x"+porc.toFixed(2))
    // fundo.style.transform = `translateY(${porc * 20}px)`;
    // console.log( porc )
})


export default game