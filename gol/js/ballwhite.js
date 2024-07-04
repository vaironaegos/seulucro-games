let ballwhite = {
  
  balls: document.querySelectorAll(".ball_white"),
  canchoice: 1,

  hideall(){
    for(let i of this.balls) i.style.opacity = 0;
    this.canchoice = 0
  },
  
  showall(){
    for (let i of this.balls) i.style.opacity = 1;
    this.canchoice = 1
  },

  position(position){
    this.hideall();
    document.querySelector("#el_ball_choice_"+position).style.opacity = 1
    setTimeout(()=>{
      this.hideall()
    },500)
  }

}



export default ballwhite;
