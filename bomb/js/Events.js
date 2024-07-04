import Cards from './Cards.js'
import Values from './Values.js'
import Logic from './Logic.js'
import Message from "./Message.js";

let Events = {}

btn_double.onclick = () => Logic.double()
btn_half.onclick = () => Logic.half();

btn_double_2.onclick = () => Logic.double_2()
btn_half_2.onclick = () => Logic.half_2();

btn_apostar.onclick = () => Logic.bet();

btn_sorte.onclick = () => Logic.luck()

// for (let bt of div_bombs.children) {
//   bt.onclick = function () {
//     if(Logic.getButton() == "Retirar"){
//       Message("Conclua o jogo primeiro")
//       return false
//     }
//     Values.setBombs(Number(this.value))
//     Cards.FieldBombs(Number(this.value))
//     console.log(Cards.order)
//   };
// }

let bt_bombs = document.querySelector(".buttons")

// console.log(bt_bombs.children.length)

for(let i = 0; i <= bt_bombs.children.length-1 ; i++){
    bt_bombs.children[i].onclick = () => Logic.setBtBomb(i+1)
}

// bt_bombs.children[0].onclick = () => Logic.setBtBomb(1)
// bt_bombs.children[1].onclick = () => Logic.setBtBomb(2)
// bt_bombs.children[2].onclick = () => Logic.setBtBomb(3)
// bt_bombs.children[3].onclick = () => Logic.setBtBomb(4)
// bt_bombs.children[4].onclick = () => Logic.setBtBomb(5)
// bt_bombs.children[5].onclick = () => Logic.setBtBomb(6)


export default Events