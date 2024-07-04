let History = {
  add(n) {
    let d = document.createElement("div");
    d.innerHTML = n;
    d.className = "b-blue";
    // div_historic.appendChild(d);
    div_historic.insertBefore(d, div_historic.children[0]);
    console.log(div_historic);
  },
};

export default History;
