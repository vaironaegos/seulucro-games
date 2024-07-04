export default function Money(n) {
  // n = parseFloat(n);
  // return "R$ " + n.toFixed(2).replace(".", ",");
  return n.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  // return n
}
