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
var remainingGuesses = 11;
var guessesAllowed = 11;

// function beginGame() {
//   guessesAllowed = 11;
// }

// var choice = math.floor(math.random() * animals.length);

// function to get a random word from the array/ in own ecosystem doesn't care  about above
// when you pass in arg. array, telling function what to do with it, right now a placeholder - can call it anything
function beginGame(array) {
  remainingGuesses = 11;
  wrongGuesses = [];
  document.getElementById("guessed-so-far").innerHTML = wrongGuesses;
  document.getElementById("guesses-remaining").innerHTML = remainingGuesses;
  return array[Math.floor(Math.random() * array.length)];
  lettersOfWord = chosenAnimal.split("");
  blanks = lettersOfWord.length;
}

var chosenAnimal = beginGame(animalArray);

// begin Game function call broke the site
// beginGame();

// return is usually the last line - no code after return line will run

// below function/for loop (lines 61-69)was written with the help of T.A.

function addUnderscores(chosenWord) {
  console.log();
  var wordLength = chosenWord.length;
  var underscores = "_";

  // for (var i = 0; i < chosenWord.length; i++) {
  //   var span = document.createElement("span");
  //   span.innerHTML = "_ ";
  //   underscoresContainer.appendChild(span);
  // }

  // refresh after every game
  var remainingGuesses = 11;
  var guessesAllowed = 11;
  var letterChoice = [];
  var wrongGuesses = [];

  // fill in blanks and letters (question as to whether necessary given code on line 58-66)

  for (var i = 0; i < chosenWord.length; i++) {
    blanksAndLetters.push("_");
  }
  underscores = blanksAndLetters.join(" ");
  underscoresContainer.innerHTML = underscores;

  // testing in console

  console.log(chosenWord);
  console.log(underscores);
  console.log(lettersOfWord);
  return underscores;
}

// this function tracks user key clicks

document.onkeyup = function(event) {
  var letterChoice = String.fromCharCode(event.keyCode).toLowerCase();
  letterChoiceCompare(letterChoice);
  // alert(letterChoice);
};

// below will update game status to the HTML - first commented out will negate the spaces for some reason

// document.getElementById("guessed-so-far").innerHTML = blanksAndFilledSpaces;

document.getElementById("guesses-allowed").innerHTML = guessesAllowed;

addUnderscores(chosenAnimal);

function letterChoiceCompare(letter) {
  // this function determines if letter choice exists in the animal word- default setting to fault - expecting it not to exist in word
  var letterExists = false;
  for (var i = 0; i < chosenAnimal.length; i++) {
    if (chosenAnimal[i] === letter) {
      letterExists = true;
      // alert(letterExists);
    }
  }

  if (letterExists) {
    for (var i = 0; i < blanksAndLetters.length; i++) {
      if (chosenAnimal[i] === letter) {
        blanksAndLetters[i] = letter;

        underscores = blanksAndLetters.join(" ");
        underscoresContainer.innerHTML = underscores;
        if (blanksAndLetters.join("") === chosenAnimal) {
          alert("Congratulations, you won!!");
          wins++;
          document.getElementById("wins-total").innerHTML = wins;

          chosenAnimal = beginGame(animalArray);
        }
      }
    }
  } else {
    wrongGuesses.push(letter);
    document.getElementById("guessed-so-far").innerHTML = wrongGuesses;
    remainingGuesses--;
    document.getElementById("guesses-remaining").innerHTML = remainingGuesses;
    if (remainingGuesses === 0) {
      alert(
        "You lost this round... no worries, refresh the page and try again!"
      );
      losses++;
      document.getElementById("losses-total").innerHTML = losses;

      chosenAnimal = beginGame(animalArray);
    }
  }
}

/**
 * Each span above is just a span with underscore
 * each span with an underscore is supposed to be the placeholder for a letter
 * How will the span know which letter it is supposed to be the placeholder for?
 * How will you select the correct span to replace with the letter upon a correct guess?
 *
 */
