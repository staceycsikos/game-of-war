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
  takeHand(table) {
    for (let i = 0; i < table.length; i++) {
      this.deck.push(table[i]);
    }
  }
  clear() {
    this.cardPlay.splice(0, this.cardPlay.length);
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
  clear() {
    this.deck.splice(0, this.deck.length);
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

let clearAll = (p1, p2, bigT) => {
  p1.clear();
  p2.clear();
  bigT.clear();
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
    playerOne.takeHand(table.deck);
    clearAll(playerOne, playerTwo, table);
  } else if (playerOne.lastPlayed.value < playerTwo.lastPlayed.value) {
    console.log("player two won");
    playerTwo.takeHand(table.deck);
    clearAll(playerOne, playerTwo, table);
  } else if (playerOne.lastPlayed.value == playerTwo.lastPlayed.value) {
    console.log("players tied");
    playerOne.draw(4);
    playerTwo.draw(4);
    table.add(playerOne.cardPlay);
    table.add(playerTwo.cardPlay);

    gameOver = true;
  }
  console.log("\n");
  console.log(playerOne.deck.length, playerTwo.deck.length);
};

let runGame = () => {
  while (!gameOver) {
    if (playerOne.deck.length == 0 || playerTwo.deck.length == 0) {
      gameOver = true;
    } else {
      playRound();
    }
    gameOver = true;
  }
  console.log(
    "player lengths:   ",
    playerOne.deck.length,
    "   ",
    playerTwo.deck.length
  );
};
let war = () => {
  console.log("players tied");
  table.add.push(playerOne.deck.slice(0, 2));
  table.add.push(playerTwo.deck.slice(0, 2));
  playerOne.draw(1);
  playerTwo.draw(1);
  table.add(playerOne.cardPlay);
  table.add(playerTwo.cardPlay);
};
let gameOver = false;
let deck = createDeck();
deck = shuffle(deck);
const playerOne = new Player(deck.slice(0, 26));
const playerTwo = new Player(deck.slice(26, 52));
const table = new Table();
// let gameOver = false;

runGame();

// console.log(playerOne.deck.length, playerTwo.deck.length);

// console.log(playerOne.deck.length)
// playerOne.draw(7)
// console.log(playerOne.cardPlay)
// console.log(playerOne.lastPlayed)
