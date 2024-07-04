function loading(){

    let div = document.createElement("div")
    div.classList.add('full-center')
    div.style.backgroundColor = "black"
    div.innerHTML = "<div id='el_loading'>Wait</div>"
    document.body.appendChild(div);

    let list = [
        "./imgs/character_normal.png",
        "./imgs/character_left_down.png",
        "./imgs/character_left_up.png",
        "./imgs/character_right_up.png",
        "./imgs/character_right_down.png",
        "./imgs/background.jpg",
        "./imgs/ball.png",
        "./imgs/ball_white.png",
        "./imgs/flags/argentina.jpg",
        "./imgs/flags/brazil.jpg",
        "./imgs/flags/england.jpg",
        "./imgs/flags/france.jpg",
        "./imgs/flags/germany.jpg",
        "./imgs/flags/india.jpg",
        "./imgs/flags/italy.jpg",
        "./imgs/flags/netherlands.jpg",
        "./imgs/flags/portugal.jpg",
        "./imgs/flags/spain.jpg",
        "./imgs/flags/usa.jpg",
        "./imgs/clothers/argentina.png",
        "./imgs/clothers/brazil.png",
        "./imgs/clothers/england.png",
        "./imgs/clothers/france.png",
        "./imgs/clothers/germany.png",
        "./imgs/clothers/italy.png",
        "./imgs/clothers/netherlands.png",
        "./imgs/clothers/portugal.png",
        "./imgs/clothers/spain.png",
        "./imgs/clothers/usa.png",
    ];

    let qt = 0

    el_loading.innerHTML = qt/list.length*100;

    for( let i of list){
        let img = new Image()
        img.src = i
        img.style.display = "none"
        document.body.appendChild(img)

        img.onload=function(){
            el_loading.innerHTML = (((++qt / list.length) * 100)|0)+"%";

            if (qt == list.length) {
              el_loading.style.transition = "0.5s";
              div.style.opacity = 0;
              setTimeout(()=>{div.remove()},1000)
            }

            img.remove()
        }
        
    }

    // setTimeout(()=>{
    //     el_loading.innerHTML = 'ok'
    // },1000)

}

loading()

export default loading