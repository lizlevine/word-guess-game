var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var underscoresContainer = document.getElementById("underscores");

var animalArray = [
  "cheetah",
  "zebra",
  "giraffe",
  "leopard",
  "elephant",
  "gazelle",
  "lion",
  "rhino",
  "buffalo"
];

// var choice = math.floor(math.random() * animals.length);

// function to get a random word from the array/ in own ecosystem doesn't care  about above
// when you pass in arg. array, telling function what to do with it, right now a placeholder - can call it anything
function randomWord(array) {
  return array[Math.floor(Math.random() * array.length)];
}
// .random is the method.. whenever a funciton is inside an object we call it Math. object
// return - function as a funnel... multiple inputs that can go into it and manipulate those
// imputs and return one thing at the end. Return keyword allows you when you call to store
// the output inside of a new variable - functions written in lowercase/camel case.
// events (see)

var chosenAnimal = randomWord(animalArray);

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
  console.log(chosenWord);
  console.log(underscores);
  return underscores;
}

addUnderscores(chosenAnimal);

/**
 * Each span above is just a span with underscore
 * each span with an underscore is supposed to be the placeholder for a letter
 * How will the span know which letter it is supposed to be the placeholder for?
 * How will you select the correct span to replace with the letter upon a correct guess?
 *
 */

//   // This function is run whenever the user presses a key.
//   document.onkeyup = function(event) {

//     // Determines which key was pressed.
//     var userGuess = event.key;

// for (var i = 0; i < chosenWord.length; i++) {
//     underscores.push("_");

// Meri's code (modified) below (aboce console.log);

// display[i] = "_ ";
// output = output + display[i];

// write onkeyup event to begin game and then write inner.html to print underscores
// this was taken from r,p,s, exercise

// This function is run whenever the user presses a key.
//   document.onkeyup = function(event) {

// Determines which key was pressed.
// var userGuess = event.key;

// this is what michael used in his DOM manip exercise with the boxes;

// for (var i = 0; i < boxElements.length; i++) {
//     boxElements[i].innerHTML = `<h1>${i + 1}</h1>`;
//   }

// var setup = function() {
//   for (var i = 0; i < array.length; i++) {
//     display[i] = "_ ";
//     output = output + display[i];
//   }
//   document.getElementById("animalArray").innerHTML = output;
//   output = "";
// };
