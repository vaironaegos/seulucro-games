let character = {
  
  decision: "up",
  up: "imgs/character_up.png",
  left_down: "imgs/character_left_down.png",
  left_up: "imgs/character_left_up.png",
  right_up: "imgs/character_right_up.png",
  right_down: "imgs/character_right_down.png",
  normal: "imgs/character_normal.png",
  el: el_character,

  pos: {
    normal: { x: 0, y: 10 },
    left: { x: -50, y: 0 },
    leftup: { x: -50, y: -35 },
    right: { x: 50, y: 0 },
    rightup: { x: 50, y: -35 },
    up: { x: 0, y: -8 },
  },

  position(x, y) {
    this.el.style.translate = x + "% " + y + "%";
  },

  positionC(obj) {
    this.position(obj.x, obj.y);
  },

  init() {
    this.el.style.transition = 0.5 + "s";
    this.positionC(character.pos.normal);
  },

  animation: {
    normal() {
      character.el.src = character.normal;
      character.positionC(character.pos.normal);
    },

    up() {
      character.el.src = character.up;
      character.positionC(character.pos.up);
      character.decision = "up"
    },

    left() {
      character.el.src = character.left_down;
      character.positionC(character.pos.left);
      character.decision = "left"
    },

    leftup() {
      character.el.src = character.left_up;
      character.positionC(character.pos.leftup);
      character.decision = "leftup"
    },

    right() {
      character.el.src = character.right_down;
      character.positionC(character.pos.right);
      character.decision = "right"
    },

    rightup() {
      character.el.src = character.right_up;
      character.positionC(character.pos.rightup);
      character.decision = "rightup"
    },
  },
};

character.init()

export default character;
