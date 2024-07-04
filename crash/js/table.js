// import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

// function xxx(){
//     setTimeout(()=>{
//         div_historico.scrollLeft = 10000
//     },10)
// }

let lista = [
    {img:1, name:"Sofia",     bet:197, mult:2, lucro: 0},
    {img:0, name:"Isabella",  bet:953, mult:3, lucro: 0},
    {img:2, name:"Camila",    bet:123, mult:4, lucro: 0},
    {img:2, name:"Valentina", bet:306, mult:2, lucro: 12},
    {img:0, name:"Valeria",   bet:257, mult:2, lucro: 0},
    {img:0, name:"Mariana",   bet:331, mult:6, lucro: 0},
    {img:2, name:"Luciana",   bet:451, mult:2, lucro: 0},
    {img:1, name:"Daniela",   bet:441, mult:2, lucro: 0},
    {img:0, name:"Gabriela",  bet:259, mult:2, lucro: 0},
]

let table = Vue.createApp({
    data() {
        return {
            historico: [1,2,3],
            bets: lista
        }
    },
    methods : {
        quantbets(){
            let l = this.bets.map(e=>e.bet).reduce((a,b)=>a+=b)
            return l
        }
    }
}).mount('#app')


// setInterval(()=>{
//     let r = (Math.random()*100)|0
//     table.addHistoric(r)
// },1000)


export default table