export default function Money(n) {
  return "R$ " + n.toFixed(2).replace(".", ",");
}
