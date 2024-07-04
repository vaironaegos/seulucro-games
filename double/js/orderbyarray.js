function orderbyarray(arr, propety="value", orderby="asc"){
  let numeros = []
  
  if(orderby == "desc") numeros = arr.map(e=>e[propety]).sort((a,b) => b-a)
  if(orderby == "asc") numeros = arr.map(e=>e[propety]).sort((a,b) => a-b)
  
  if(typeof(numeros[0]) == 'string') numeros = numeros.sort()
  if(typeof(numeros[0]) == 'string' && orderby == "desc") numeros = numeros.sort().reverse()

  let nova_lista = []
  let n = 0
  while(arr.length > 0){
    let obj = arr.find( e => e[propety] == numeros[n])
    nova_lista.push(obj)
    arr = arr.filter(e=>e!=obj)
    n++
  }
  return nova_lista
}

export default orderbyarray
// SortArrayObj(lista, "value", "asc")
// export default orderbayarray

// modules.export = orderbayarray

// module.exports = orderbyarray;