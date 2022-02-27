

const clubs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
const diamonds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
const hearts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
const spades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

 
let cards = clubs.concat(diamonds, hearts, spades)



// function shuffle(array) {
//   let copy = [], n = array.length, i;

//   // While there remain elements to shuffle…
//   while (n) {

//     // Pick a remaining element…
//     i = Math.floor(Math.random() * array.length);

//     // If not already shuffled, move it to the new array.
//     if (i in array) {
//       copy.push(array[i]);
//       delete array[i];
//       n--;
//     }
//   }

//   return copy;
// }


// shuffle(combinecards)

// console.log(shuffle(combinecards))

