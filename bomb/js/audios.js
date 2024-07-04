let _n = 0


let audios = {
  tik(){ new Audio(`./sounds/tik.mp3`).play() },
  card(){ new Audio(`./sounds/card${(_n++)%3}.mp3`).play() },
  lose(){ new Audio(`./sounds/lose.mp3`).play() }
}

// audios.tik()
// audios.card()
// audios.lose()

export default audios