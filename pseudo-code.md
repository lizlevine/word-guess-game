• create an array of animals that trigger a function
• create a random .math method function to randomly select animal names from the array 
• build a function that will hook into an element (span) to display _ _ _ _  (with same     
number of underscores as animal name
• Listen for onkeyup event and tie a function to begin game and generate a random name      
that displays correct number of underscores
• build if/else if/else conditional statements that will enable comparison of user guess against random word chosen
• BE MINDFUL OF OVER WRITING VARIABLES - USE LONGHAND WHEN NAMING VARS AND FCTS, DON'T OVER "MINIFY"

ex) if key pressed && it exist in random word 
THEN print that letter in the appropriate spae

else number of choices goes down by one (use getElementById to update HTML)

IF all underscores are filled 

THEN alert "you win!" and increment wins by 1 (use getElementById to update HTML), and reset the game

ELSE IF user runs out of guesses

THEN increment losses by 1

ELSE, decrement number of remaining guesses by 1
)


• Create function that calculates number of guesses remainingDisplay keys pressed (display)
• Remember to use property/method/ etc. to include lowerCase letters
• create a letter counter function and display which shows how many guesses remaining
• create a function that will count wins (number of times user guessed the word correctly)
• create a function that displays the users correct guesses and reveal them on the          
underscored line
• a function that generates the next word to be guessed




** Below are comments/ older code moved from js file to clean things up a bit **
_______________________________________________________________________________________________________


// function beginGame() {
//   chosenAnimal = animalArray[Math.floor(Math.random() * Animalarray.length)];
//   lettersOfWord = chosenAnimal.split("");
// }

// .random is the method.. whenever a function is inside an object we call it Math. object
// return - function as a funnel... multiple inputs that can go into it and manipulate those
// imputs and return one thing at the end. Return keyword allows you when you call to store
// the output inside of a new variable - functions written in lowercase/camel case.
// events (see)

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
// if we have all the correct letters...

// if (currentLetters.toString() === blanksAndFilledSpaces.toString()) {
//   wins++;
//   document.getElementById("");
// }

// document.getElementById("beginGame").onclick = function() {
//   buttons();
// };
// beginGame();


Option Two: Word Guess Game (Challenge - Recommended)



Use key events to listen for the letters that your players will type.


Display the following on the page:


Press any key to get started!


Wins: (# of times user guessed the word correctly).


If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.


As the user guesses the correct letters, reveal them: m a d o _ _ a.

Number of Guesses Remaining: (# of guesses remaining for the user).


Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).

After the user wins/loses the game should automatically choose another word and make the user play it.

*** Word Guess Game Bonuses ***

Play a sound or song when the user guesses their word correctly, like in our demo.
Write some stylish CSS rules to make a design that fits your game's theme.

** HARD MODE: Organize your game code as an object, except for the key events to get the letter guessed. This will be a challenge if you haven't coded with JavaScript before, but we encourage anyone already familiar with the language to try this out.
Save your whole game and its properties in an object.
Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
Don't forget to place your global variables and functions above your object.

Remember: global variables, then objects, then calls.

Definitely talk with a TA or your instructor if you get tripped up during this challenge.

** A Few Tips **


*** IMPORTANT: Whichever assignment you choose, code your game one piece at a time! Code all of your apps one piece at a time. Always code one piece at a time!**


Pseudocode your program and break the app down into tiny, manageable fragments. This will make the coding process much less frustrating and a veritable Mach number faster. Otherwise, you'll be chipping away at a giant chunk of abstraction for way too many hours.

The ability to solve a large problem by treating it as a set of smaller ones is the hallmark of a strong programmer. Best start adapting this into your development routine now, to better prepare for your more complex future projects.
Remember:

*** Split the whole program into many distinct, pseudocoded problems.
Focus on one of the smaller problems and solve it.
Only when you solve one problem should you then move onto your next problem.


When you encounter bugs (and we all do), console.log will become your best friend. Regularly check your console to make sure your app is spitting out the right values.

As a more advanced—but more powerful—alternative, feel free to experiment with the Chrome DevTools Debugger.



Try your best to deliver a 'working/playable game' by the end of the deadline. If you're not making progress with Word Guess, switch gears to the Psychic game. Contact your TA/Instructor if you're not making progress after 2 hours. We're here to help!


Substance over style! Submitting a working game matters more that making a broken app that at least looks pretty. We're focusing on game mechanics, not just on the look and feel of your app.


That said, coding a functional app that also looks pretty would be impressive.


Always commit your work and back it up with GitHub pushes. You don't want to lose hours of your work because you didn't push it to GitHub every half hour or so.


Commit often.


Turn in anything you have! Even if you don't finish, we still want to see what you were able to accomplish in the time we gave you. This will help us know what concepts we could help you with, as well as what topics we should focus on in the coming lectures.



Reminder: Submission on BCS

Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!



Minimum Requirements
Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Adding a README.md as well as adding this homework to your portfolio are required as well and more information can be found below.


Create a README.md
Add a README.md to your repository describing the project. Here are some resources for creating your README.md. Here are some resources to help you along the way:

About READMEs
Mastering Markdown

Add To Your Portfolio
After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.
