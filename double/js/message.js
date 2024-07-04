
let message = {

  normal(msg){
    
    let div = document.createElement("div");

    div.style.transition = "0.5s"
    div.style.position = "absolute"
    div.style.width = "300px";
    div.style.zIndex = 5
    div.style.padding = "10px"
    div.style.borderRadius = "5px"
    div.style.color = 'white'
    div.style.textAlign = 'center'
    div.style.background = "#1e1c36";
    div.style.transform = "translateX(-50%)"
    div.style.boxShadow = "0px 0px 0px 3px #2d294e";
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

    document.body.appendChild(div);
  },

}

// message.normal("Ganhou R$ 500")

export default message