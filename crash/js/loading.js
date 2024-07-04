import button from "./button.js"
import game from "./game.js"
import logic from "./logic.js"
import app from "./vue.js"
const loadbar = document.querySelector(".loadbar")

const loading = {

    tempo_atual: 1,
    tempo_inicial: 0,
    tempo_final: 3,
    isFinal: false,

    porcentage(n) {
        loadbar.style.width = (n) + "%"
        this.porcent = n
    },

    render() {
        const a = (this.tempo_final - this.tempo_inicial)
        const b = (this.tempo_final/1000 - this.tempo_atual/1000)
        const c = 100 * (1 - (b/a*-1))

        if(Math.floor(c) < 0 && !this.isFinal){
            console.log('ok')
            this.execute()
            this.isFinal = true
        }

        this.porcentage(c)

        if(c < 0) this.porcentage(0)
    },

    update() {
        this.tempo_atual = Date.now()
        
        
        setTimeout(() => {
            // this.tempo_atual -= 0.1
            this.render()
            this.update()
        }, 1000 / 60)
    },

    resetTime(n){
        this.isFinal = false
        loading.tempo_inicial = Date.now()
        loading.tempo_final = Date.now() + n
    },

    execute(){

        console.log('loading.execute')

        if(app.user.status == 'aguardando'){
            app.user.status = 'apostou'
        }

        game.limit = (2+Math.random()*2).toFixed(2)
        console.log(game.limit)

        game.start()
        game.voar()
    }
}

// loading.tempo_inicial = Date.now() + 8
// loading.tempo_final = Date.now() + 10

loading.resetTime(2)
loading.update()

export default loading

