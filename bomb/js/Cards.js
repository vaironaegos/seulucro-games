import StrToHtml from './StrToHtml.js'
import Unsort from './Unsort.js'
import Values from './Values.js';
import Logic from './Logic.js'
import Message from './Message.js'
import Connection from './Connection.js';
import audios from './audios.js';


let Cards = {

  quantity: 25,
  bombs: 6,
  // order: [0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0],
  order: [0,0,0,0],

  Render() {
    let card_estrutura = 
    StrToHtml(`
    <div class="card flop">
      <div class="card-in">
        <img src="" />
      </div>
    </div>`)

    cards.innerHTML = "";
    for (let i = 0; i < 25; i++) cards.appendChild(card_estrutura.cloneNode(true));

    this.BombsCoin()
  },

  BombsCoin(){
    
    for (let i = 0; i < 25; i++) {
      cards.children[i].val = this.order[i];
      cards.children[i].position = i
      let t = this


      cards.children[i].onclick = function () {
      // cards.children[i].onmousedown = function () {

        if(this.classList.contains('flip')){
          // Message("Você não pode escolher a mesma carta")
          return false
        }

        if(Logic.gameOver && Logic.getButton() && Values.coins_reveled == 0){
          Message("Você deve apostar algum valor")
          return false
        }
        
        if(Logic.gameOver) return 

        if(Values.bonus == 0){
          Message("Você deve apostar algum valor")
          return false
        }
        

        t.position = this.position

        if(this.val==1) {
          //Connection.win()
          // if(Connection.roundId == undefined){
            // Promise.all([Connection.r]).then(e=> {
              t.Flip(i)
              // Connection.win()
            // } )
          // }else{
            t.Flip(i)
            // Connection.win()
          // }
        }
        

        if(this.val==0) {
          // Promise.all([Connection.r]).then(e=> Logic.lose() )

          if(Connection.roundId == undefined){
            Promise.all([Connection.r]).then(e=> {
              t.Flip(i)
              Logic.lose()
            } )
          }else{
            t.Flip(i)
            Logic.lose()
          }
        }


        
        if(this.val == 1){
          Values.refreshBonusN(Values.coins_reveled+1)
          Values.addMoneyHistoric(Values.bonus)
          Values.setMoneyPast(Values.moneyHistoric.at(-2))
          // new Audio(`./sounds/tik.mp3`).play()
          // if(this.classList.contains('flip')) 
          // Connection.win()
          // console.log(this)
        }


        // let aud = new Audio(`./sounds/card${Values.coins_reveled%3}.mp3`)
        // aud.play()

        // audios.card()

      };
    }
  },

  Flip(pos){
    if (this.order[pos] == 1) {
      cards.children[pos].classList.add("flip");
      cards.children[pos].classList.add("card--yellow");
      cards.children[pos].querySelector("img").src = "./imgs/coin.png";
      Logic.coin_plus();
      // new Audio(`./sounds/tik.mp3`).play()
      audios.tik()
    }
    if (this.order[pos] == 0) {
      cards.children[pos].classList.add("flip");
      cards.children[pos].classList.add("card--red");
      cards.children[pos].querySelector("img").src = "./imgs/bomb.png";
      // Logic.gameOver = true
      // Logic.lose()
    }
    // console.log(Cards.order)
    // console.log(cards.children[pos].val)
  },

  FieldBombs(n){
    let t = ""
    for(let i=0; i < 25 ;i++) t+=1
    t = t.split("").map(e=>Number(e))
    for(let i=0; i < n ;i++) t[i] = 0
    t = Unsort(t)
    this.order = t
    return t
  },

  RevelateAll(){

    let Revelate = pos =>{
      if (this.order[pos] == 1) {
        cards.children[pos].classList.add("flip");
        cards.children[pos].classList.add("card--yellow");
        cards.children[pos].querySelector("img").src = "./imgs/coin.png";
        audios.tik()
      }
      if (this.order[pos] == 0) {
        cards.children[pos].classList.add("flip");
        cards.children[pos].classList.add("card--red");
        cards.children[pos].querySelector("img").src = "./imgs/bomb.png";
        audios.tik()
      }
    }

    for(let i = 0;i<25;i++){
      Revelate(i)
    }
  },

  setBombs(n){
    this.bombs = n
    Values.bombs = n
    document.querySelector(".choicebomb p").innerHTML = n
    p_statBomb.innerHTML = n
    p_statCoin.innerHTML = 25 - n
  },

};

// Cards.setBombs(6)
// Cards.FieldBombs(Cards.bombs);
// Cards.Render();

// let a = 0
// function ok(){
//   if(a < 25)
//   setTimeout(()=>{
//     Cards.Flip(a++)
//     ok()
//   },25)
// }
// ok()

// Cards.BombsCoin()

// console.log(Cards.order)

// Cards.Flip(0);
// Cards.Flip(1);

// Cards.FlipVal(0, 0);
// Cards.FlipVal(1, 1);



// Cards.FlipVal(1,1);

export default Cards;