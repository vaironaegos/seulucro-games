export default function money(value){
    return "R$ " + value.toFixed(2).replace(".", ",");
}