import Cards from "./Cards.js";
import Message from "./Message.js";
import Values from "./Values.js";
// import Connection from "./Connection.js";
import audios from "./audios.js";

let Logic = {
  canBet: true,
  gameOver: true,
  turn: 0,

  getButton() {
    return btn_apostar.innerHTML;
  },

  setButton(value) {
    btn_apostar.innerHTML = value;

    if (value == "Parar") {
      btn_apostar.style.backgroundColor = "#e74c3c";
      btn_apostar.style.color = "white";
    }

    if (value == "Jogar") {
      btn_apostar.style.backgroundColor = "#4caf50";
      btn_apostar.style.color = "white";
    }
  },

  double() {
    if (this.getButton() == "Parar") {
      Message("Conclua a jogada primeiro");
      return false;
    }

    if (Values.bet < Values.maxBet) {
      if (Values.bet == 1) Values.setBet(Values.bet + 9);
      else Values.setBet(Values.bet + 10);
    }

    Values.refreshBonus2();
  },

  half() {
    if (this.getButton() == "Parar") {
      Message("Conclua a jogada primeiro");
      return false;
    }

    if (Values.bet > Values.minBet) Values.setBet(Values.bet - 10);

    if (Values.bet < Values.minBet) Values.setBet(Values.minBet);

    Values.refreshBonus2();
  },

  double_2() {
    if (this.getButton() == "Parar") {
      Message("Conclua a jogada primeiro");
      return false;
    }

    if (Values.bet < Values.maxBet) {
      Values.setBet(Values.bet * 2);
    }

    if (Values.bet > Values.maxBet) Values.setBet(Values.maxBet);

    Values.refreshBonus2();
  },

  half_2() {
    if (this.getButton() == "Parar") {
      Message("Conclua a jogada primeiro");
      return false;
    }

    if (Values.bet > Values.minBet) Values.setBet(Values.bet / 2);

    if (Values.bet < Values.minBet) Values.setBet(Values.minBet);

    Values.refreshBonus2();
  },

  bet() {

    // if (this.getButton() == "Jogar") Connection.start();

    if (this.getButton() == "Jogar" && Values.wallet - Values.bet < 0) {
      Message("Diminua o valor da aposta");
      return;
    }

    if (
      this.getButton() == "Parar" &&
      Values.coins_reveled > 0 &&
      this.gameOver == true
    ) {
      // Message("Diminua o valor da aposta")
      this.collect2();
      // this.setButton("Jogar");
      return;
    }

    if (this.getButton() == "Jogar") {
      this.checkPlay();
      Values.setWallet(Values.wallet - Values.bet);
      Values.setBonus(Values.bet);
      this.setButton("Parar");
      this.gameOver = false;
      Values.coins_reveled = 0;
    } else {
      this.collect();
    }

    Values.addMoneyHistoric(Values.bet);
    Values.refreshBonus2();
    Values.addMoneyHistoric(Values.bonus);
  },

  coin_plus() {
    Values.coins_reveled++;
    // Connection.win()
  },

  lose() {

    audios.lose();

    // Connection.loss();

    Values.setBonus(0);
    Values.setMoneyPast(0);

    Values.canBet = false;
    this.gameOver = true;

    setTimeout(this.showAllCards, 500);

    // setTimeout(()=>this.collect2(), 1500);
    setTimeout(() => this.collect2(), 2000);


    // a partir daqui
  },

  collect2() {
    // setTimeout(()=>{
    this.hideAllCards();
    // this.setButton("Jogar")
    Values.canBet = true;
    this.gameOver = true;
    Values.coins_reveled = 0;
    Values.setMult(1);
    // this.collect()
    // }, 3000);

    setTimeout(() => {
      Cards.FieldBombs(Cards.bombs);
      Cards.Render();
      Values.refreshBonus2();
      this.setButton("Jogar");
    }, 500);

    Values.setMoneyHistoric = [];
    Values.setMoneyPast(0);
  },

  showAllCards() {
    let cards_children = [...cards.children];
    cards_children.forEach((e) => {
      Cards.Flip(e.position);
    });
  },

  hideAllCards() {
    // let cards_children = [...cards.children];
    // cards_children.forEach((e) => e.classList.remove('flip'));
    function bye() {
      let a = 0;
      function revel(n) {
        audios.card();
        cards.children[n].classList.remove("flip");
        cards.children[n].classList.remove("card--yellow");
        cards.children[n].classList.remove("card--red");
        setTimeout(() => {
          if (a < 25) revel(a++);
        }, 10);
      }
      revel(a++);
    }
    bye();

    let cards_children = [...cards.children];
    cards_children.map((el) => {
      el.classList.remove("card--yellow");
      el.classList.remove("card--red");
    });
  },

  checkPlay() {
    if (this.getButton() == "Parar" && Values.coins_reveled == 0)
      Message("Escolha pelo menos 1 carta");
  },

  setBtBomb(n) {
    if (Logic.getButton() == "Parar") {
      Message("Conclua o jogo primeiro");
      return false;
    }

    Cards.setBombs(n);
    Values.setBombs(n);

    Cards.FieldBombs(Cards.bombs);
    Cards.Render();
    this.setButton("Jogar");

    Values.refreshBonus2();
  },

  collect() {
    if (Values.coins_reveled > 0 && this.gameOver) {
      return;
    }

    if (this.getButton() == "Parar" && Values.coins_reveled == 0) {
      Message("Escolha pelo menos 1 carta");
      return;
    }

    if (this.getButton() == "Parar" && Values.coins_reveled > 0) {
      Message("Parabéns");
      this.gameOver = true;

      // Values.setWallet(Values.wallet + Values.moneyPast);

      Cards.RevelateAll();

      // Connection.cachout();

      // a partir daqui
      setTimeout(()=>{
        this.hideAllCards()
        this.setButton("Jogar")
      },1000)

      setTimeout(()=>{
        Cards.FieldBombs(Cards.bombs);
        Cards.Render();
      },1500)

      Values.setMoneyHistoric = [];
      Values.setMoneyPast(0);

      return;
    }
  },

  luck() {
    function abrir(numeros) {
      if (btn_apostar.innerHTML == "Jogar") {
        btn_apostar.click();
      } else {
        return;
      }

      //numeros = [1,2,4]
      let n = 0;
      let stopp = false;
      let k = 0;

      function go() {

        function revelate() {
          setTimeout(() => {
            Cards.RevelateAll();
          }, 500);

          setTimeout(() => {
            Logic.hideAllCards();
            Values.canBet = true;
            Logic.gameOver = true;
            Values.coins_reveled = 0;
            Values.setMult(1);
          }, 1500);

          setTimeout(() => {
            Logic.setButton("Jogar");
          }, 2100);
        }

        // Promise.all([Connection.r])
        // .then(e=>{
          cards.children[numeros[n]].click();
          if (cards.children[numeros[n]].classList.contains("card--red")) {
            stopp = true;
          }
  
          n++;
  
          setTimeout(() => {
            if (n < numeros.length && !stopp) {
              go();
            }
            if (n == numeros.length && !stopp) {
              k++;
              revelate();
              // Connection.cachout();
              // if (k == 2) {
                // revelate()
                // revelate();
                // Connection.cachout();
                // return;
              // }
            }
            // if (n == numeros.length && stopp) {
            //   revelate();
            //   Connection.cachout();
            // }
          }, 100);
        // })

        
      }
      
      go();
    }

    //abrir([0,1,2,3,4,5])

    function randomNumbers(qt) {
      const numbers = new Set();
      while (numbers.size < qt) {
        numbers.add(Math.floor(Math.random() * 25));
      }
      return Array.from(numbers);
    }
    // randomNumbers()

    // let positions = [(Math.random()*25)|0, (Math.random()*25)|0]
    // let position
    // let achou = false

    // let qt = (Math.random()*25)|0
    // qt = 5

    // for(let i = 0 ; i < qt ; i++){
    //     let r = (Math.random()*25)|0
    //     positions.push(r)
    // }
    // positions = [... new Set(positions)]
    // abrir(randomNumbers(parseInt(inp.value)));
    abrir(randomNumbers(parseInt(document.querySelector(".square").innerText)));
    // abrir(parseInt(inp.value))
  },
};

export default Logic;
