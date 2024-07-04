import Money from './Money.js'

let Values = {
  id:"AMANDAMARIASILVALIMA",
  name:"Amanda",
  wallet: 500,
  bonus: 0,
  mult: 1,
  bet: 1,
  bombs: 6,
  coins_reveled: 0,
  bombs_reveled: 0,
  moneyPast: 0,
  moneyHistoric: [],
  minBet: 1,
  maxBet: 100,
  taxes: [
    { bombs: 1,  tax: 101 },
    { bombs: 2,  tax: 105 },
    { bombs: 3,  tax: 110 },
    { bombs: 4,  tax: 115 },
    { bombs: 5,  tax: 120 },
    { bombs: 6,  tax: 125 },
    { bombs: 7,  tax: 130 },
    { bombs: 8,  tax: 135 },
    { bombs: 9,  tax: 140 },
    { bombs: 10, tax: 145 },
    { bombs: 11, tax: 150 },
    { bombs: 12, tax: 155 },
    { bombs: 13, tax: 160 },
    { bombs: 14, tax: 165 },
    { bombs: 15, tax: 170 },
    { bombs: 16, tax: 175 },
    { bombs: 17, tax: 180 },
    { bombs: 18, tax: 185 },
    { bombs: 19, tax: 190 },
    { bombs: 20, tax: 195 },
    { bombs: 21, tax: 200 },
    { bombs: 22, tax: 205 },
    { bombs: 23, tax: 210 },
    { bombs: 24, tax: 215 },
  ],

  setMoneyHistoric(arr){
    this.moneyHistoric = arr
  },

  addMoneyHistoric(arr){
    arr = parseFloat(arr.toFixed(2))
    this.moneyHistoric.push(arr)
  },

  refreshBonus(){
    let porc = Values.taxes.find(e=>e.bombs == Values.bombs).tax
    Values.setBonus(Values.bet * (porc/100) ** Values.coins_reveled);
  },

  refreshBonus2(){
    let porc = Values.taxes.find(e=>e.bombs == Values.bombs).tax
    Values.setBonus(Values.bet * (porc/100) ** 1);
  },

  refreshBonusN(n){
    let porc = Values.taxes.find(e=>e.bombs == Values.bombs).tax
    Values.setBonus(Values.bet * (porc/100) ** n);
  },

  setTaxes(arr){
    this.taxes = arr

    for(let i=0;i<30;i++){
      if(typeof(document.querySelector(".buttons").children[arr.length]) == 'object')
          document.querySelector(".buttons").children[arr.length].remove()
    }

  },

  setMoneyPast(value){
    this.moneyPast = value;
    p_moneyPast.innerHTML = Money(this.moneyPast);
  },

  setWallet(value) {
    this.wallet = value;
    p_wallet.innerHTML = Money(this.wallet);
  },
  setBonus(value) {
    if(value == undefined) value = 0

    this.bonus = value;
    p_moneyGame.innerHTML = Money(this.bonus);
  },
  setMult(value) {
    this.mult = parseFloat(value.toFixed(2));
    // p_multGame.innerHTML = this.mult + " x";
  },
  setBet(value) {
    this.bet = value;
    inp_betValue.value = Money(this.bet);
  },

  setBombs(value) {
    this.bombs = value;
    // p_statBomb.innerHTML = this.bombs;
    p_statBomb.innerHTML = value
    document.querySelector(".choicebomb > p").innerHTML = value
    // document.querySelector(".choicebomb > #p_statBomb").innerHTML = value
  },

  // render() {
    // p_wallet.innerHTML = Money(this.wallet);
    // p_moneyGame.innerHTML = Money(this.bonus);
    // p_multGame.innerHTML = this.mult + " x";
    // inp_betValue.value = Money(this.bet);
    // p_statBomb.innerHTML = this.bombs;
    // p_statCoin.innerHTML = 25 - this.bombs;
  // },

};

// Values.render()

// Values.setWallet(Values.wallet)
// Values.setBonus(Values.bonus)
// Values.setMult(Values.mult)
// Values.setBet(Values.bet)
// Values.setBombs(Values.bombs)
// Values.setTaxes(Values.taxes)

export default Values