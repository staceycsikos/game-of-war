

const clubs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
const diamonds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
const hearts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
const spades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

 
let cards = clubs.concat(diamonds, hearts, spades)

function shuffle(array) {
  var m = array.length, t, i;

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



console.log(shuffle(cards))

const splitDeck = Math.ceil(cards.length / 2)

let player1 = cards.splice(0, splitDeck)
let player2 = cards.splice(-splitDeck)

console.log(player1)
console.log(player2)

