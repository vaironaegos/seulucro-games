// const div_explosion = document.querySelector(".explosion")



function boom(x, y){

    const aud = new Audio()
    aud.src = "./mp3/firecracker.mp3"
    aud.play()

    const proprieties = {
        time: 1000,
        distance: 1000,
        size: 30,
        quantity: 100
    }

    const div_explosion = document.createElement('div')
    div_explosion.className = 'explosion'
    // document.body.appendChild(div_explosion)
    bloco.appendChild(div_explosion)
    
    setTimeout(()=>{
        div_explosion.remove()
    }, proprieties.time)

    function ball(){

        const random = (min, max) => Math.random() * (max - min) + min;
    
        const n1 = Math.random() * 200 | 0
        const n2 = Math.random() * 200 | 0
        const n3 = n1-n2
    
        const dx = random(-proprieties.distance, proprieties.distance)
        const dy = random(-proprieties.distance, proprieties.distance)
        const hip = Math.sqrt(dx**2 + dy**2)
        const size = Math.random()*proprieties.size
        
        const div = document.createElement('div')
        div.style.backgroundColor = 'red'
        div.style.transition = 'ease-out '+proprieties.time+'ms'
        div.style.scale = 1
        div.style.width = size+"px"
        div.style.height = size+"px"
        
        const r = (Math.random()*255|0).toString(16)
        const g = (Math.random()*255|0).toString(16)
        const b = (Math.random()*255|0).toString(16)
        // const color = `#${r}${g}${b}`
        const color = `#FFFFFF`

        div.style.backgroundColor = color
            
        setTimeout(()=>{
            div.style.left = hip*Math.sin(dx)+'px'
            div.style.top = -hip*Math.cos(dy)+'px'
            // div.style.opacity = 0
            div.style.scale = 0
        }, Math.random()*100|0)
        
        div_explosion.appendChild(div)
    }

    function explode(x, y){
        div_explosion.style.top = y+'px'
        div_explosion.style.left = x+'px'
        for(let i = 0;i<proprieties.quantity;i++){
            ball()
        }
    }

    explode(x, y)

}

const explosion = {
    x: 0, 
    y: 0, 
    explode(){
        // console.log('explodiu aqui ')
        // console.log('x: '+this.x)
        // console.log('y: '+this.y)

        // explode(this.x, this.y)
        // explode(100, 100)
        boom(this.x, this.y)

        // boom(this.x, this.y)
    }
}



// window.onclick=function(e){
//     explosion.x = e.clientX-20
//     explosion.y = e.clientY-10
//     explosion.explode()    
// }

export default explosion