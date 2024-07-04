// let historic = {}

const { createApp } = Vue

let historic = createApp({
  data(){
    return {
      list: [0,1,2,3,4,5]
    }
  },
  methods: {
    add(arr){
      this.list.push(arr)
    }
  }
})
.mount("#div_historico")

// div_historico
// historic.setList([1,2,3,4,5,6,7,8])

// setTimeout(()=>{
//   historic.list = [0,1,2,5,0,4,5,6,8,7,0,0,0,9,8]
// },2000)

// let historic = {
//   div: div_historico,
//   list: [],

//   setList(list) {
//     this.list = list;
//     this.renderList()
//   },

//   add(n) {
//     if (n == undefined) return false;

//     let btn = document.createElement("button");
//     btn.innerHTML = n;

//     if (n % 2 == 0) btn.className = "btn btn-green";
//     if (n % 2 == 1) btn.className = "btn btn-blue";
//     if (n == 10) {
//       btn.className = "btn btn-white";
//       btn.innerHTML = "x";
//     }

//     div_historico.insertBefore(btn, div_historico.children[0]);
//   },

//   renderList() {
//     this.div.innerHTML = "";
//     this.list.map((e) => this.add(e));
//   },
// };

export default historic;
