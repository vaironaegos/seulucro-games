// import logic from './logic.js'

let values = {
  betvalue: 1,
  earns: 0,
  cash: 30,
  multlist: [1.9, 2.7, 5.3, 7.5, 8.6, 11.2],
  mult: 0,
  team1: "brazil",
  team2: "england",

  money(n) {
    return "R$ " + n.toFixed(2).replace(".", ",");
  },

  setBetvalue(n) {
    if (this.earns > 0) return false;

    if (n <= 1) n = 1;

    n = parseInt(n);
    this.betvalue = n;
    el_betvalue.innerHTML = this.money(this.betvalue);
  },

  setEarns(n) {
    this.earns = n;
    el_earns.innerHTML = this.money(this.earns);
  },

  setCash(n) {
    this.cash = n;
    el_cash.innerHTML = this.money(this.cash);
  },

  setMultlist(arr) {
    this.multlist = arr;

    let barra = document.querySelector(".barra");
    barra.innerHTML = "";
    for (let i of this.multlist) barra.innerHTML += `<div class="text" data-value="x${i.toFixed(2)}"></div>`;
  },

  render() {
    el_betvalue.innerHTML = this.money(this.betvalue);
    el_earns.innerHTML = this.money(this.earns);
    el_cash.innerHTML = this.money(this.cash);

    this.setMultlist(this.multlist);
    this.setProgress(this.mult);
    this.setTeam(this.team1, this.team2);
  },

  setProgress(n) {
    if (this.mult > this.multlist.length - 1) n = 0;
    this.mult = n;
    el_progress.style.width = (n / (this.multlist.length - 1)) * 100 + 3 + "%";
  },

  setTeam1(t1) {
    this.team1 = t1;
    el_team1.src = "./imgs/flags/" + this.team1 + ".jpg";
  },

  setTeam2(t2) {
    this.team2 = t2;
    el_team2.src = "./imgs/flags/" + this.team2 + ".jpg";
  },

  setTeam(t1, t2) {
    this.t1 = t1;
    this.t2 = t2;
    el_team1.src = "./imgs/flags/" + this.t1 + ".jpg";
    el_team2.src = "./imgs/flags/" + this.t2 + ".jpg";
  },
};

values.render()
values.setProgress(0);



export default values