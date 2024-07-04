class Game {
  constructor() {
    this.wallet;
    this.moneyGame = 10;
    this.multGame = 1;
    this.bombQuantity = 1;
    this.betValue = 1;
    this.coinsReveled = 0;
    this.gameOver = true;

    this.init();
  }

  set btn(val) {
    btn_apostar.innerHTML = val;

    if (val.toLowerCase().match(/sacar/g)) btn_apostar.classList.add("btn-success");
    if (val == "Reiniciar") btn_apostar.className = "btn_apostar btn-warning";
    if (val == "Apostar") btn_apostar.className = "btn_apostar btn_apostar";
  }

  get btn() {
    return btn_apostar.innerHTML;
  }

  init() {
    btn_half.onclick = () => this.half();
    btn_double.onclick = () => this.double();

    this.setWallet(1000);
    this.setBetValue(2);
    this.setBombQuantity(3);
    this.setMoneyGame(0);

    for (let i = 0; i < div_bombs.children.length; i++) {
      div_bombs.children[i].onclick = () => {
        this.setBombQuantity(div_bombs.children[i].value);
        this.reset();
      };
    }

    btn_apostar.onclick = () => {
      if (this.btn == "Apostar" && this.wallet - this.betValue < 0) {
        this.message("O valor deve ser menor que o valor da carteira.");
        return false;
      }

      if (this.btn.toLowerCase().match(/sacar/g) && this.coinsReveled == 0) {
        this.message("É necessário escolher pelo menos uma carta.");
        return false;
      }

      if (this.btn.toLowerCase().match(/sacar/g)) {
        this.reset();
        this.btn = "Apostar";
        this.gameOver = true;
      } else if (this.btn == "Apostar") {
        this.gameOver = false;
        this.setMoneyGame(this.betValue);
        this.btn = "Sacar R$ " + this.moneyGame.toFixed(2).replace(".", ",");
        this.setWallet(this.wallet - this.betValue);
      }

      if (this.btn == "Reiniciar") {
        this.reset();
      }
    };
  }

  setCoinsReveled(val) {
    this.coinsReveled = val;
  }

  setWallet(val) {
    this.wallet = val;
    p_wallet.innerHTML = "R$ " + val.toFixed(2).replace(".", ",");
  }

  setMoneyGame(val) {
    val = parseFloat(val.toFixed(2));
    this.moneyGame = val;
    // console.log(parseFloat(val.toFixed(2)));
    // p_moneyGame.innerHTML = "R$ " + val.toFixed(2).replace(".", ",");
    p_moneyGame.innerHTML = "R$ " + val.toFixed(2).replace(".", ",");
  }

  setMultGame(val) {
    val = parseFloat(val.toFixed(2));
    this.multGame = val;
    p_multGame.innerHTML = val + "x";
  }

  setBombQuantity(qt) {
    qt = parseInt(qt);
    p_statBomb.innerHTML = qt;
    p_statCoin.innerHTML = 25 - qt;
    this.bombQuantity = qt;
  }

  setBetValue(val) {
    val = val < 1 ? 1 : val;
    this.betValue = val;
    inp_betValue.value = "R$ " + val.toFixed(2).replace(".", ",");
  }

  checkBombClicked() {}
  checkCoinClicked() {}

  double() {
    if (this.btn == "Apostar") this.setBetValue(this.betValue * 2);
  }

  half() {
    if (this.btn == "Apostar") this.setBetValue(this.betValue / 2);
  }

  win() {
    this.setCoinsReveled(++this.coinsReveled);
    // this.setMoneyGame(this.moneyGame + this.betValue * this.multGame);
    // this.setMoneyGame(this.betValue + this.coinsReveled * 0.8 * (this.bombQuantity / 10));
    this.setMoneyGame(this.betValue * this.multGame);

    this.resetMult();
  }

  lose() {
    this.setMoneyGame(0);
    this.gameOver = true;

    setTimeout(() => {
      this.revelate();
    }, 1000);
  }

  createTable() {
    let card_estrutura = `<div class="card flop"><div class="card-in"><img src="" /></div></div>`;
    cards.innerHTML = "";
    for (let i = 0; i < 25; i++) cards.innerHTML += card_estrutura;
  }

  setTable(arr) {
    arr = arr.split("");
    this.order = arr;
    let n = 0;
    for (let card of cards.children) {
      card.n = n++;
      card.onclick = () => {
        if (this.btn == "Apostar") {
          this.message("Aposte pelo menos um valor mínimo.");
        }

        if (card.classList.contains("card--yellow")) return false;
        if (card.classList.contains("card--red")) return false;
        if (this.gameOver) return false;

        card.classList.add("flip");

        if (arr[card.n] == 1) {
          card.classList.add("card--yellow");
          card.querySelector("img").src = "./imgs/coin.png";
          this.win();
        } else {
          card.classList.add("card--red");
          card.querySelector("img").src = "./imgs/bomb.png";
          this.lose();
        }

        if (this.coinsReveled > 0) {
          this.btn = "Sacar R$ " + this.moneyGame.toFixed(2).replace(".", ",");
        }

        if (this.moneyGame == 0) {
          this.btn = "Reiniciar";
        }
      };
    }
  }

  reset() {
    for (let card of cards.children) {
      card.classList.remove("card--yellow");
      card.classList.remove("card--red");
      card.classList.remove("flip");
    }
    this.setCoinsReveled(0);
    this.setWallet(this.moneyGame + this.wallet);
    if (this.moneyGame > 0) this.message("Sacou R$ " + this.moneyGame);
    this.setMoneyGame(0);
    this.setMultGame(1.04 + (this.bombQuantity / 100) * 5);
    this.btn = "Apostar";
    this.setTable(this.rand(this.bombQuantity));
  }

  rand(n) {
    let t = "";
    for (let i = 0; i < 25; i++) t += 1;
    t = t.split("");
    for (let i = 0; i < n; i++) t[i] = "0";
    return (t = unsort(t).join(""));
  }

  resetMult() {
    this.setMultGame(1.04 + (this.bombQuantity / 100) * 5 * this.coinsReveled);
    console.log("ok = " + this.multGame);
  }

  revelate() {
    let n = 0;
    for (let card of cards.children) {
      card.classList.add("flip");
      card.querySelector("img").src = game.order[n] == 1 ? "./imgs/coin.png" : "./imgs/bomb.png";
      n++;
    }
    setTimeout(() => {
      this.reset();
    }, 2000);
  }

  message(msg) {
    let div = document.createElement("div");
    div.className = "message";
    div.innerHTML = `<div class="message-in">${msg}</div>`;
    document.body.appendChild(div);
    setTimeout(() => {
      div.classList.add("message-out");
      div.onanimationend = () => div.remove();
    }, 3000);
  }
}

let game = new Game();
game.createTable();
// game.setTable("111111111111");
game.reset();

// game.setTable("1111111111111111111100000");
// game.setTable("1111111111111111111100000");
