let estrelas = {
    el: div_estrelas,
    n: 0,

    backgrounStarPositionSky(n){
      this.n = n
      this.el.style.backgroundPosition = 0 + "px " + -this.n * 2 + "px";
      // fundo.style.transform = `translateY(${n * 20}px)`;
    },

    backgrounStarPositionSky2(n){
      fundo.style.transform = `translateY(${n}px)`;
    },

    proximaEstrela() {
      --this.n;
      this.el.style.backgroundPosition = 0 + "px " + -this.n * 2 + "px";
    },

    reset(){
        this.n = 0
    }

  };


// window.addEventListener("mousemove", e=>{
//   const x = e.clientX*2
//   // let val = ran.value / 100 * 578 * -1
//   estrelas.backgrounStarPositionSky(x)
//   estrelas.backgrounStarPositionSky2(x)
// })

export default estrelas