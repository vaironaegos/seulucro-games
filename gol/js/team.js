import values from './values.js'
import logic from './logic.js'
import sounds from "./sounds.js";

let team = {
    render(){
        let teams = "argentina,brazil,france,germany,italy,netherlands,portugal,spain,usa".split(",");
        selection.innerHTML = ""
        for(let i of teams){
            let div = document.createElement("div")
            div.onclick = () => {
                values.setTeam1(i)
                selection_team.style.opacity = 0
                selection_team.style.pointerEvents = "none"
                sounds.music();
                sounds.crowd();
            }
            div.innerHTML = `
                <img class="clother" src="./imgs/clothers/${i}.png">
                <img class="flag" src="./imgs/flags/${i}.jpg">
            `;
            selection.appendChild(div)
        }
        logic.changeTeam2()
    }
}

team.render()

export default team