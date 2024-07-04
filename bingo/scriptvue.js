    var app = new Vue({
        el: "#app",
        data: {
            t1: 1,
            time: 20,
            players_quant: 20,
            message: "Hello World!",
            items:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            resultado: [],
            cartelas: [
                [94, 18, 24, 69, 94, 75, 2, 29, 21, 23, 20, 36, 46, 17, 20, 1, 35, 64, 41, 6, 61, 71, 21, 83, 72],
                [28, 17, 24, 49, 75, 11, 60, 44, 76, 71, 61, 32, 7, 15, 54, 3, 96, 75, 74, 3, 62, 80, 99, 61, 6],
                [13, 41, 71, 45, 15, 94, 63, 20, 64, 69, 57, 40, 39, 43, 80, 18, 47, 4, 36, 54, 27, 55, 98, 59, 26],
                [40, 73, 28, 19, 65, 60, 14, 87, 40, 16, 36, 86, 74, 94, 92, 33, 25, 64, 72, 22, 64, 42, 31, 4, 15],
                [76, 79, 11, 61, 22, 83, 89, 1, 10, 84, 98, 85, 10, 30, 89, 14, 61, 77, 55, 32, 85, 48, 86, 3, 77],
                [1, 96, 8, 51, 2, 61, 39, 66, 22, 34, 75, 82, 6, 20, 57, 46, 68, 67, 97, 48, 69, 75, 79, 85, 69]
            ],
            cartelas_payload: {
                player: {
                    cards: []
                }
            },

            isLoading:true,
            
            total_de_bolas: 0,
            valor_premio: 0,
            valor_linha: 0,

            nome_vencedor_tudo: "---",
            nome_vencedor_linha: "---",

            bolas_chamadas: [],
            bolas_chamadas_r: [],

            t1: '2024-03-24 13:40:00',
            t2: '2024-03-24 13:41:10'

        },

      

        mounted() {
            this.tempo();

            // setInterval(() => {
            //     this.tempo();
            //     cartela.zero_image()
            // }, 1000);
        },
        methods: {

            bolas_chamadas_reverse(){
                this.bolas_chamadas.reverse()
            },

            set_cartelas_payload(obj){
                this.cartelas_payload = obj
            },

            editarCartelas(arr){
                this.cartelas = []
                this.cartelas = arr
            },

            trocarCartelas: function(index1, index2) {
                const temp = this.cartelas[index1];
                this.cartelas.splice(index1, 1, this.cartelas[index2]);
                this.cartelas.splice(index2, 1, temp);
            },

            tempo(){
                // let a = 1710346874; // Timestamp in seconds
                let a = this.t1; // Timestamp in seconds
                let b = Math.floor(Date.now() / 1000); // Current timestamp in seconds

                let t = b - a; // Time difference in seconds

                // Convert seconds to hours, minutes, and remaining seconds
                let hours = Math.floor(t / 3600);
                let minutes = Math.floor((t % 3600) / 60);
                let seconds = t % 60;

                // console.log("Time difference:");
                // console.log("Hours:", hours);
                // console.log("Minutes:", minutes);
                // console.log("Seconds:", seconds);

                this.time = hours+":"+minutes+":"+seconds

                // return hours+minutes+seconds
            }
        }
    })



