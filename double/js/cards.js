// import game from "./game.js";
// import game from "./game.js";
import historic from "./historic.js";
import loading from "./loading.js";
import stats from "./stats.js";

let cards = {
  force: 0,
  div: div_cards,
  x: 0,
  choice_number: 10,
  endcard: false,
  status: 'stop',

  add_quantity(quantity) {

    function add(number) {
      let div = document.createElement("div");
      div.className = number % 2 ? "card card--green" : "card card--blue";
      div.className = number % 2 == 0 ? "card card--green" : "card card--blue";
      div.number = number;
      if (number == 10) {
        div.className = "card card--white";
        number = "x";
      }
      div.innerHTML = `<div class="card"><p>${number}</p></div>`;
      cards_in.appendChild(div);
    }

    for (let i = 0; i <= quantity; i++) add((i % 10) + 1);
  },

  update() {

    if (this.force > 0) {
      this.force -= 0.2;
      this.x -= this.force;
      cards_in.style.transform = `translateX(${this.x}px)`;
    }

    if(this.force < 0 && this.endcard == false){
      this.endcard = true
      this.end()
    }


    let w = div_cards.offsetWidth
    let w_center = w/2
    cards_in.style.transform = `translateX(${this.x+w_center-50}px)`
    cards_in.x = this.x+w_center-50
    

    // if(parseInt(this.force) == 0 && stats.gameover == false && loading.time == 0) {
      // console.log('fim do card')
      // historic.add(this.choice_number);
      // if (stats.gameover == false && btn_apostar.innerHTML == "Apostou") {
      //   if(stats.choice == 1 && this.choice_number == 0) stats.setWallet(stats.wallet + stats.betValue + stats.betValue * 14);
      //   if(stats.choice == 0 && this.choice_number != 0 && this.choice_number % 2 == 0) stats.setWallet(stats.wallet + stats.betValue + stats.betValue * 2);
      //   if(stats.choice == 2 && this.choice_number != 0 && this.choice_number % 2 == 1) stats.setWallet(stats.wallet + stats.betValue + stats.betValue * 2);
      // }
      // stats.reset();
      // stats.setGameOver(true);
      // this.end()
    // }

    // onde começa a girar
    // stats.reset();
    // stats.setGameOver(true);

    window.requestAnimationFrame(this.update.bind(this));

    // if(this.force == 1)
    
  },

  // end(){
    // historic.add(this.choice_number);
    // if (stats.gameover == false && btn_apostar.innerHTML == "Apostou") {
    //   if(stats.choice == 1 && this.choice_number == 0) stats.setWallet(stats.wallet + stats.betValue + stats.betValue * 14);
    //   if(stats.choice == 0 && this.choice_number != 0 && this.choice_number % 2 == 0) stats.setWallet(stats.wallet + stats.betValue + stats.betValue * 2);
    //   if(stats.choice == 2 && this.choice_number != 0 && this.choice_number % 2 == 1) stats.setWallet(stats.wallet + stats.betValue + stats.betValue * 2);
    // }
    // stats.reset();
    // stats.setGameOver(true);
    // console.log('cards.end')
  // },

  choice(n) {
    n = n%10
    this.x = 0;
    let pos = [55.2, 51.478, 51.91, 52.33, 52.75, 53.16, 53.58, 53.99, 54.39, 54.8];
    this.force = pos[n];
    this.choice_number = n;
    stats.setGameOver(false);
    this.endcard = false
    // stats.hud_off();

    stats.setGameOver(false);
    
    cards.status = 'rolling'

    // let num_x = cards_in.style.transform.match(/\d+/g)[0]|0
    // let w = div_cards.offsetWidth
    // cards_in.style.transform = `translateX(${(w/2)-50-num_x}px)`

    let w = div_cards.offsetWidth
    let w2 = w/2
    cards_in.style.transform = `translateX(${cards_in.x + w2 + 680 + 80}px)`

  },
};

cards.add_quantity(500);

// setTimeout(()=>{
//   cards.choice(0);
// },3000)
// window.requestAnimationFrame(cards.update.bind(cards));

let n = 0

// function go(){
//   if(cards.force > 0) { cards.update() }
//   setTimeout(()=>{
//     window.requestAnimationFrame(go);
//   }, 1000/60)
// }

window.requestAnimationFrame(cards.update.bind(cards));

export default cards;
