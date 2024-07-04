import events from "./js/events.js";
import stats from "./js/stats.js";
import cards from "./js/cards.js";
import config from "./js/config.js";
import loading from "./js/loading.js";
import table from "./js/table.js";
import historic from "./js/historic.js";
import communication from "./js/communication.js";
import message from "./js/message.js";
import setColors from "./js/colors.js";


// {
//   "id": "b2ab7d06-a794-46af-9eff-9f5939cf500a",
//   "color": 1,
//   "amount": 67,
//   "winAmount": 80,
//   "status": "loss",
//   "user": {
//       "id": "12f01357-1147-4b39-9b1c-f0f124fd2ff9",
//       "username": "Mitchell_Medhurst",
//       "name": "Wilfred Walker"
//   }
// }


config.init({
  name: "Amanda",
  crown: 1,
  wallet: 1000,
  time: 500,
  list: [1, 2],
  betValue: 10,
  buttonChoice: 1
})

loading.end = () =>{
  // quando o tempo chega ao fim
  // console.log(cards.choice_number)
  // communication.loading_end()
  // message.normal(cards.choice_number)
  
  
  

  // cards.choice(parseInt(Math.random() * 10 + 1));
  // cards.choice(5);
  // stats.hud_off();
  // stats.setGameOver(false);
}

cards.end = () => {

  // >> quando o card chega no fim

  // message.normal("> Jogada encerrada, aguarde")
  table.tablewinnumber(cards.choice_number) 
  // message.normal(cards.choice_number)

  // console.log(cards.choice_number)

  // alert('go')
  // cards.status = 'stop'

//   loading.resetTime(13)

    // message.normal("Jogada encerrada, aguarge")
    
    


  // console.log(cards.choice_number)

  // table.tablewin((cards.choice_number|0)%3)
  // table.table()

  // stats.hud_on();
  // historic.add(cards.choice_number);
  // historic.list = cards.choice_number
  // if (stats.gameover == false && btn_apostar.innerHTML == "Apostou") {
  //   if(stats.choice == 1 && cards.choice_number == 0) stats.setWallet(stats.wallet + stats.betValue + stats.betValue * 14);
  //   if(stats.choice == 0 && cards.choice_number != 0 && cards.choice_number % 2 == 0) stats.setWallet(stats.wallet + stats.betValue + stats.betValue * 2);
  //   if(stats.choice == 2 && cards.choice_number != 0 && cards.choice_number % 2 == 1) stats.setWallet(stats.wallet + stats.betValue + stats.betValue * 2);
  // }

  // stats.reset();
  stats.setGameOver(true);

  // if(loading.time <= 0){
  //   if(cards.choice_number%2==0) table.tablewin(0)
  //   if(cards.choice_number%2!=0) table.tablewin(2)
  //   if(cards.choice_number%2==0) table.tablewin(1)
  // }

  // message.normal("Aguarde")

  // setTimeout(()=>{
  //   cards.restart()
  // },5000)

}

// cards.restart = () => {
  // communication.renew()
  // table.tablenormal()
  // loading.setTime(500)
// }

// table.tablewin((cards.choice_number|0)%3)
// table.tablewin(0)
// table.tablewin(1)
// table.tablewin(2)

let listafake = [
  {
      "id": "b2ab7d06-a794-46af-9eff-9f5939cf500a",
      "color": 1, // direita
      "amount": 67,
      "winAmount": 80,
      "status": "loss",
      "user": {
          "id": "12f01357-1147-4b39-9b1c-f0f124fd2ff9",
          "username": "Mitchell_Medhurst direito",
          "name": "Wilfred Walker"
      }
  },
  {
      "id": "47dbd38a-1f07-4f39-bd03-1b16fd73f300",
      "color": 3, // centro
      "amount": 54,
      "winAmount": 44,
      "status": "win",
      "user": {
          "id": "f775e27f-b744-44c4-a09f-bd5dcd3b829b",
          "username": "Jannie99_centro",
          "name": "Aubrey Grimes"
      }
  },
  {
      "id": "f0438b35-de04-4414-9024-b06182b69324",
      "color": 2, // esquerda
      "amount": 95,
      "winAmount": 26,
      "status": "loss",
      "user": {
          "id": "14446a8d-acca-4920-890b-7d669bb90656",
          "username": "Jules33 esquerda",
          "name": "Charlotte Casper"
      }
  },
  {
      "id": "6efce078-2099-43b7-897c-3d9290adb545",
      "color": 2, // esquerda
      "amount": 10,
      "winAmount": 75,
      "status": "win",
      "user": {
          "id": "a86084de-30c5-4ed7-91b8-39c3dea80019",
          "username": "Odell1.esquerda",
          "name": "Crystal Bechtelar"
      }
  },
  {
      "id": "79a75fd1-24e4-4f1a-b6bf-eca52e666ea0",
      "color": 3, // centro
      "amount": 63,
      "winAmount": 74,
      "status": "win",
      "user": {
          "id": "67b24396-5e5f-4aca-8c19-ac6f24bb1a97",
          "username": "Shany_Vandervort94_centro",
          "name": "Beatrice Powlowski"
      }
  }
]

btn_escolha_1.classList.add('btn-active')

window.addEventListener("keyup" , e=> {

  if(e.key == "1") table.setLista(listafake)  // preenche a tabela com usuários e apostas
  
  if(e.key == "2") { 
    cards.choice_number = 0
    table.tablewinnumber(cards.choice_number) 
    cards.choice(cards.choice_number)
  }

  // if(e.key == "2") communication.renew() // apagar todos os usuários que apostaram 
  // if(e.key == "3") table.tablewin(0) // insere cor ao vencedor na tabela
  // if(e.key == "4") table.tablenormal() // remove as cores da tabela
  // if(e.key == "5") cards.choice(1) // roda o slide e cai no número escolhido
  // if(e.key == "6") loading.resetTime(10) // seta o tempo tempo
  // if(e.key == "7") historic.add(cards.choice_number) // adiciona ao histórico
  
  // if(e.key == "a") table.tablewinnumber(0) // renovar
  // if(e.key == "s") table.tablewinnumber(1) // renovar
  // if(e.key == "d") table.tablewinnumber(2) // renovar

  // if(e.key == "q") communication.renew()
    // if(e.key == "3" || e.key == "2" || e.key == "1") communication.add(fakelist[n++])

  // if(e.key == "'") communication.renew()

  // if(e.key=="1"){
  //   loading.setTime(500)
  // }

  // if(e.key=="9"){
  //   console.log(cards.choice_number)
  //   table.tablewin(cards.choice_number)
  // }

})

// setInterval(()=>{
//   table.tablewin(0)
// },1000/60)

// table.tablewin(0) // branco
// table.tablewin(1) // azul
// table.tablewinnumber(6) // verde

// let x = 7590
// let num_x = cards_in.style.transform.match(/\d+/g)[0]|0
// cards_in.x -> -7300


// cards_in.x = -7300

// window.onresize = () => {
//   let w = div_cards.offsetWidth
//   let w2 = w/2
//   cards_in.style.transform = `translateX(${cards_in.x + w2 + 680 + 80}px)`
// };


