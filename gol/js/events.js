import ball from "./ball.js";
import ballwhite from "./ballwhite.js";
import character from "./character.js";
import logic from "./logic.js";
import message from "./message.js";
import sounds from "./sounds.js";
import values from "./values.js";

let events = {};

function direction_random(){
    let directions = "left,leftup,up,rightup,right".split(",");
    let direction = directions[(Math.random() * directions.length) | 0]
    return direction
}

el_ball_choice_left.onclick    = () => { logic.choice(direction_random(), "left");    }
el_ball_choice_leftup.onclick  = () => { logic.choice(direction_random(), "leftup");  }
el_ball_choice_up.onclick      = () => { logic.choice(direction_random(), "up");      }
el_ball_choice_rightup.onclick = () => { logic.choice(direction_random(), "rightup"); }
el_ball_choice_right.onclick   = () => { logic.choice(direction_random(), "right");   }

el_collect.onclick = () => logic.collect()

el_play.onclick = () =>{
  
    if(values.earns > 0){
        logic.choiceRandom()
        return 
    }
    if(!logic.canBet){
        message.normal("Você não pode alterar o valor da aposta, escolha onde chutar");
        return
    }
    if (values.cash - values.betvalue < 0) {
      message.normal("O valor da aposta deve ser menor ou inferior ao caixa");
      return;
    }
    if (values.earns > 0) {
      message.normal("Você já fez a sua aposta, jogue");
      return;
    }

    values.setCash(values.cash - values.betvalue);
    values.setEarns(values.betvalue)
    el_play.querySelector("img").src = "./imgs/icons/ball.svg";

}

// el_ball_choice_right.onclick = () => {
//   character.animation.right()
//   if (character.state == 'right') ball.animation.rightout();
//   else ball.animation.right();
// }

// el_ball_choice_left.onclick = () => character.animation.left()
// el_ball_choice_leftup.onclick = () => character.animation.leftup()
// el_ball_choice_up.onclick = () => character.animation.up()
// el_ball_choice_right.onclick = () => character.animation.right()
// el_ball_choice_rightup.onclick = () => character.animation.rightup()

bt_less.onclick = () => { values.setBetvalue(values.betvalue / 2) };
bt_plus.onclick = () => { values.setBetvalue(values.betvalue * 2) };

export default events;
