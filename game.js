const clubs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const diamonds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const hearts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const spades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

let cards = clubs.concat(diamonds, hearts, spades);
function shuffle(array) {
  let m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

shuffle(cards);

// console.log(shuffle(cards))

let player1 = cards.slice(0, 26);
let player2 = cards.slice(26, 52);

// console.log(player1);
// console.log(player2);

console.log("Game Starting NOW!");

// function draw(flip) {
//   return flip.pop()
// }

let x = 2 /*player1.pop()*/
let y = 2 /*player2.pop()*/
let z = []
let a = []

console.log (x, y)

// console.log(player1.length, player2.length)

if (x > y) {
  console.log("Player 1 draws a " + x + " and wins!")
} else if (y > x) {
  console.log("Player 2 draws a " + y + " and wins!")
} else if (y = x) {
  z.push(player1.splice(0, 2))
  a.push(player2.splice(0, 2))
  console.log(z, a)
  // war(a, z)
  console.log("Both players play " + x + " WE ARE NOW ENTERING WARRRRR!!!!!")
}

// if (y = x) {
//   z.push(player1.splice(0, 2))
//   a.push(player2.splice(0, 2))
//   // console.log(z, a)
//   // war(a, z)
//   console.log("WE ARE NOW ENTERING WARRRRR!!!!!")
// }
// else if (x > y) {
//   console.log("Player 1 draws a " + x + " and wins!")
// } else if (y > x) {
//   console.log("Player 2 draws a " + y + " and wins!")
// } 
// console.log(x, y,)
// console.log(z, a)

// function war(a,z) {
//   return "hi"
// }
// console.log(war(a, z))

// if (console.log("Player 1 plays a "+ draw(player1)) > console.log("Player 2 plays a "+draw(player2))) {
//     console.log("player 1 won") 
// } else if (console.log("Player 1 plays a " + draw(player1)) > console.log("Player 2 plays a " + draw(player2))){
//   console.log("player 2 won")}
//  else {
//   console.log("It's a tie")
// }

