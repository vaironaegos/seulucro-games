function Money(value){
  let num = value
  num = num.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'} )
  // num = num.split("R$ ").pop()
  // return "R$ "+value.toFixed(2).replace(/\./g,",")
  return num
}

export default Money