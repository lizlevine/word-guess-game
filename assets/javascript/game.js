var safari = function(id) {
  return document.getElementById("letterchoice-text");
};

var animals = [
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
var choice = math.floor(math.random() * animals.length);
var answer = animals[choice];
var total = answer.length;

alert(answer);
