function Message(msg) {
  let div = document.createElement("div");
  div.className = "message";
  div.innerHTML = `<div class="message-in">${msg}</div>`;
  document.body.appendChild(div);
  setTimeout(() => {
    div.classList.add("message-out");
    div.onanimationend = () => div.remove();
  }, 3000);
}

export default Message