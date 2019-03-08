//variables
var movieTitles = ["AVATAR", "TITANIC", "AVENGERS", "ROCKY", "INCEPTION", "INTERSTELLAR", "CASABLANCA", "ALIEN", "SCARFACE", "GLADIATOR"]
var wins = 0;
var movieName; //hold the randomly choosen movie title
var movieNameArr = []; //holds "_", add guessed letters to this array if correct
var guesses; //Total guesses allowed
var guessesRemaining; //number of guesses left
var guessedLetters = []; //holds guessed letters-add guessed letters to this array


function setup() {
  //picks random movie title
  movieName = movieTitles[Math.floor(Math.random() * movieTitles.length)];
  console.log(movieName);
  guesses = movieName.length + 2
  //empty movie array. Will hold "_" places
  movieNameArr = [];
  //iterates through "picked" movie title and fill in with "_"
  for (var i = 0; i < movieName.length; i++) {
    movieNameArr[i] = "_";
  }
  //reset array
  guessedLetters = [];
}

//Function to run when key is pressed
document.onkeyup = function (event) {
  var userGuess = event.key.toLocaleUpperCase();
  console.log(userGuess);
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    console.log('user guess', userGuess);
    for (var i = 0; i < movieName.length; i++) {
      if (userGuess === movieName[i]) {
        movieNameArr[i] = userGuess;
        console.log(movieNameArr);
      }
    }
    if (guessedLetters.indexOf(userGuess) === -1) {
      guessedLetters.push(userGuess);
        if(movieName.indexOf(userGuess) === -1){
          guesses--;}
      console.log("new guess", movieNameArr)
      winLose();
    } else {
      alert("You already used that letter");
      console.log('letter not used');
    }
  }
  //shows vars/arrays on html by id name
  document.getElementById("guessedLetters").innerText = guessedLetters;
  document.getElementById("numberGuess").innerText = guesses;
  document.getElementById("numberOfWins").innerText = wins;
  document.getElementById("movieName").innerText = movieNameArr.join(' ');
}

function winLose() {
  if (movieNameArr.indexOf("_") === -1) {
    wins++
    confirm("You Win! " + "Would you like to play again?")
    setup();
  }
  else if (guesses === 0) {
      alert("You Lose")
      confirm("Would you like to play again?")
      setup();
    }
};
setup();
