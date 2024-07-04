import stats from "./stats.js";
import loading from "./loading.js";
import historic from "./historic.js";

let config = {
  name: "Julia",
  crown: 0,
  wallet: 500,
  time: 300,
  list: [1, 2],

  init(obj) {

    // obj.wallet
    // obj.betValue
    // obj.time
    // obj.list

    stats.setCrown(obj.crow);
    stats.setName(obj.name);
    stats.setWallet(obj.wallet);
    stats.setBetValue(obj.betValue)
    loading.setTime(obj.time);
    // historic.setList(obj.list);
    historic.list = obj.list
    stats.setChoice(obj.buttonChoice);

  },
};

export default config