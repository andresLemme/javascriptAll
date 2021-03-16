export default function draw(btn, selector) {
  const getWinner = (selector) => {
    const $player = document.querySelectorAll(selector),
    random = Math.floor(Math.random() * $player.length),
    winner = $player[random];
    console.log($player, random, winner)
    return `El ganador es: ${winner.textContent}`
  };
  document.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let result = getWinner(selector);
      alert(result);
      console.log(result);
    }
  });
}


// Codigo para sorteo
// const getWinnerComment = (selector) => {
//     const $players = document.querySelectorAll(selector),
//     random = Math.floor(Math.random() * $players.length),
//     winner = $players[random];
//     console.log($players, random, winner)
//     return `El ganador es: ${winner.textContent}`
//   };

//   getWinnerComment("#author-text span")