class Player {
  constructor(deck) {
    this.deck = deck;
    this.cardPlay = [];
    this.lastPlayed;
  }
  draw(cardsDown) {
    for (let i = 0; i < cardsDown; i++) {
      this.cardPlay.push(this.deck.pop());
    }
    this.lastPlayed = this.cardPlay[this.cardPlay.length - 1];
  }
}

class Table {
  constructor() {
    this.deck = [];
  }
  add(deck) {
    for (let i = 0; i < deck.length; i++) {
      this.deck.push(deck[i]);
    }
  }
}

let createDeck = () => {
  let deck = [];
  let suits = ["hearts", "clubs", "diamonds", "spades"];
  let value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < value.length; j++) {
      deck.push({ value: value[j], suit: suits[i] });
    }
  }
  return deck;
};

let shuffle = (deck) => {
  let remainingCards = deck.length;
  let randomIndex;
  while (remainingCards != 0) {
    randomIndex = Math.floor(Math.random() * remainingCards); //gets a random index based on how many cards are remaining
    remainingCards--;
    //swap current index with a random one
    [deck[remainingCards], deck[randomIndex]] = [
      deck[randomIndex],
      deck[remainingCards],
    ];
  }
  return deck;
};

let playRound = () => {
  playerOne.draw(1);
  playerTwo.draw(1);
  table.add(playerOne.cardPlay);
  table.add(playerTwo.cardPlay);
  console.log(table.deck);
  console.log("\n");

  console.log(
    "player one plays",
    playerOne.lastPlayed,
    "player two plays",
    playerTwo.lastPlayed
  );
  if (playerOne.lastPlayed.value > playerTwo.lastPlayed.value) {
    console.log("player one won ");
  } else if (playerOne.lastPlayed.value < playerTwo.lastPlayed.value) {
    console.log("player two won");
  } else if (playerOne.lastPlayed.value == playerTwo.lastPlayed.value) {
    console.log("players tied");
  }

};

let runGame = () => {
  while (!gameOver) {
    if (playerOne.deck.length == 0 ||)
  }
}




let deck = createDeck();
deck = shuffle(deck);
const playerOne = new Player(deck.slice(0, 26));
const playerTwo = new Player(deck.slice(26, 52));
const table = new Table();
let gameOver = false;


// console.log(playerOne.deck.length, playerTwo.deck.length);

// console.log(playerOne.deck.length)
// playerOne.draw(7)
// console.log(playerOne.cardPlay)
// console.log(playerOne.lastPlayed)
