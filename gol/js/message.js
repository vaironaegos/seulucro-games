import ball from './ball.js'

let message = {

  normal(msg){
    
    let div = document.createElement("div");

    div.style.transition = "0.5s"
    div.style.position = "absolute"
    div.style.width = "40%";
    div.style.zIndex = 5
    div.style.padding = "10px"
    div.style.borderRadius = "5px"
    div.style.color = 'white'
    div.style.textAlign = 'center'
    div.style.background = "#025388";
    div.style.transform = "translateX(-50%)"
    div.style.boxShadow = "0px 0px 0px 3px black";
    div.style.left = "50%"
    div.style.right = "50%"
    div.style.top = "10%"
    div.style.translate = "0px 50px"
    div.style.opacity = 0
    div.innerHTML = msg;

    setTimeout(()=>{
      div.style.translate = "0px 0px";
      div.style.opacity = 1;
    },0)

    setTimeout(()=>{
      div.style.translate = "0px -50px";
      div.style.opacity = 0;
    },2000)

    setTimeout(()=>{
      div.remove()
    },3000)

    el_campo.appendChild(div);
  },

  team(t1, t2){
    let div = document.createElement("div")
    div.className = "message"
    div.innerHTML = `
    <div class="message-in message-show-in-out">
      <div class="versus">
          <img src="./imgs/flags/${t1}.jpg">
          <p>VS</p>
          <img src="./imgs/flags/${t2}.jpg">
      </div>
    </div>
    `;
    document.body.appendChild(div)
    setTimeout(e=>{
      div.remove()
    },3000)
  },

  mult(msg, position){
    let div = document.createElement("div");
    div.style.position = "absolute";
    div.className = "msg";

    let x = 0;
    let y = 0;

    if (position == "left") [x, y] = [23.5, 42];
    if (position == "leftup") [x, y] = [23.5, 71];
    if (position == "up") [x, y] = [50, 71];
    if (position == "rightup") [x, y] = [76.5, 71];
    if (position == "right") [x, y] = [76.5, 42];

    div.style.left = x+"%";
    div.style.bottom = y+"%";
    div.style.translate = "-45px";

    div.innerHTML = `<div class="msg message-show-in-out">${msg}</div>`;
    // div.innerHTML = `<div class="msg">${msg}</div>`;

    el_campo.appendChild(div);
    setTimeout((e) => {div.remove();}, 3000);

  }
}

// message.team(values.team1, values.team2)
// message.team("brazil", "usa")
// message.normal("alguma coisa")




// message.mult("13.3x", "left");
// message.mult("13.3x", "leftup");
// message.mult("13.3x", "right");

export default message