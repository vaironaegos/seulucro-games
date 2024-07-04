import cards from "./cards.js";
import stats from "./stats.js";

let loading = {
  div: div_aguardar,
  pink: bar_pink,
  time: 200,

  setTime(n) {
    
    this.time = n;
    this.pink.style.width = `${(n * bar_pink.parentElement.offsetWidth) / 100}px`;

    if (n > 0) {
      this.div.style.opacity = 1;
    }

    if (this.time == 0) {
      this.end();
    }
    
  },

  down() {
    this.setTime(--this.time);
  },

  end() {
    console.log("tempo: "+this.time);
    this.div.style.opacity = 0;
    div_aguardar.style.opacity = 0
  },

  start() {
    // cards.choice(parseInt(Math.random() * 10 + 1));
    // cards.choice(2);
    stats.hud_off();
  },

  resetTime(time_limit){
    this.d1 = new Date()
    this.time_limit = time_limit
  },

  update() {

    let d2 = new Date()
    let s = ((d2-this.d1)/1000)
    let dif = this.time_limit-s
    let calc = dif*100/this.time_limit
    loading.setTime(calc)

    // if (this.time >= 0 && cards.status == "stop") {
    if (this.time >= 0 && cards.status == "stop") {
    //   this.down();
      div_aguardar.style.opacity = 1
    }else{
      div_aguardar.style.opacity = 0
    }

    window.requestAnimationFrame(this.update.bind(this));
  },
};

// let d1 = new Date("2023-02-05 16:40:00")
// let d2 = new Date("2023-02-05 16:41:00")

// let dif = (d2-d1)/1000/60 // diferença de tempo
// dif = dif*1000/15

// console.log(dif)
// loading.setTime(dif)


window.requestAnimationFrame(loading.update.bind(loading));

export default loading;

loading.resetTime(0)