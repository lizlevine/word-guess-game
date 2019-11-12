// var beginGame = document.getElementById;
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var underscoresContainer = document.getElementById("underscores");
// var userGuess = document.getElementById("user-guess")["0"].value;

// Array of Animals selected randomly
var animalArray = [
  "cheetah",
  "zebra",
  "giraffe",
  "leopard",
  "elephant",
  "gazelle",
  "lion",
  "rhino",
  "buffalo",
  "meerkat"
];

// Arrays and variables for holding data to be used inside of functions:

var chosenAnimal = "";
var blanksAndLetters = [];
var blanks = 0;
var lettersOfWord = [];
var wrongGuesses = [];

// possible outcomes
var wins = 0;
var losses = 0;
var remainingGuesses = 0;
var guessesAllowed = 11;

// function beginGame() {
//   guessesAllowed = 11;
// }

// var choice = math.floor(math.random() * animals.length);

// function to get a random word from the array/ in own ecosystem doesn't care  about above
// when you pass in arg. array, telling function what to do with it, right now a placeholder - can call it anything
function beginGame(array) {
  return array[Math.floor(Math.random() * array.length)];
  lettersOfWord = chosenAnimal.split("");
  blanks = lettersOfWord.length;
}

var chosenAnimal = beginGame(animalArray);

// beginGame();

// could console log and see an animal name
// return is usually the last line - no code after return line will run

function addUnderscores(chosenWord) {
  console.log();
  var wordLength = chosenWord.length;
  var underscores = "_";

  for (var i = 0; i < chosenWord.length; i++) {
    var span = document.createElement("span");
    span.innerHTML = "_ ";
    underscoresContainer.appendChild(span);
  }

  // refresh after every game
  var remainingGuesses = 0;
  var guessesAllowed = 11;
  var letterChoice = [];
  var wrongGuesses = [];
  var blanksAndLetters = [];

  console.log(chosenWord);
  console.log(underscores);
  return underscores;
}

document.onkeyup = function(event) {
  var letterChoice = String.fromCharCode(event.keyCode).toLowerCase();
  letterChoiceCompare(letterChoice);
  alert(letterChoice);
};

// document.getElementById("guessed-so-far").innerHTML = blanksAndFilledSpaces;
// document.getElementById("guesses-remaining").innerHTML = remainingGuesses;
document.getElementById("guesses-allowed").innerHTML = guessesAllowed;
document.getElementById("wins-total").innerHTML = wins;
document.getElementById("losses-total").innerHTML = losses;

addUnderscores(chosenAnimal);

// as soon as I add the code below, the underscores disappear, so I tried adding code above to bottom instead - didn't work

function letterChoiceCompare(letter) {
  // this function determines if letter choice exists in the animal word
  var letterExists = false;
  for (var i = 0; i < blanks; i++) {
    if (chosenAnimal[i] === letter) {
      letterExists = true;
      alert(letterExists);
    }
  }
}
if (letterExists) {
  for (var i = 0; i < blanks; i++) {
    if (chosenAnimal[i] === letter) {
      blanksAndLetters[i] = letter;
    }
  }
} else {
  wrongGuesses.push(letter);
  remainingGuesses--;
}

// addUnderscores(chosenAnimal);

// following function tracks keyclicks

// document.onkeyup = function(event) {
//   var letterChoice = String.fromCharCode(event.keyCode).toLowerCase();
//   letterChoiceCompare(letterChoice);
// };

/**
 * Each span above is just a span with underscore
 * each span with an underscore is supposed to be the placeholder for a letter
 * How will the span know which letter it is supposed to be the placeholder for?
 * How will you select the correct span to replace with the letter upon a correct guess?
 *
 */
