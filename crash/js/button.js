import logic from "./logic.js";

let button = {

  el: bt_main,

  getName() {
    return bt_main.innerText
  },

  retirar() {
    
    bt_main.onclick = () => logic.retirar()

    bt_main.innerText = 'Retirar'
    bt_main.style.backgroundColor = "#43a047";
    inp_mult_value.setAttribute("disabled", true)
    inp_bet_value.setAttribute("disabled", true)
  },

  aguardar() {
    bt_main.onclick = () => logic.aguardar()
    bt_main.innerText = 'Aguarde'
    bt_main.style.backgroundColor = "#555";
    inp_mult_value.setAttribute("disabled", true)
    inp_bet_value.setAttribute("disabled", true)
  },

  apostar() {
    bt_main.onclick = () => logic.apostar()
    bt_main.innerText = 'Apostar'
    bt_main.style.backgroundColor = "#d81b60";
    inp_mult_value.removeAttribute('disabled')
    inp_bet_value.removeAttribute('disabled')
  }

};

export default button