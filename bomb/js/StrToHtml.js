function StrToHtml(str){
  let el = document.createElement('div')
  el.innerHTML = str
  return el.children[0]
}

export default StrToHtml