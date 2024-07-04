let game = {
  wallet: 1000,
  bet: 2000,
  choice: 1,
  force: 100,
  loadTime: 1000,

  setChoice(n) {
    this.choice = n;
  },

  setBetValue(value) {
    this.bet = value;
  },

  setWallet(value) {
    this.wallet = value;
  },

  setForce(value) {
    this.force = value;
  },

  render() {
    let Money = (n) => "R$ " + n.toFixed(2).replace(".", ",");

    p_wallet.innerHTML = Money(this.wallet);
    inp_betvalue.value = Money(this.bet);

    // choice
    $(".escolha > .btn-active").classList.remove("btn-active");
    $$(".escolha > button")[this.choice].classList.add("btn-active");
  },

  update() {
    this.render();
    window.requestAnimationFrame(this.update.bind(this));
  },
};

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

// onclicks
btn_escolha_1.onclick = () => game.setChoice(0);
btn_escolha_2.onclick = () => game.setChoice(1);
btn_escolha_3.onclick = () => game.setChoice(2);

btn_double.onclick = () => game.setBetValue(game.betValue * 2);
btn_half.onclick = () => game.setBetValue(game.betValue / 2);

cards.add_quantity(300);

// window.requestAnimationFrame(game.update.bind(game));
// window.requestAnimationFrame(aguardar.update.bind(game));

// window.requestAnimationFrame(aguardar.update.bind(aguardar));
// window.requestAnimationFrame(aguardar.update.bind(aguardar));

window.requestAnimationFrame(game.update.bind(game));
