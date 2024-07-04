// function search(input_field, list_field) {

//   console.log(input_field);

//   // input_field.addEventListener('onclick', ()=>{
//   //   alert('ok')
//   // });

//   [...list_field.children].map((e) => {
//     e.onmousedown = (e) => {
//         inp.value = e.target.innerText
//     };
//   });


//   ['onclick'].map((ev) => {
//     input_field.addEventListener(ev, function () {
      
//       [...list_field.children].map((e) => {

        
//         if (!e.innerText.toLowerCase().includes(this.value.toLowerCase())) {
//           //   e.style.display = "none";
//         } else {
//           e.removeAttribute("style");
//         }
//     });
// });

//   });
// }

// [...document.querySelectorAll("[field]")].map((e) => {
  
//   _field = document.getElementById(e.getAttribute("field"));
//   _input = document.getElementById(e.getAttribute("id"));

//   search(_input, _field);
// });

document.querySelector(".square").addEventListener("click", ()=>{
  lista.style.height = "200px"
})

let lis = [...lista.children]
lis.map(e=>{
  e.onclick = function(){
    let val = parseInt(this.innerHTML)
    console.log(val)
    lista.style.height = "0px"
    document.querySelector(".square").innerText = val
  }
})
