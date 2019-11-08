// var safari = function(id) {
//   return document.getElementById("letterchoice-text");
// };

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
  var wordLength = chosenWord.length;
  var underscores = "";
  for (var i = 0; i < chosenWord.length; i++) {
    underscores += "_ ";
  }
  console.log(chosenWord);
  console.log(underscores);
  return underscores;
}

addUnderscores(chosenAnimal);
