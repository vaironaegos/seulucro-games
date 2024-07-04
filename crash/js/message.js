let message = {
  msgWin(msg) {

    p_win.style.transition = "0.5s";
    p_win.style.opacity = 1;
    p_win.innerHTML = msg;
    p_win.innerHTML = `<img width='100px' src='./imgs/bau.png'><p>R$ ${msg.toFixed(2)}</p>`;

    // this.msgWin(`<img width='100px' src='./imgs/bau.png'><p>R$ ${msg}</p>`);
    // this.msgWin(`<img width='100px' src='./imgs/bau.png'><p>R$ ${msg}</p>`);

    setTimeout(() => {
      p_win.style.opacity = 0;
    }, 2000);
  },

  normal(ar) {
    // let str = ['Reiniciando','5','4','3','2','1']
    // let str = ar_string.split(",");
    // let a = 0;
    // function msg(ar) {
    p_texto.innerHTML = ar;
    // }
    // msg(str);
  },

  alert(msg) {
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

    setTimeout(() => {
      div.style.translate = "0px 0px";
      div.style.opacity = 1;
    }, 0)

    setTimeout(() => {
      div.style.translate = "0px -50px";
      div.style.opacity = 0;
    }, 2000)

    setTimeout(() => {
      div.remove()
    }, 3000)

    document.body.appendChild(div);
  },

  success(title, text) {
    Swal.fire({
      title: title,
      text: text,
      icon: "success"
    });
  },

  fail(title="Opa!", text=""){
    Swal.fire({
      icon: "error",
      title: title,
      text: text
    });
  }

};

export default message;
