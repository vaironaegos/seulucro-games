import game from "./game.js";
import Money from "./money.js";

let Rolls = {
  r1: roll_1.querySelector(".square"),
  r2: roll_2.querySelector(".square"),
  r3: roll_3.querySelector(".square"),

  adds(n) {
    for (let i = 0; i < n; i++) {
      this.r1.innerHTML += `<p>${i % 10}</p>`;
      this.r2.innerHTML += `<p>${i % 10}</p>`;
      this.r3.innerHTML += `<p>${i % 10}</p>`;
    }
  },

  roll(el, position) {
    el.y = 0;

    let positions = [29.31, 29.67, 30.03, 30.385, 30.737, 31.083, 31.425, 31.765, 32.101, 32.43];

    el.force = positions[position];

    el.vai = function () {
      // if (game.canBet == false) return false;

      el.force -= 0.1;
      el.y -= el.force;
      el.style.transform = `translateY(${el.y}px)`;

      if (r1.force < 0 && r2.force < 0 && r3.force < 0 && game.canBet == false) {
        // quando for fim

        if (game.bt_escolha == 0 && game.resultado < game.predicao) {
          game.setWallet(game.wallet + game.multiplicador * game.valor_aposta);
          game.msg("Ganhou R$ " + Money(game.multiplicador * game.valor_aposta));
        }
        if (game.bt_escolha == 1 && game.resultado > game.predicao) {
          game.setWallet(game.wallet + game.multiplicador * game.valor_aposta);
          game.msg("Ganhou " + Money(game.multiplicador * game.valor_aposta));
        }

        game.setCanBet(true);
        game.render();
      }

      if (el.force > 0) requestAnimationFrame(el.vai);
    };

    requestAnimationFrame(el.vai);
  },

  random() {
    let a = parseInt(Math.random() * 10);
    let b = parseInt(Math.random() * 10);
    let c = parseInt(Math.random() * 10);

    this.choice(a, b, c);

    // this.roll(r1, parseInt(Math.random() * 10));
    // this.roll(r2, parseInt(Math.random() * 10));
    // this.roll(r3, parseInt(Math.random() * 10));
  },

  choice(n1, n2, n3) {
    // game.resultado = n1 + "" + n2 + "" + n2;
    game.setResultado(n1 + "" + n2 + "" + n3);

    this.roll(r1, n1);
    this.roll(r2, n2);
    this.roll(r3, n3);
  },
};

Rolls.adds(200);
Rolls.random();

export default Rolls;
