import loading from "./loading.js";
import ball from "./ball.js";
import ballwhite from "./ballwhite.js";
import character from "./character.js";
import events from "./events.js";
import message from "./message.js";
import sounds from "./sounds.js";
import values from "./values.js";
import connection from "./connection.js";
// import axios from './axios.js'

let logic = {
  canKick: true,
  canBet: true,

  changeTeam() {
    let times = "argentina,brazil,france,germany,italy,netherlands,portugal,spain,usa".split(",");
    times = times.filter((e) => e != values.team1);
    times = times.filter((e) => e != values.team2);
    let t1 = times[(Math.random() * times.length) | 0];
    values.setTeam(values.team1, t1);
    message.team(values.team1, t1);
  },

  changeTeam2() {
    let times = "argentina,brazil,france,germany,italy,netherlands,portugal,spain,usa".split(",");
    times = times.filter((e) => e != values.team1);
    // times = times.filter((e) => e != values.team2);
    let t1 = times[(Math.random() * times.length) | 0];
    values.setTeam2(t1);
    message.team(values.team1, t1);
  },

  nogoal() {
    let directions = "left,leftup,up,rightup,right".split(",");
    let direction = directions[(Math.random() * directions.length) | 0];
    ballwhite.position(direction);
    this.choice(direction, direction);
    // setTimeout(logic.changeTeam,2000);
  },

  goal() {
    let direction, directions, r, a, b;
    directions = "left,leftup,up,rightup,right".split(",");
    r = (Math.random() * directions.length) | 0;
    a = directions[r];
    directions = directions.filter((e, i) => i != r);
    r = (Math.random() * directions.length) | 0;
    b = directions[r];
    ballwhite.position(b);
    this.choice(a, b);
  },

  goal_n(dir) {
    let directions = "left,leftup,up,rightup,right".split(",");
    directions = directions.filter((e) => e != dir);
    let dir2 = directions[(Math.random() * directions.length) | 0];
    ballwhite.position(dir);
    // this.choice(dir2, dir);
    // this.choice_character_ball(dir2, dir)
    this.choice_character_ball(dir2, dir);
  },

  nogoal_n(dir) {
    ballwhite.position(dir);
    this.choice(dir, dir);
    this.choice_character_ball(dir, dir);
  },

  choice_character_ball(character_direction, ball_direction) {
    // sounds.whistle();

    let directions = "left,leftup,up,rightup,right".split(",");

    character.decision = character_direction;

    setTimeout(() => {
      character.animation[character_direction]();
    }, 150);

    ball.animation[ball_direction]();

    if (character_direction != ball_direction) {
      setTimeout(() => {
        // message.mult("13.8x", ball_direction);
        message.mult("x" + values.multlist[values.mult], ball_direction);
        values.setEarns(values.earns * values.multlist[values.mult]);
        values.setProgress(++values.mult);
        sounds.cheering();
        this.canKick = true;
      }, 500);
    } else {
      values.setProgress(0);
      values.setEarns(0);
      el_play.querySelector("img").src = "./imgs/icons/play.svg";
      setTimeout(logic.changeTeam, 1500);
      this.collect()
      this.canKick = true;
    }

    // character.animation.leftup();
    // ball.animation.leftup();

    setTimeout(() => {
      character.animation.normal();
      ball.animation.normal();
      ballwhite.showall();
      
      if(values.mult == 0){
        logic.changeTeam2()
        el_play.querySelector("img").src = "./imgs/icons/play.svg";
      }

    }, 1500);
  },

  choice(a, b) {

    if (values.earns == 0) {
      message.normal("É necessário fazer uma aposta mínima.");
      return;
    }

    // if(this.canKick == false) return
    // this.canKick = false

    if(ballwhite.canchoice == 0) return

    sounds.whistle();
    ballwhite.position(b);

    setTimeout(() => {
      this.choice_character_ball(a, b);
      // connection.random(b);
      // setTimeout(() => { this.canKick = true; }, 3000); aqui
    }, 1000);

    

  },

  collect() {
    if(values.earns == 0 || values.mult < 1) return
    values.setCash(values.cash + values.earns);
    values.setEarns(0);
    el_play.querySelector('img').src = "./imgs/icons/play.svg";
    logic.changeTeam2()
    message.team(values.team1, values.team2);
    values.setProgress(0)
  },

  choiceRandom(){
    let directions = "left,leftup,up,rightup,right".split(",");
    let direction1 = directions[(Math.random() * directions.length) | 0];
    let direction2 = directions[(Math.random() * directions.length) | 0];
    this.choice(direction1, direction2);
  }

};

// setTimeout(()=>logic.nogoal("left"), 2000);

export default logic