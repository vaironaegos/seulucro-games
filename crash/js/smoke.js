const div_smoke = document.querySelector(".smoke")

const smoke = {
    addSmoke(div){

        const o = Math.random()
        const s = Math.random()*5|0
        const t = Math.random()*500|0
        const rx = Math.random()*30|0
        const ry = Math.random()*200|0
        
        const d = document.createElement('div')
        // d.style.filter = 'blur(4px)'
        d.style.borderRadius = '3px'
        d.style.width = 15+'px'
        d.style.height = 15+'px'
        d.style.backgroundColor = 'white'
        d.style.transition = '500ms'
        d.style.translate = `${rx}px 0px`
        d.style.rotate = '0deg'
        d.style.scale = 1
        d.style.opacity = o

        setTimeout(()=>{
            // d.style.opacity = 1
        }, 5)

        setTimeout(()=>{
            d.style.transition = '1000ms'
            d.style.translate = `15px ${ry}px`
            d.style.rotate = '360deg'
            d.style.scale = 0
            d.style.opacity = 0
        }, 500)

        setTimeout(()=>{
            d.remove()
        }, 1000)

        div.appendChild(d)
    }
}

setInterval(()=>{
    for(let i=0;i<10;i++){
        // setTimeout(()=>{
            smoke.addSmoke(div_smoke)
        // }, 50)
    }
},50)