import game from "./js/game.js";
// import cubo from "./js/cubo.js";
import input from "./js/input.js";
import events from "./js/events.js";
import Roll from "./js/Rolls.js";

input.change();
game.render();

// window.onmousemove = function (e) {
//   let x = e.clientX;
//   let y = e.clientY;
//   cubo.deg(x, y);
// };

window.onclick = function () {
  input.change();
  game.render();
};
