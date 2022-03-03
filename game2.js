class Cards {
  constructor(suit, rank, score) {
    this.suit = suit;
    this.rank = rank;
    this.score = score;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    this.createDeck();
  }
  createDeck() {
    let suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
    let rank = [
      "Ace",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
    ];

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < rank.length; j++) {
        this.cards.push(new Cards(suits[i], rank[j], j + 1));
      }
    }
    this.shuffle();
  }
  shuffle() {
    let m = this.cards.length,
      t,
      i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = this.cards[m];
      this.cards[m] = this.cards[i];
      this.cards[i] = t;
    }
    return this.cards;
  }

  // draw() {
     //   return this.cards.pop();
  // }
}

let beeBrand = new Deck();
let bee = beeBrand.cards 

// console.log(bee); // shuffled cards

let player1 = bee.slice(0, 26);  // creates two decks 
let player2 = bee.slice(26, 52);
let returnPile1 = []
let returnPile2 = []
// console.log(player1)

if (player1[0].score > player2[0].score) {
  returnPile1.push(player2[0])
  player2.shift(0)
  console.log("Player 1 plays " + player1[0].score + " and won!" )  
} if (player2[0].score > player1[0].score) {
  returnPile2.push(player1[0])
  player1.shift(0)
  console.log("Player 2 plays " + player2[0].score + " and won!" )
}

console.log(player1.length, player2.length)
console.log(returnPile1, returnPile2)
  
  
  
/// make players and object???
// function draw(flip) {
//   return flip.pop()
// }

// let x = player1.pop()
// let y = player2.pop()
 
// // let z = x.score
// // let a = y.score

// let z = 2
// let a = 3

// let b = []
// let c = []
//  b.push(a)
// while (a > z) {
 
//   console.log("Player 1 draws a " + a + " and wins!")
//   return a - 2
// }
// console.log(b)



// if (a > z) {
//   console.log("Player 1 draws a " + a + " and wins!")
// } else if (z > a) {
//   console.log("Player 2 draws a " + z + " and wins!")
// } else if (z == a) {
//   console.log(z, a)
//   b.push(player1.splice(0, 4))
//   c.push(player2.splice(0, 2))
//   // console.log(b)
//   console.log(b[0][0].score)
//   console.log(c[0][0].score)
//   if (b[0][0].score > 

//   console.log("Both players play " + a + " WE ARE NOW ENTERING WARRRRR!!!!!")
// } 


// const found = player1.find(element => element score:);
// console.log(player1)

// arr1.flatMap(x => x.split(" "));



// for (let i = 0; i < player1.length; i++) {
//    draw() {
//       return this.cards.pop();
// }
  





