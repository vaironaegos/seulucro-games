import Money from "./money.js";
// import History from "./History.js";
// import cubo from "./cubo.js";

let game = {
  wallet: 100,
  predicao: 55,
  historic: [72, 45, 20],
  resultado: 41,
  chance: 57,
  multiplicador: 2.27,
  range: 50,
  bt_escolha: 0,
  valor_aposta: 1,
  animation_number: false,
  canBet: true,
  n: 200,

  render() {
    this.setBtEscolha(this.bt_escolha);
    div_wallet.innerHTML = Money(this.wallet);
    div_chance.innerHTML = this.chance + "%";
    div_multiplicador.innerHTML = this.multiplicador.toFixed(2) + "x";
    div_valor_aposta.innerHTML = Money(this.valor_aposta);
  },

  loop() {
    this.n++;

    if (this.n % 2 == 0) {
      this.setResultado(Math.random() * 100 + 1);
    }

    if (this.n < 200) requestAnimationFrame(this.loop.bind(this));

    if (this.n == 200) {
      // this.setResultado(20);

      if (this.bt_escolha == 0 && this.resultado < this.choiceN) {
        this.setWallet(this.wallet + this.multiplicador * this.valor_aposta);
        this.msg("Ganhou R$ " + Money(this.multiplicador * this.valor_aposta));
      }
      if (this.bt_escolha == 1 && this.resultado > this.choiceN) {
        this.setWallet(this.wallet + this.multiplicador * this.valor_aposta);
        game.msg("Ganhou " + Money(this.multiplicador * this.valor_aposta));
      }

      this.setCanBet(true);
      document.querySelector(".cubo").classList.remove("cubo-vel-2");
    }

    this.render();
  },

  msg(str) {
    let msg_el = document.querySelector(".msg");
    let msg_h1 = document.querySelector(".msg > h1");

    msg_h1.innerHTML = str;
    msg_el.classList.value = "msg msg-on";

    setTimeout(() => {
      msg_el.classList.value = "msg msg-off";
    }, 2000);
  },

  choice(n) {
    n = parseInt(n);
    this.n = 0;
    this.choiceN = n;

    this.loop();
  },

  setCanBet(n) {
    this.canBet = n;
  },

  setBtEscolha(n) {
    if (this.canBet == false) return false;

    this.bt_escolha = n;

    div_escolha.children[0].className = "btn";
    div_escolha.children[1].className = "btn";

    if (n == 0) div_escolha.children[0].classList.add("btn-blue");
    if (n == 1) div_escolha.children[1].classList.add("btn-pink");
  },

  setWallet(val) {
    this.wallet = val;
  },
  setPredicao(val) {
    this.predicao = val;
  },
  setHistoric(val) {
    this.historic = val;
  },

  setResultado(val) {
    val = parseInt(val);
    this.resultado = val;
  },

  setChance(val) {
    this.chance = val;
  },
  setMultiplicador(val) {
    // val = Number(val.toFixed(2));
    if (val >= 100) val = 100;
    this.multiplicador = val;
  },
  setRange(val) {
    this.range = val;
  },
  setBt_escolha(val) {
    this.bt_escolha = val;
  },

  setValor_aposta(val) {
    if (this.canBet == false) return false;
    if (val < 1) return false;
    if (val < this.wallet) this.valor_aposta = val;
  },
};

// game.render();
// requestAnimationFrame(game.render.bind(this));

// window.requestAnimationFrame(game.render.bind(game));
// window.requestAnimationFrame(game.render.bind(game));
// game.render();

// game.msg("vamos");

export default game;
