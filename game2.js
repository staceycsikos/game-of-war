class Cards {
  constructor(suit, rank, score) {
    this.suit = suit
    this.rank = rank
    this.score = score
  }
}

class Deck{
  constructor() {
    this.cards = []  
    this.createDeck()
  }
  createDeck() {
    let suits = ["Hearts", "Spades", "Clubs", "Diamonds"]
    let rank = ["Ace", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]

    for (let i = 0; i < suits.length; i++){
      for (let j = 0; j < rank.length; j++){
        this.cards.push(new Cards(suits[i], rank[j], j+1))
      }
    }
   
  }
  draw(){
    return this.cards.pop()
  }
}


let newDeck = new Deck()
console.log(newDeck.cards)



console.log(newDeck.cards.length)
console.log(newDeck.draw())
console.log(newDeck.draw())
console.log(newDeck.draw())
console.log(newDeck.draw())
console.log(newDeck.cards.length)

