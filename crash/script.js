function draw_line(x1, y1, x2, y2) {
  svg_line.setAttribute("x1", x1);
  svg_line.setAttribute("y1", y1);
  svg_line.setAttribute("x2", x2);
  svg_line.setAttribute("y2", y2);
}

function text(txt) {
  p_texto.innerHTML = txt;
}

let estrelas = {
  el: div_estrelas,
  n: 0,
  proximaEstrela() {
    --this.n;
    this.el.style.backgroundPosition = 0 + "px " + -this.n * 2 + "px";
  },
};

let historic = {
  el: div_historico,
  add(val) {
    let bt = document.createElement("button");
    bt.innerHTML = val.toFixed(2);
    bt.classList.value = "btn btn--orange";

    if (val != 15) bt.classList.value = "btn btn--orange";
    if (val <= 10) bt.classList.value = "btn btn--purple";
    if (val <= 5) bt.classList.value = "btn btn--blue";

    this.el.appendChild(bt);
    this.el.scrollLeft -= 1000;
  },
  clear() {
    this.el.innerHTML = "";
  },
  adds(ar_numbers) {
    ar_numbers.map((n) => this.add(n));
  },
};

let foguete = {
  width: img_foguete.clientWidth,
  height: img_foguete.clientHeight,
  el: img_foguete,

  setCoordinates(x, y) {
    this.el.style.left = x + "px";
    this.el.style.top = y + "px";
  },

  setAngle(ang) {
    this.el.style.rotate = -ang + "deg";
  },

  addjustAngle() {
    let dx = game.width;
    let dy = game.height;
    let eq = Math.atan(dy / dx) * 60;
    this.setAngle(90);
  },

  toExplode() {
    this.el.src = "imgs/explosion.gif";
    this.el.style.mixBlendMode = "color-dodge";
    this.el.style.transition = "0.5s";
    setTimeout(() => {
      this.el.style.opacity = 0;
    }, 1000);
  },

  reset() {
    this.el.src = "./imgs/foguete.svg";
    this.el.removeAttribute("style");
  },
};

let table = {
  el: document.querySelector(".dados"),

  clear() {
    this.el.innerHTML = "";
  },
  adds(infos) {
    table.clear();

    // table.add(3.3, "maria", 200, 2.3, 100);
    // table.add(12.3, "maria", 220, 3.3, 200);
    // [3.3, "maria", 200, 2.3, 100], [12.3, "josefa", 220, 3.3, 200];

    infos.map((info) => this.add(info[0], info[1], info[2], info[3], info[4]));
  },

  add(game_mult, my_name, my_value, my_mult, my_earn) {
    let est = `
    <article>
      <div class="t-blue">${game_mult}x</div>
      <div>
        <p>${my_name}</p>
        <p>R$ ${my_value}</p>
      </div>
      <div>
        <p>${my_mult}x</p>
        <p class="t-green">R$ ${my_earn}</p>
      </div>
    </article>`;
    this.el.innerHTML += est;
  },
};

class Game {
  constructor() {
    this.money = 200;

    this.width = svg.clientWidth;
    this.height = svg.clientHeight;
    this.coordinates = {};

    this.number_limit = 3;

    this.number_rocket = 0;
    this.bet_value = 1;
    this.mult_value = 1;

    this.earns = 0;

    this.number = 1;
    this.loading = 0;
    this.text = 0;

    this.canTake = true;
    this.canBet = true;
    this.needBet = true;

    this.option = "Apostar";

    this.init();
  }

  setOption(text) {
    this.option = text;
    bt_main.innerHTML = text;

    if (text == "Retirar") bt_main.style.backgroundColor = "#43a047";
    if (text == "Aguarde") bt_main.style.backgroundColor = "#7b1fa2";
    if (text == "Apostar") bt_main.style.backgroundColor = "#d81b60";
  }

  setLimit(n) {
    this.number_limit = n;
  }

  setEarns(n) {
    this.earns = n;
    this.setMoney(this.money + n);
  }

  setBet_value(n) {
    n = parseInt(n);
    n = n == 0 ? 1 : n;
    inp_bet_value.value = "R$ " + n;
    this.bet_value = n;
  }

  setMult_value(n) {
    n = n <= 0 ? 1 : n;
    this.mult_value = n;
    inp_mult_value.value = n + "x";
  }

  init() {
    bt_half.onclick = () => this.setBet_value(this.bet_value / 2);
    bt_double.onclick = () => this.setBet_value(this.bet_value * 2);
    bt_less.onclick = () => this.setMult_value(--this.mult_value);
    bt_plus.onclick = () => this.setMult_value(++this.mult_value);
    icon_menu.onclick = () => aside.classList.toggle("aside--off");
    icon_close.onclick = () => aside.classList.toggle("aside--off");
    this.setMoney(this.money);
  }

  setMoney(val) {
    this.money = val;
    p_money.innerHTML = "R$ " + this.money.toFixed(2).replace(".", ",");
  }

  checkWin() {
    if (this.mult_value == this.number && this.canTake && this.option == "Retirar") {
      this.setEarns(this.bet_value_2 + parseFloat((this.bet_value_2 * this.number).toFixed(2)));
      // this.msgWin(`<img width='100px' src='./imgs/bau.png'><p>R$ ${this.earns}</p>`);
      this.msgWin(this.earns);
      this.canTake = false;
      this.setOption("Apostar");
    }
  }

  takemoney() {
    if (this.canTake) {
      this.setEarns(parseFloat((this.bet_value_2 * this.number).toFixed(2)));
      // this.msgWin(`<img width='100px' src='./imgs/bau.png'><p>R$ ${this.earns}</p>`);
      this.msgWin(this.earns);
      this.canTake = false;
    }
  }

  setCoordinates(x, y) {
    this.coordinates = { x: x, y: y };
  }

  line(n) {
    n = n >= 80 ? 80 : n;
    this.setCoordinates(this.width - 100, this.height - (n * this.height) / 100);
    // draw_line(0, this.height, this.coordinates.x, this.coordinates.y);
    draw_line(this.width - 100, this.height, this.width - 100, this.coordinates.y);
    foguete.setCoordinates(this.coordinates.x, this.coordinates.y);
  }

  setText(txt) {
    this.text = txt;
    p_texto.innerHTML = txt;
  }

  message(ar_string) {
    // let str = ['Reiniciando','5','4','3','2','1']
    let str = ar_string.split(",");
    let a = 0;

    function msg(ar) {
      game.setText(ar[a++]);
      if (ar[a] == undefined) return false;
      setTimeout(() => {
        msg(str);
      }, 1000);

      if (a == str.length - 1) game.reset();
    }

    msg(str);
  }

  start() {
    this.width = bloco.offsetWidth;
    this.height = bloco.offsetHeight;

    if (checkbox.checked && this.option == "Apostar") bt_main.click();

    if (!this.pause) {
      this.number_rocket += 0.4;
      this.number += 0.01;

      fundo.style.transform = `translateY(${this.number_rocket * 10}px)`;

      this.number_rocket = Number(parseFloat(this.number_rocket).toFixed(2));
      this.number = Number(parseFloat(this.number).toFixed(2));

      this.line(this.number_rocket);
      this.setText(this.number.toFixed(2) + "x");

      foguete.addjustAngle();
      estrelas.proximaEstrela();

      if (this.number == this.number_limit) {
        foguete.toExplode();
        historic.add(this.number_limit);

        if (this.option == "Retirar") this.setOption("Apostar");

        this.pause = true;

        setTimeout(() => {
          this.message("Reiniciando,Reiniciando,4,3,2,1");
        }, 500);
      }

      bt_main.onclick = () => {
        if (this.option == "Apostar") {
          if (this.money - this.bet_value < 0) {
            this.msgWin("Dinheiro insuficiente");
            return false;
          }

          this.bet_value_2 = this.bet_value;
          this.mult_value_2 = this.mult_value;
          this.setMoney(this.money - this.bet_value_2);
          this.setOption("Aguarde");
        }

        if (this.option == "Retirar") {
          this.takemoney();
          this.setOption("Apostar");
        }
      };

      // this.colorButton();
      this.checkWin();
    }

    setTimeout(() => {
      this.start();
    }, 20);
  }

  msgWin(msg) {
    p_win.style.transition = "0.5s";
    p_win.style.opacity = 1;
    p_win.innerHTML = msg;
    p_win.innerHTML = `<img width='100px' src='./imgs/bau.png'><p>R$ ${msg}</p>`;

    // this.msgWin(`<img width='100px' src='./imgs/bau.png'><p>R$ ${msg}</p>`);
    // this.msgWin(`<img width='100px' src='./imgs/bau.png'><p>R$ ${msg}</p>`);

    setTimeout(() => {
      p_win.style.opacity = 0;
    }, 2000);
  }

  reset() {
    this.number = 0;
    this.number_rocket = 0;

    this.line(0);

    this.canTake = true;
    this.pause = false;

    this.number = 1;
    this.loading = 0;

    let x = 1 + Number((Math.random() * 5).toFixed(2));
    x = x.toFixed(2);
    x = parseFloat(x);
    this.setLimit(x);

    p_win.innerHTML = "";

    foguete.reset();
    foguete.setAngle(90);

    if (this.option == "Aguarde") this.setOption("Retirar");
  }
}

// let game = new Game();
// game.line(0);
// game.start();
// game.reset();

// examples

// historic.clear();
// historic.add(2.2);
// historic.add(7.23);
// historic.add(15.3);

// table.clear();
// table.add(3.3, "Joana", 200, 3, 600);
// table.add(4, "Maria", 220, 6, 0);
