import explosion from './explosion.js'

let foguete = {
    x: 10,
    y: 10,
    el: img_foguete,

    setPos(x, y){
        img_foguete.style.left = x+"px"
        img_foguete.style.top = y+"px"

        // rocket_fire.style.left = (x-50)+'px'
        // rocket_fire.style.top = (y-70)+'px'
        // rocket_fire.style.display = 'none'

        // explosion.div_explosion.style.left = x+'px'
        // explosion.div_explosion.style.top = x+'px'
        
        // explosion.x = x
        // explosion.y = y
        explosion.x = x-10
        explosion.y = y-10
        
        smoke.style.left = x-42+'px'
        smoke.style.top = y-10+'px'
        
        // console.log(smoke)

    },

    explode(){
        console.log('foguete.explode')
        
        // explosion.explode()

        
        // console.log(this.el)
        // this.el.src = "./imgs/explosion.gif"
        // this.el.src = "./imgs/explosion.gif";
        // console.log(this.el)

        // img_foguete.src = "./imgs/explosion.gif"
        
        // img_foguete.style.mixBlendMode = "color-dodge";
        // img_foguete.style.transition = "0.5s";
        this.rocket_off()
        
        // setTimeout(() => {
        img_foguete.style.opacity = 0;

        explosion.explode()
        // }, 1000);
    },

    reset(){
        // this.el.src = "./imgs/foguete.svg"
        img_foguete.style.opacity = 1;
        // this.el.style.mixBlendMode = "unset";
        // this.el.style.transition = '0s'
    },

    rocket_on(){
        smoke.style.opacity = 1
        smoke.style.opacity = 1
    }, 

    rocket_off(){
        smoke.style.opacity = 0
        smoke.style.opacity = 0
    }
}

img_foguete.style.transform = "rotate(270deg)"

// setTimeout(()=>{
//     fire2.src="./video/r2.mp4"
//     fire1.src="./video/r1.mp4"
// }, 300)

// window.addEventListener('mousemove', e=>{
//     const y = e.clientY

//     foguete.setPos(100, y)
// })


// window.addEventListener("keyup", e=>{
//     if(e.key == 1){ foguete.reset() }
//     if(e.key == 2){ foguete.setPos(100, 100) }
//     let val = ran.value / 100 * 578 * -1
//     estrelas.backgrounStarPositionSky(val)
// })



export default foguete