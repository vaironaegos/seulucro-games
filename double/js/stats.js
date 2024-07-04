import Money from "./money.js";

let stats = {
  id:0,
  name: "Renato",
  wallet: 1000,
  betValue: 100,
  choice: 2, // 3 botões botão
  gameover: false,
  buttonText: "Apostar",
  canBet: true,
  crown: 0,
  color: 2,

  setId(id){ this.id = id }, 

  setCrown(val){
    this.crow = val
  }, 

  setName(val){
    this.name = val
  },

  setCanBet(bool) {
    this.canBet = bool;
  },

  setButtonText(txt) {
    this.buttonText = txt;

    if (this.buttonText == "Apostou") btn_apostar.style.backgroundColor = "#555";
    else btn_apostar.removeAttribute("style");
  },

  setGameOver(bool) {
    this.gameover = bool;
  },

  setWallet(val) {
    val = parseFloat(val)
    this.wallet = val;
    p_wallet.innerHTML = Money(this.wallet);
  },

  setBetValue(n) {
    if (this.canBet == false) return false;
    if (this.buttonText == "Apostou") return false;
    if (n <= 1) n = 1;
    this.betValue = n;
    inp_betvalue.value = Money(this.betValue);
  },

  setChoice(n) {
    if (this.buttonText == "Apostou") return false;
    if (this.canBet == false) return false;
    
    // if(n==0) this.choice = 0;
    // if(n==1) this.choice = 3;
    // if(n==2) this.choice = 1;
    
    this.resetChoice(n)
  },

  resetChoice(){
    btn_escolha_1.classList.remove("btn-active")
    btn_escolha_2.classList.remove("btn-active")
    btn_escolha_3.classList.remove("btn-active")
    // document.querySelector(".escolha").children[n].classList.add("btn-active")
  },

  reset() {
    this.setButtonText("Apostar");
    this.setCanBet(true);
    btn_apostar.removeAttribute("style");
    btn_apostar.innerHTML = "Apostar";
    this.hud_on();
  },

  hud_off() {
    document.querySelector(".escolha").style.opacity = 0.5;
    document.querySelector(".escolha").style.pointerEvents = "none";
    document.querySelector(".hud").style.opacity = 0.5;
    document.querySelector(".hud").style.pointerEvents = "none";
  },

  hud_on() {
    document.querySelector(".escolha").style.opacity = 1;
    document.querySelector(".escolha").style.pointerEvents = "all";
    document.querySelector(".hud").style.opacity = 1;
    document.querySelector(".hud").style.pointerEvents = "all";
    stats.setCanBet(true);
  },

};

// stats.setChoice(0)
// stats.setBetValue(stats.betValue)
// stats.hud_off()


export default stats;
