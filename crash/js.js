import line from "./js/line.js";
import game from "./js/game.js";
import foguete from "./js/foguete.js";
import message from "./js/message.js";
// import values from "./js/values.js";
import events from "./js/events.js";
import button from "./js/button.js";
// import table from "./js/table.js";
import connection from "./js/connection.js";
import loading from "./js/loading.js";
// import explosion from './js/explosion.js'
// import './js/explosion.js'
import './js/vue.js'
import './js/smoke.js'

// init
game.start()

Swal.fire({
    title: "Bem-vindo",
    text: "Seja bem vindo",
    // icon: "warning",
    // showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Obrigado"
  }).then((result) => {
    if (result.isConfirmed) {
        document.documentElement.requestFullscreen();
    //   Swal.fire({
    //     title: "Deleted!",
    //     text: "Your file has been deleted.",
    //     icon: "success"
    //   });
    }else{
        document.documentElement.requestFullscreen();
    }
  });



// explosion.x = 100
// explosion.y = 100
// explosion.explode()
// game.setLimit(2)
// game.voar()

// loading.porcentage(0)

// game.renew()

// setTimeout(()=> game.reset(), 3000 )

// button
// button.getName()
// button.setName('Aguarde')

// setTimeout(()=> game.pause(), 1000 )
// setTimeout(()=> game.explode(), 2000 )

// values.setBet(values.bet)
// values.setMult(values.mult)
// values.setMoney(values.money)

// message
// message.msgWin
// message.normal
// message.alert

// game.voar()

// table.historico = [1,2,3,4,5,6,7]


// window.onkeyup=function(e){
//     if(e.key == "1") connection.bet()
    
//     if(e.key == "2") {
//       // console.log(2)
//       connection.complete()
//     }

//     if(e.key == "3") connection.cachout()
//     if(e.key == "4") message.normal("vai")
  
//     if(e.key == "5") {
//       game.porcent = 89
//     }
//   }