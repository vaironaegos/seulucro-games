let gameover = false
let numbers_drawn = []

// FUNCTIONS
function $(n){ return document.querySelector(n) }
function $$(n){ return document.querySelectorAll(n) }

// NUMBERS

const marcacao = {
    linha(tabela, lin){
        // tabela = 0
        // lin = 1
        a = $$('.card-mini')[tabela].children[lin*5+0]
        b = $$('.card-mini')[tabela].children[lin*5+1]
        c = $$('.card-mini')[tabela].children[lin*5+2]
        d = $$('.card-mini')[tabela].children[lin*5+3]
        f = $$('.card-mini')[tabela].children[lin*5+4]
        
        if(a.classList.value == 'card-item-checked') a.classList.value = "card-item-checked2";
        if(b.classList.value == 'card-item-checked') b.classList.value = "card-item-checked2";
        if(c.classList.value == 'card-item-checked') c.classList.value = "card-item-checked2";
        if(d.classList.value == 'card-item-checked') d.classList.value = "card-item-checked2";
        if(f.classList.value == 'card-item-checked') f.classList.value = "card-item-checked2";
        
        
    },
    
    coluna(tabela, col){
        // tabela = 0
        // col = 1
        a = $$('.card-mini')[tabela].children[col+5*0]
        b = $$('.card-mini')[tabela].children[col+5*1]
        c = $$('.card-mini')[tabela].children[col+5*2]
        d = $$('.card-mini')[tabela].children[col+5*3]
        f = $$('.card-mini')[tabela].children[col+5*4]
        
        if(a.classList.value == 'card-item-checked') a.classList.value = "card-item-checked2"
        if(b.classList.value == 'card-item-checked') b.classList.value = "card-item-checked2"
        if(c.classList.value == 'card-item-checked') c.classList.value = "card-item-checked2"
        if(d.classList.value == 'card-item-checked') d.classList.value = "card-item-checked2"
        if(f.classList.value == 'card-item-checked') f.classList.value = "card-item-checked2"
    },

    full(tabela){
        this.linha(tabela, 0)
        this.linha(tabela, 1)
        this.linha(tabela, 2)
        this.linha(tabela, 3)
        this.linha(tabela, 4)
    }
}

const sons = {
    linha(){
        setTimeout(()=>{
            const som = new Audio("./audios/uma_linha.mp3")
            som.play()
            // audlinha.play()
        },1200)
    },

    cartela(){
        setTimeout(()=>{
            const som = new Audio("./audios/fechou_cartela.mp3")
            som.play()
            // audcartela.play()
        },1200)
    }
}


const numbers = {

    clear(){
        e_numbers.innerHTML = ''
        for(let i=0;i<99;i++){
            e_numbers.innerHTML += `
                <div class="ball ball-c"> <span>${i+1}</span> </div>
            `
        }
    },
    
    open(n){
        // n = 8
        e_numbers.children[n-1].classList.value = 'ball ball-c ball-actived'
        e_numbers.children[n-1].innerHTML = `<span>${n}</span>`
    },

    opens(arr){
        // arr = [1,5,7,15,16,20,23]
        arr.forEach(e=>numbers.open(e))
    }
    
}


numbers.clear()
// numbers.opens([1,2,3])

// GLOBE
const globe = {
    escolha(n){
        div_animation.style.opacity = 1
        div_animation.style.visibility = 'initial'
        setup()
        girar = false
        setTimeout(()=>{ girar = true } , 1000)
        setTimeout(()=>{ choiceBall(n) } , 4000)
        setTimeout(()=>{ 
            div_animation.style.opacity = 0
            div_animation.style.visibility = 'hidden'
        } , 6000)
    }
}

window.onkeyup=function(e){
    if(e.key == "1"){
        globe.escolha(99)
    }
}



// DIALOG

function dialog(el){

    // console.log(el)

    el.closee = () =>{
        el.classList.add('dialog-off')
    }
    // console.log(el)
    el.openn = function(){
        this.classList.remove('dialog-off')
    }
    
    
    
    el.children[0].onclick=function(e){
        e.stopPropagation()
    }
}

dialog(div_dia_1)
dialog(div_dia_2)

function abrir(el){
    el.classList.remove('dialog-off')

    el.onclick=function(e){
        this.classList.add('dialog-off')
        console.log('ok')
    }

    el.children[0].onclick=function(e){
        e.stopPropagation()
    }
}

// abrir(div_dia_1)

// div_dia_1.open()

// div_dia_1.fechar = () => {}

// ROOL
const rool = {

    sorteados: [],

    add(n){
        let div = document.createElement('div')
        div.className = "ball ball-c"
        div.innerHTML = `<span>${n}</span>`
        div_rool_in.insertBefore(div, div_rool_in.firstChild)
        this.sorteados.push(n)
    },

    clear(){
        console.log(div_rool_in)
        div_rool_in.innerHTML = ''
    },

    order(arr){
        arr.forEach(e=>{
            this.add(e)
        })
    },

    clear(){
        this.sorteados = []
        numbers_drawn = []
        
    }



    
}

// AUDIO

let audio = {
    play(url){
        // console.log(numero)
        // eval('aud'+numero).play()
        // aud99.play()
        let aud = new Audio(url)
        aud.src = `./audios/`+url+".mp3"
        aud.play()
    }
}

// CARTELA

const cartela = {

    quantity(sorteados , cartela){

        let nova_cartela = []
        for(let c=0;c<5;c++){
            for(let l=0;l<5;l++){
                nova_cartela.push(cartela[l*5+c])
            }
        }
        
        z1 = []
        z2 = []
        acertos = 0
        
        cartela.map(e=>{
            z1.push(sorteados.includes(e) ? 1 : 0)
        })
        
        nova_cartela.map(e=>{
            z2.push(sorteados.includes(e) ? 1 : 0)
        })
        
        a1 = z1.join("").slice(0,4) == '1111'
        a2 = z1.join("").slice(5,9) == '1111'
        a3 = z1.join("").slice(10,14) == '1111'
        a4 = z1.join("").slice(15,19) == '1111'
        a5 = z1.join("").slice(20,24) == '1111'
        
        b1 = z2.join("").slice(0,4) == '1111'
        b2 = z2.join("").slice(5,9) == '1111'
        b3 = z2.join("").slice(10,14) == '1111'
        b4 = z2.join("").slice(15,19) == '1111'
        b5 = z2.join("").slice(20,24) == '1111'
        
        if(a1) acertos++
        if(a2) acertos++
        if(a3) acertos++
        if(a4) acertos++
        if(a5) acertos++
        
        if(b1) acertos++
        if(b2) acertos++
        if(b3) acertos++
        if(b4) acertos++
        if(b5) acertos++
        
        if(sorteados.length < 5) acertos = 0
        return acertos

    },

    check(n){
        // card.organizeAll()
        // c1 = app.cartelas[n].slice(1)
        c1 = $$('.card-mini')[n].innerText.replace(/\n/g, ",")
        c1 = eval("["+c1+"]")

        qt = this.quantity(rool.sorteados, c1)
        div = $$('.card-mini')[n]
        
        // console.log("\n")
        // console.log("cartela.sorteados = "+cartela.sorteados)
        // console.log("rool.sorteados = "+rool.sorteados)
        // console.log("c1 = "+c1)
        // console.log("div = "+div)
        // console.log("qt = "+qt)
        

        

        if(div.getAttribute('a') == null && qt == 1){
            div.setAttribute('a', '')
            sons.linha()
            // paint_lin_col(t=0)
        }

        if(div.getAttribute('b') == null && qt == 10){
            div.setAttribute('b', '')
            sons.cartela()
            // gameover()
            gameover = true
        }

        if(qt == 1){
            console.log(qt)
            paint_lin_col(n)
        }

        if(qt == 10){
            setTimeout(()=>{
                paint_lin_col(n)
            }, 100)
        }

    },

    check_all(){
        for(let cc=0 ; cc < app.cartelas.slice(1).length ; cc++){
            cartela.check(cc)
        }
    },

    edit(index, arr){
        Vue.set(app.cartelas, index, arr)
    },

    clear(){
        Array.from(document.querySelectorAll('.card-item-checked')).map(e=>{
            e.classList.value = "card-item"
        })
        Array.from(document.querySelectorAll('[a]')).map(e=>{
            e.removeAttribute('a')
            e.removeAttribute('b')
        })
    },

    edit(arr){
        app.editarCartelas(arr)
    },

    zero_image(){
        const cards_minis = document.querySelectorAll(".card-mini")

        for(c_min of cards_minis){
            if(c_min.innerHTML.includes('>0<'))
                c_min.innerHTML = c_min.innerHTML.replace(/>0</g, "><img src='./imgs/globe.png' width='20'><")
        }
        // cartela.zero_image()
    }

    // app.limpar([[1,2,3], [5,2,3]])

}

// card_mini = Array.from(document.querySelectorAll('.card-mini'))

const card = {
    card_check(card_a, sorteados){
        //card_a = card_mini[0]
        const card_b = card_a.children[0]
        card_a.children.forEach(card_b=>{
            if(sorteados.includes(parseInt(card_b.innerHTML))){
                if(card_b.className == 'card-item')
                    card_b.className = 'card-item-checked'
            }
        })
    },
    card_check_all(){
        card_mini = Array.from(document.querySelectorAll('.card-mini'))
        card_mini.forEach(c=>{
            card.card_check(c, numbers_drawn)
        })
    },

    card_change(a, b) {
        // const a = document.querySelector('.group-3').children[3]
        // const b = document.querySelector('.group-3').children[2]
        const parent = a.parentElement
        
        parent.insertBefore(a, b)
    },

    organize(){
        let group = document.querySelector('.group-3')
        let total = document.querySelector('.group-3').children.length

        for(let j=1; j<total;j++){
        
            let a = group.children[j]
            let al = a.querySelectorAll('.card-item-checked').length

            let b = group.children[j-1]
            let bl = b.querySelectorAll('.card-item-checked').length
                
            if(al > bl)
                this.card_change(a,b)    
        }    
    },

    organizeAll(){
        for(i=0;i<99;i++){
            this.organize()
        }
    }
}

// function gerarAleatoriosSemRepeticao(quantidade) {
//     if (quantidade > 99) {
//       throw new Error("Quantidade de números aleatórios deve ser menor ou igual a 99.");
//     }
  
//     const numerosAleatorios = [];
//     const numerosUsados = new Set();
  
//     while (numerosAleatorios.length < quantidade) {
//       const numeroAleatorio = Math.floor(Math.random() * 99) + 1;
  
//       if (!numerosUsados.has(numeroAleatorio)) {
//         numerosAleatorios.push(numeroAleatorio);
//         numerosUsados.add(numeroAleatorio);
//       }
//     }
  
//     return numerosAleatorios;
//   }

// Exemplo de uso
// const numeros = gerarAleatoriosSemRepeticao(99);
const numeros = [99, 3, 44, 61, 74, 32, 17, 75, 98, 85, 10, 30, 89 , 61, 76, 11, 15, 6, 62, 28, 54, 24, 60, 3, 75, 96, 71, 7, 80, 49]
  
// let s = setInterval(()=>{
//     if(gameover) return
//     let r = numeros.shift()
//     chama(r)
// }, 3.5 * 1000 )

// CHAMA

function chama(v){
    let r = v    
    //let r = numeros.pop()
    choiceBall(1)

    setTimeout(()=>{
        // card.organizeAll()
        rool.add(r)
        // audio.play("./audios/"+r+".mp3")
        // audio.play("./audios/"+r+".mp3")
        audio.play(r)
        numbers_drawn.push(r)
        numbers.open(r)
        // card.card_check_all() // visual amarelo 
        // cartela.check_all() // checa linhas ou colunas (som)
        // card.organizeAll() // ordena as cartelas
        // marcacao.linha(0, 0)
    },450)
}

setInterval(()=>{
    card.organizeAll()
    card.card_check_all()
    cartela.check_all()
})

function chamas(arr){
    x = arr
        x.forEach(chama)
}

window.onkeyup=function(e){
    
    if(e.key == "1") chamas([98, 85, 10, 30])
    
    if(e.key == "2") chamas([89])

    if(e.key == "3") chamas([18,47,4,36,54])
    
    if(e.key == "4") chamas([95, 18, 24, 69, 94, 75, 69, 29, 21, 23, 20, 36, 46, 17, 23, 1, 35, 64, 41, 6, 61, 71, 21, 83, 72])
    
    if(e.key == "4") chamas([95, 18, 24, 69, 94, 75, 69, 29, 21, 23, 20, 36, 46, 17, 23, 1, 35, 64, 41, 6, 61, 71, 21, 83, 72])



    // if(e.key == "5") cartela.clear()
}


function paint_lin_col(t=0){
    // t = 0
    // colunas
    for(let c=0;c<5;c++){
        a1 = $$('.card-mini')[t].children[c+5 * 0 ]
        a2 = $$('.card-mini')[t].children[c+5 * 1 ]
        a3 = $$('.card-mini')[t].children[c+5 * 2 ]
        a4 = $$('.card-mini')[t].children[c+5 * 3 ]
        a5 = $$('.card-mini')[t].children[c+5 * 4 ]

        b1 = a1.className == 'card-item-checked'
        b2 = a2.className == 'card-item-checked'
        b3 = a3.className == 'card-item-checked'
        b4 = a4.className == 'card-item-checked'
        b5 = a5.className == 'card-item-checked'

        if(b1 && b2 && b3 && b4 && b5){
            a1.className = 'card-item-checked2'
            a2.className = 'card-item-checked2'
            a3.className = 'card-item-checked2'
            a4.className = 'card-item-checked2'
            a5.className = 'card-item-checked2'
        }
    }

    // linhas
    for(let l=0;l<5;l++){

        a1 = $$('.card-mini')[t].children[(l*5)+0]
        a2 = $$('.card-mini')[t].children[(l*5)+1]
        a3 = $$('.card-mini')[t].children[(l*5)+2]
        a4 = $$('.card-mini')[t].children[(l*5)+3]
        a5 = $$('.card-mini')[t].children[(l*5)+4]

        b1 = a1.className == 'card-item-checked'
        b2 = a2.className == 'card-item-checked'
        b3 = a3.className == 'card-item-checked'
        b4 = a4.className == 'card-item-checked'
        b5 = a5.className == 'card-item-checked'

        if(b1 && b2 && b3 && b4 && b5){
            a1.className = 'card-item-checked2'
            a2.className = 'card-item-checked2'
            a3.className = 'card-item-checked2'
            a4.className = 'card-item-checked2'
            a5.className = 'card-item-checked2'
        }
    }
}

function paint_lin_col_all(){
    for(let q=0;q<$$('.card-mini').length;q++){
        paint_lin_col(q)
    }
}

// msg
function msg(message="ok", imgg="./imgs/trofeu.png"){
    // let message = "vamos"
    // let imgg = "./imgs/caitlyn.png"

    const div = document.createElement("div")
    div.className = "profile"
    
    div.innerHTML = `
        <img src="${imgg}">
        <div>
            ${message}
        </div>
    `

    msg_box.appendChild(div)

    div.style.opacity = 0
    div.style.translate = "0px 10px"

    setTimeout(()=>{
        div.style.opacity = 1
        div.style.translate = "0px 0px"
    },100)

    setTimeout(()=>{
        div.style.opacity = 0
        div.style.translate = "0px 10px"
    },4000)

    setTimeout(()=>{
        div.remove()
    },4500)
}

// window.onkeyup=function(){
//     msg("Renata<br>Fechou a cartela")
// }
// for(i=0;i<10;i++){
//     msg("vamos "+i)
// }

// cartela.zero_image()


// PRELOAD AUDIOS
n=0
function loadsong(){
    n++
    let aud = new Audio()
    aud.src = `./audios/${n}.mp3`
    // aud.id = "aud"+n
    // aud.preload = true
    document.body.appendChild(aud)

    aud.oncanplaythrough = () =>{
        if(n < 99){
            loadsong()
        }
        aud.remove()
        // if(n==98){
            // bar_loading.style.display="none"
        // }
        // bar_loading_in.style.width = n+'%'
        // div_loading.remove()
    }

    
    
}

aud1 = new Audio()
aud1.src = `./audios/uma_linha.mp3`
aud1.id = 'audlinha'
document.body.appendChild(aud1)
// aud1.oncanplaythrough = () =>{ aud1.remove() }

aud2 = new Audio()
aud2.src = `./audios/fechou_cartela.mp3`
aud2.id = 'audcartela'
document.body.appendChild(aud2)
// aud2.oncanplaythrough = () =>{ aud2.remove() }

loadsong()


