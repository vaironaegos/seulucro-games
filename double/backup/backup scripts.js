let aguardar = {
  div: div_aguardar,
  pink: bar_pink,
  time_num: 200,

  set time(n) {
    this.time_num = n;
    this.pink.style.width = `${(n * bar_pink.parentElement.offsetWidth) / 1000}px`;

    if (this.time_num == 0) {
      this.end();
      this.div.style.opacity = 0;
    } else {
      this.div.style.opacity = 1;
    }
  },

  down() {
    this.time = --this.time_num;
  },

  end() {
    console.log("ok");
  },

  update() {
    if (this.time_num > 0) this.down();

    window.requestAnimationFrame(this.update.bind(this));
  },
};

class Game {
  constructor() {
    this.forcaX = 10;
    this.s = 0;
    this.escolha_aposta = 0;
    this.betValue = 1;
    this.wallet = 200;
    this.time_loading = 20;
    this.time = true;
    this.paused = true;

    this.init();
  }

  setButtonEscolhaAposta(n) {
    this.escolha_aposta = n;
    $(".escolha > .btn-active").classList.remove("btn-active");
    $$(".escolha > button")[n].classList.add("btn-active");
  }

  init() {
    btn_escolha_1.onclick = () => this.setButtonEscolhaAposta(0);
    btn_escolha_2.onclick = () => this.setButtonEscolhaAposta(1);
    btn_escolha_3.onclick = () => this.setButtonEscolhaAposta(2);

    btn_double.onclick = () => this.setBetValue(this.betValue * 2);
    btn_half.onclick = () => this.setBetValue(this.betValue / 2);

    this.setBetValue(2);
    this.setWallet(150);
    this.createCards(500);
  }

  setWallet(n) {
    this.wallet = n;
    p_wallet.innerHTML = this.toMoney(n);
  }

  setBetValue(n) {
    if (n < 1) n = 1;
    this.betValue = n;
    inp_betvalue.value = this.toMoney(n);
  }

  setMoneyValue(n) {
    this.betValue = n;
    inp_betvalue.value = this.toMoney(n);
  }

  toMoney(n) {
    return "R$ " + n.toFixed(2).replace(".", ",");
  }

  createCards(quantity) {
    function addCard(number) {
      let div = document.createElement("div");
      div.className = number % 2 ? "card card--green" : "card card--blue";
      div.className = number % 2 == 0 ? "card card--green" : "card card--blue";
      div.number = number;

      if (number == 10) {
        div.className = "card card--white";
        number = "x";
      }

      div.innerHTML = `<div class="card"><p>${number}</p></div>`;
      cards.appendChild(div);
    }

    for (let i = 0; i <= quantity; i++) {
      addCard((i % 10) + 1);
    }
  }

  resetTime() {
    div_aguardar.style.opacity = 1;
    this.time_loading = 100;

    // if (this.time_loading == 0) {
    //   this.time = false;
    // }
  }

  vai() {
    if (Math.sin(this.s) > 0) {
      this.s += 0.015;
      this.forcaX = Math.sin(this.s) * 50;
      cards.scrollLeft += this.forcaX;

      if (parseInt(this.forcaX) == 1) this.addhistorico(this.numero_Escolha);
    }
  }

  update() {
    this.vai();
    this.loading_down();
    window.requestAnimationFrame(this.update.bind(this));
  }

  escolha(n) {
    cards.scrollTo(0, 0);
    this.numero_Escolha = n;
    // this.s = 0.01;

    if (n == 1) this.s = 0.825;
    if (n == 2) this.s = 0.778;
    if (n == 3) this.s = 0.73;
    if (n == 4) this.s = 0.68;
    if (n == 5) this.s = 0.626;
    if (n == 6) this.s = 0.5615;
    if (n == 7) this.s = 0.5;
    if (n == 8) this.s = 0.42;
    if (n == 9) this.s = 0.34;
    if (n == 10) this.s = 0.21;

    setTimeout(() => {
      this.addhistorico(this.numero_Escolha);
    }, 5500);
  }

  addhistorico(n) {
    let btn = document.createElement("button");
    btn.innerHTML = n;

    if (n % 2 == 0) btn.className = "btn btn-green";
    if (n % 2 == 1) btn.className = "btn btn-blue";
    if (n == 10) {
      btn.className = "btn btn-white";
      btn.innerHTML = "x";
    }

    div_historico.insertBefore(btn, div_historico.children[0]);
  }

  loading(n) {
    bar_pink.style.width = `${(n * bar_pink.parentElement.offsetWidth) / 100}px`;
  }

  loading_down() {
    this.time_loading -= 0.1;
    this.loading(this.time_loading);

    if (parseFloat(this.time_loading.toFixed(2)) == 0) {
      this.escolha(parseInt(Math.random() * 10) + 1);
    }
  }
}

let game = new Game();
game.x = 0;
game.loading(100);

// window.requestAnimationFrame(game.update.bind(game));
// window.requestAnimationFrame(aguardar.update.bind(game));
window.requestAnimationFrame(aguardar.update.bind(aguardar));
