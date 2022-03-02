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

  draw() {
    return this.cards.pop();
  }
}
let createDeck = (deck = []) => {
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
      deck.push(new Cards(suits[i], rank[j], j + 1));
    }
  }
  return deck;
};
let beeBrand = new Deck();

let player1 = beeBrand.cards.slice(0, 26);
let player2 = beeBrand.cards.slice(26, 52);


console.log(player1.length, player2.length);
console.log(createDeck());
