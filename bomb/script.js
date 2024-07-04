import Cards from './js/Cards.js'
import Values from "./js/Values.js";
import Events from "./js/Events.js";
import Message from "./js/Message.js";
import Logic from './js/Logic.js';
import Connection from './js/Connection.js';

// init

// Logic.setButton("Jogar")
// Values.setWallet(Values.wallet)
// Values.setBonus(Values.bonus)
// Values.setMult(Values.mult)
// Values.setBet(Values.bet)
// Values.setBombs(Values.bombs)
// Values.setMoneyPast(Values.moneyPast)

// Values.refreshBonus2()
// Cards.setBombs(6)
// Cards.FieldBombs(Cards.bombs);
// Cards.Render();

window.onkeyup=function(e){ 
    if(e.key == 1)  btn_apostar.click() 
    if(e.key == 2)  Logic.luck() 
}

// try{
// Connection.init()

// }catch(e){}

// Values.id = 

//init 

// Values.setWallet(Values.wallet)
// Values.setBonus(Values.bonus)
// Values.setMult(Values.mult)
// Values.setBet(Values.bet)
// Values.setBombs(Values.bombs)



Values.setMoneyPast(0)
Values.refreshBonus2()
Logic.setButton("Jogar")
Cards.setBombs(6)
Cards.FieldBombs(Cards.bombs);
Cards.Render();
Values.setTaxes(Values.taxes)
Values.setWallet(Values.wallet)

