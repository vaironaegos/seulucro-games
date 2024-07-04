// let gameover = false
// let numbers_drawn = []

// FUNCTIONS
function $(n){ return document.querySelector(n) }
function $$(n){ return Array.from(document.querySelectorAll(n)) }

function loop(){
    // card.organizeAll()
    Card.organizeAll()
    Control.time.timestartgame()
    Control.checkTimeMessage()
}

function scrollNumber(){
    $(".numbers").onscroll=()=>{
        t = $(".numbers").scrollTop
        $(".numbers").style.transition = '0s'
        $(".numbers").style.backgroundPositionY = -t+'px'    
    }
}

function init(){
    // efeito_fade()
    scrollNumber()
    Marking.imageZero()
    Control.music.off()
}

function efeito_fade(){
    let seg = 0
    $$('.fade').map(e=>{
        setTimeout(()=>{
            e.classList.add("fade-in")
        }, seg++ * 100)
    })
}

// FADE

// objects
const Sound = {
    load(url){
        const aud = new Audio(url)
        aud.play()
    },
    number(num){
        this.load(`./audios/${num}.mp3`)
    },
    line(){
        this.load(`./audios/uma_linha.mp3`)
    },
    card(){
        this.load(`./audios/fechou_cartela.mp3`)
    }
}
const Control = {

    sound_ball: false,
    status: 0,
    called: true,

    music: {
        on(){
            $('#volume_control').src = './icons/volume_on.svg'
            $("#mainsong").play()
            $("#volume_control").onclick = () => this.off()
            $("#volume_control").classList.remove('pulse')
            $("#div_sound_active").style.opacity = "0"
        },
        off(){
            $('#volume_control').src = './icons/volume_off.svg'
            $("#mainsong").pause()
            $("#volume_control").onclick = () => this.on()
        }
    },

    time: {
        
        createAt:'2024-03-24 17:14:59',
        startAt:'2024-03-24 17:15:40',
        call: true,

        clock(time){
            const c = time

            const seconds = (c/1000)%60 | 0
            const minutes = (c/1000)/60%60 | 0
            const hours = (c/1000)/60/60 | 0
            
            const seconds_s = seconds.toString().padStart(2, '0')
            const minutes_s = minutes.toString().padStart(2, '0')
            const hours_s = hours.toString().padStart(2, '0')

            // t = `${hours_s}:${minutes_s}:${seconds_s}`
            t = `${minutes_s}:${seconds_s}`

            // if(seconds_s == 0){
            //     alert('ok')
            // }

            return t
        },

        timestartgame(){
            // let a = new Date('2024-03-24 16:40:00')
            // let b = new Date('2024-03-24 16:00:10')
            let a = new Date(this.createAt)
            let b = new Date(this.startAt)

            let n = new Date()
        
            t1 = this.clock( a - n ) // '00:01:10'
            t2 = this.clock( b - n ) // '00:01:10'
        
            app.t1 = t1
            app.t2 = t2

            
            // console.log(t1)
            // console.log(t2)

            // if(app.t2 == '00:00' && this.call){
                // this.call = false
                // fetch(&quot;https:\/\/start.topbingos.com.br&quot;)
                // fetch("https://start.topbingos.com.br")
            // }
        }
    },

    checkTimeMessage(){

        // if(this.status == 3){
        //     console.log('certo 3')
        // }

        if(this.status == 3){
            if(new Date(this.time.startAt) - new Date() <= 0){
                Message.off(div_msg_2)
                if(this.called){
                    this.called = false
                    fetch("https://start.topbingos.com.br")
                    console.log('carregou')
                }
                // efeito_fade()
            }else{
                Message.on(div_msg_2)
            }    
        }
        
        
        // if(new Date(this.time.createAt) - new Date() <= 0){
        //     Message.off(div_msg_1)
        // }else{
        //     Message.on(div_msg_1)
        // }
    },

    loading_off(){
        Dialog.close(div_loading)
        efeito_fade()
    }
}

const Marking = {

    getTabelaArray(tabela){
        const arr = []
        $$('.card-mini')[tabela].querySelectorAll('div').forEach(e=>{
            arr.push(e.innerText|0)
        })
        return arr
    },

    paint(table_position, number){
        const pos = []
        this.getTabelaArray(table_position).map((e,i)=>{
            if(e == number){
                pos.push(i) 
            }
        })
        pos.map(table_num=> {
            $$('.card-mini')[table_position].children[table_num].classList.value = "card-item-checked"
        })
    },

    paintAll(number){
        $$('.card-mini').forEach((table, index)=> this.paint(index, number) )
    },

    paintAllArray(arr){
        try{
        arr.map(e=> this.paintAll(e) )
        }catch(e){}
    },

    clean(){
        $$('.card-item-checked').forEach(table => table.classList.value = 'card-item')
    },

    imageZero(){
        $$(".card-mini").map((e,i)=>{
            e.children[12].innerHTML = "<img src='./imgs/indio.png'> "
        })
    }
}

const Card = {

    organize(t1, t2){
        if(this.checkedLength(t1) < this.checkedLength(t2)){
            this.swap(t1, t2)
        }
    },

    organizeAll(){
        for(let i=1 ; i<$$(".card-mini").length ; i++){
            this.organize(i-1, i)
        }
    },
    
    swap(n1, n2){
        // const a = document.querySelector('.group-3').children[3]
        // const b = document.querySelector('.group-3').children[2]
        const a = $('.group-3').children[n2]
        const b = $('.group-3').children[n1]
        const parent = a.parentElement
        parent.insertBefore(a, b)
    },
    
    checkedLength(n){
        const len = $$(".card-mini")[n].querySelectorAll('.card-item-checked').length
        return len
    }

}

const Play = {
    number(num){
        app.bolas_chamadas.unshift(num)
        app.bolas_chamadas_r.push(num)
        Marking.paintAll(num)
        if(Control.sound_ball)
            Sound.number(num)
    },
    numbers(arr_num){
        arr_num.map(n=>this.number(n))
    },
    line(){
      Sound.line()
      Message.text("Marcou uma linha")
    },
    card(){
      Sound.card()
      Message.text("Marcou uma Cartela")
    },
    clean(){
        Marking.clean()
        app.bolas_chamadas = []
        app.bolas_chamadas_r = []
    },
}

const Dialog = {
    open(div){ 
        div.classList.remove('dialog-off'); 
        div.querySelector('.dialog_bt_close').onclick=()=>{
            this.close(div)
        }
        // div.onclick = () => {
            // this.close(div)
            // console.log(this)
        // }
    },
    close(div){ div.classList.add('dialog-off'); }
}

const Message = {
    text(txt){
        const div = document.createElement('div')
        div.className = 'profile'
        div.innerHTML = `<img src="./imgs/trofeu.png">${txt}</div>`
        
        // setTimeout(()=> {div.style.opacity = 0}, 1000)
        
        $$('.message_down')[0].appendChild(div)

        setTimeout(()=>{
            
            div.classList.add('message_down_bye')
        }, 3000)

        setTimeout(()=>{
            div.remove()
        }, 5000)


        // setTimeout(()=> {
        //     div.style.height = '0px'
        // } , 1000)
        // setTimeout(()=> {
        //     div.style.display = 'none'
        // } , 2500)
        // setTimeout(()=> {div.remove()} , 7000)
    },
    on(div){
        div.classList.remove('none')
        div.classList.remove('message_down_bye')
    },
    off(div){
        div.classList.add('message_down_bye')
        // setTimeout(()=>{
        //     div.remove()
        // },2000)
        // div.classList.add('none')
    },
    close(div){
        div.classList.add('message_down_bye')
        setTimeout(()=>{
            div.remove()
        },2000)
        // div_msg_2.classList.add('message_down_bye')
    }
}

setInterval(loop, 1000/30)

document.addEventListener('keyup', e=>{
    if(e.key == '1') Play.number(1)
    if(e.key == '2') Play.number(2)
    if(e.key == '3') Play.numbers([95,18,20,41])
    if(e.key == '0') Marking.clean()
    if(e.key == '\'') Message.text("vamos")
})

document.addEventListener('DOMContentLoaded', page=>{
    init()
})