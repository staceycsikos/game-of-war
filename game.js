
// let cards = [
//   clubs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 , 13 , 14],
//   diamonds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 , 13 , 14],
//   hearts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 , 13 , 14],
//   spades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 , 13 , 14],
// ]
 
// let combinecards = cards.concat(clubs, diamonds, hearts, spades)

// // shuffle = (array) => {
// //   array.sort(() => Math.random() - 0.5);
// // }

// // shuffle(combinecards)

// console.log(combinecards)

let myFavoriteNumbers = [ 1, 23, 22, 4, 25, 8, 15, 20]

function shuffle(array) {
  let copy = [], n = array.length, i;

  // While there remain elements to shuffle…
  while (n) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * array.length);

    // If not already shuffled, move it to the new array.
    if (i in array) {
      copy.push(array[i]);
      delete array[i];
      n--;
    }
  }

  return copy;
}

console.log(shuffle(myFavoriteNumbers))
