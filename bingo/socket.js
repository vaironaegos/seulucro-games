const payload = {
    "id": "790e7f51-1e9d-41ac-92eb-d31d713a35f6",
    "createdAt": "2024-03-11 12:00:00",
    "startAt": "2024-03-11 12:05:00",
    "title": "Bingo de R$ 500",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis dolor sit amet ex venenatis tempor sed at orci. Nunc aliquet ac nisl ac eleifend.",
    "subscribersCount": 15,
    "player": {
        "id": "790e7f51-1e9d-41ac-92eb-d31d713a35f6",
        "name": "Fulano de Tal",
        "cards": [
            { id: "790e7f51-1e9d-41ac-92eb-d31d713a35f6", code: "0001", numbers: [95, 18, 24, 69, 94, 75, 2, 29, 21, 23, 20, 36, 0, 17, 20, 1, 35, 64, 41, 6, 61, 71, 21, 83, 72] },
            { id: "790e7f51-1e9d-41ac-92eb-d31d713a35f6", code: "0002", numbers: [28, 17, 24, 49, 75, 11, 60, 44, 76, 71, 61, 32, 0, 15, 54, 3, 96, 75, 74, 3, 62, 80, 99, 61, 6] },
            { id: "790e7f51-1e9d-41ac-92eb-d31d713a35f6", code: "0003", numbers: [13, 41, 71, 45, 15, 94, 63, 20, 64, 69, 57, 40, 0, 43, 80, 18, 47, 4, 36, 54, 27, 55, 98, 59, 26] },
            { id: "790e7f51-1e9d-41ac-92eb-d31d713a35f6", code: "0004", numbers: [40, 73, 28, 19, 65, 60, 14, 87, 40, 16, 36, 86, 0, 94, 92, 33, 25, 64, 72, 22, 64, 42, 31, 4, 15] },
            { id: "790e7f51-1e9d-41ac-92eb-d31d713a35f6", code: "0005", numbers:  [76, 79, 11, 61, 22, 83, 89, 1, 10, 84, 98, 85, 0, 30, 89, 14, 61, 77, 55, 32, 85, 48, 86, 3, 77] }
        ]
    },
    "awards": [
        { "id": "790e7f51-1e9d-41ac-92eb-d31d713a35f6", "description": "Prêmio Linha", "amount": 200 },
        { "id": "790e7f51-1e9d-41ac-92eb-d31d713a35f6", "description": "Prêmio Cartela Cheia", "amount": 1000 }
    ]
}

// app.set_cartelas_payload(payload)


// app.cartelas_payload = payload

fetch('https://topbingos.com.br/data.php')
.then(e=>e.json())
.then(e=>{

    // console.log("payload anterior")
    // console.log(payload)
    // console.log("novo")
    console.log(e)
    app.cartelas_payload = e
    
    // console.log(e)

    // app.t1 = Control.time.diferenceTime(Date.now(), e.startAt)
    // app.t2 = Control.time.diferenceTime(Date.now(), e.createdAt)

    Control.time.createAt = e.createdAt
    Control.time.startAt = e.startAt
    

    // app.cartelas_payload = payload
    Control.status = e.status
    // app.status = e.status s

    if(e.status == 3){
        Control.called = true
    }

    if(e.status == 3 || e.status == 4){
        fullsocket()
        Dialog.close(div_loading)
    }else{
        // Control.loading_off()
        div_invalid.removeAttribute('style')
    }




})

// app.cartelas_payload = payload
// fullsocket()

function fullsocket(){

    // Play.loaded()

    const socket = new WebSocket("wss://ws.topbingos.com.br");

    // https://start.topbingos.com.br

    socket.addEventListener('open', e => {
        send(JSON.stringify({
            "action": "subscribe",
            "payload": {
                "bingo": {
                    "id": payload.id,
                    "title": payload.title
                },
                "player": {
                    "id": payload.player.id,
                    "name": payload.player.name,
                }
                //"player": null
            }
        }));
    });

    socket.addEventListener('message', e=>{

        function inverse(a){
            //a = [1,2,3,4]
            try{
                b = []
                for(i=a.length-1;i>=0;i--){
                    b.push(a[i])
                }
                return b
            }catch(e){
                return a
            }
        }

        const obj = JSON.parse(e.data)
        console.log(obj)

        // bolas_chamadas = obj.payload.drawnNumbers
        // const obj = {}

        bolas_chamadas = obj.payload.drawnNumbers
        
        Marking.paintAllArray(bolas_chamadas)

        // Play.numbers(obj.payload.drawnNumbers)


        if(obj.action == "playerList"){
            // bolas_chamadas = obj.payload.drawnNumbers
            // Marking.paintAllArray(bolas_chamadas)
            Control.sound_ball = false
            Play.numbers(inverse(obj.payload.drawnNumbers))
            
            // Control.sound_ball = true
            // Dialog.close(div_loading)
            Control.loading_off()

            // efeito_fade()
        }
        
        if(obj.action == 'number'){
            Control.sound_ball = true
            Play.number(obj.payload.number)
        }
        
        if(obj.action == "start"){
            Play.clean()
            
        }

        // if(obj.payload.lineWinner != null && obj.payload.fullWinner == null)
        //     audio.linha()
        
        // if(obj.payload.fullWinner != null)
        //     audio.cartela()
        
        if(obj.payload.lineWinner != null && obj.action != 'end'){
            app.nome_vencedor_linha = obj.payload.lineWinner.name.split(' ')[0]
        }



        if(obj.payload.lineWinner != null && obj.action != 'end'){
            Play.line()
            // msg(obj.payload.lineWinner.name.split(' ')[0]+"<br>Marcou uma linha")
            // audio.linha()
            // try{
            //     audio.linha()
            // }catch(e){
            //     alert('erro')
            // }
        }


        if(obj.payload.fullWinner != null && obj.action == 'end'){
            Play.card()
                // msg(obj.payload.fullWinner.name+"<br>Marcou uma cartela")
                // audio.cartela()
// 
                setTimeout(()=>{
                    Dialog.open(div_dia_2)
                    // abrir(div_dia_2)

                    
                    // app.valor_linha = payload.awards[0].amount
                    // app.valor_premio = payload.awards[1].amount
                    
                    // console.log('payload')
                    // console.log(payload)
                    
                    app.valor_linha = payload.awards[0].amount
                    app.valor_premio = payload.awards[1].amount
                    app.total_de_bolas = obj.payload.drawnNumbers.length
                    
                    app.nome_vencedor_linha = obj.payload.lineWinner.name.split(' ')[0]
                    app.nome_vencedor_tudo = obj.payload.fullWinner.name.split(' ')[0]

                }, 2000)
        }
    })


    window.addEventListener('beforeunload', function () {
        send(JSON.stringify({
            "action":"unsubscribe",
            "payload":{
                "bingo": {
                    "id": payload.id,
                    "title": payload.title
                },
                "player": {
                    "id": payload.player.id,
                    "name": payload.player.name,
                }
                // "player": null
            }
        }));

        socket.close();
    })

    function send(msg) {
        socket.send(msg);
    }
}


document.addEventListener('DOMContentLoaded', function () {
    // fullsocket
})


