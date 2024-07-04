import StrToHtml from './StrToHtml.js'
import Unsort from './Unsort.js'
import Values from './Values.js';
import Logic from './Logic.js'
import Message from './Message.js'

let Cards = {

  quantity: 25,
  bombs: 1,
  order: [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],

  Render() {
    let card_estrutura = StrToHtml(`
    <div class="card flop">
      <div class="card-in">
        <img src="" />
      </div>
    </div>`
    )
    cards.innerHTML = "";
    for (let i = 0; i < this.quantity; i++) 
      cards.appendChild(card_estrutura.cloneNode(true));
  },


  Flip(position) {
    if (cards.children[position].val == 1) {
      cards.children[position].classList.add("flip");
      cards.children[position].classList.add("card--yellow");
      cards.children[position].querySelector("img").src = "./imgs/coin.png";
      Logic.coin_plus();
    }

    if (cards.children[position].val == 0) {
      cards.children[position].classList.add("flip");
      cards.children[position].classList.add("card--red");
      cards.children[position].querySelector("img").src = "./imgs/bomb.png";
      // Logic.lose()
    }
  },

  FieldBombs(n){
    this.bombs = n
    let t = ""
    for(let i=0; i < 25 ;i++) t+=1
    for(let i=0; i <= n ;i++) t+=0
    t = t.split("").map(e=>Number(e))
    t = Unsort(t)
    console.log(t)
    this.order = t
    return t
  },

  BombsCoin(){
    for (let i = 0; i < this.quantity; i++) {
      cards.children[i].val = this.order[i];
      cards.children[i].position = i

      let t = this
      cards.children[i].onclick = function () {
        if(Values.bonus == 0){
          Message("Você deve apostar algum valor")
          return false
        }
        t.Flip(this.position)
        if(this.val==0) Logic.lose()
      };
    }
  }
};

Cards.FieldBombs(5);
Cards.Render();
Cards.BombsCoin()

// Cards.Flip(0);
// Cards.Flip(1);

// Cards.FlipVal(0, 0);
// Cards.FlipVal(1, 1);



// Cards.FlipVal(1,1);

export default Cards;
