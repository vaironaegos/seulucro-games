import stats from "./stats.js";


let button = {
  setButton(value){
    if(value == "Apostou"){
      btn_apostar.style.backgroundColor = "#555";
      btn_apostar.innerHTML = "Apostou";
      stats.setCanBet(false);
      stats.hud_off()

    }
    
    if(value == "Apostar"){
      btn_apostar.innerHTML = value;
      btn_apostar.removeAttribute('style')
      stats.setCanBet(true);
      stats.hud_on()
    }
  }
}

export default button