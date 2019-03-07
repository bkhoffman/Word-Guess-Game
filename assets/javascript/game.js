//variables
var movieTitles = ["avatar", "titanic", "avengers", "rocky", "inception"]
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var movieName; //hold the randomly choosen movie title
var movieNameArr = []; //holds "_", add guessed letters to this array if correct
var guesses; //Total guesses allowed
var guessesRemaining; //number of guesses left
var guessedLetters = []; //holds guessed letters-add guessed letters to this array
var resetNew = false;  //boolean to determine when game needs to reset=true


function setup(){
  //picks random movie title
  var movieName = movieTitles[Math.floor(Math.random() * movieTitles.length)];
  console.log(movieName);
    if(movieName === "avatar"){
      guesses = 10;
    }
    if(movieName === "titanic"){
      guesses = 12;
    }
    if(movieName === "avengers"){
      guesses = 13;
    }
    if(movieName === "rocky"){
      guesses = 9;
    }
    if(movieName === "inception"){
      guesses = 14;
    }
  //empty movie array. Will hold "_" places
  movieNameArr = [];
  //iterates through "picked" movie title and fill in with "_"
  for (var i = 0; i < movieName.length; i++) {
    movieNameArr[i] = "_";
  }

  //reset vars and empty array
  guessesRemaining = guesses;
  guessedLetters = [];
}
setup();



//Function to run when key is pressed
document.onkeyup = function(event){
  var userGuess = event.key.toLocaleLowerCase();
  console.log(userGuess);
  if (event.keyCode >= 65 && event.keyCode <= 90){
    for (var i = 0; i < movieName.length; i++) {
      if (userGuess === movieName[i]) {
        //movieNameArr[i] = userGuess;
        console.log("correct");
      }
    }
  }
    
  // if(guessedLetters.indexOf(userGuess) === -1){
  //   guessedLetters.push(userGuess);
  //   guesses--;
  //   console.log(movieNameArr);
  //   }else {
  //     for (var i = 0; i < movieName.length; i++) {
  //       if (userGuess === movieName[i]) {
  //         movieNameArr[i] = userGuess;
  //         console.log(movieNameArr);
  //       }
  //   }
  // } 
  // if(movieNameArr.indexOf(userGuess) !== -1){}

  //shows vars/arrays on html by id name
  document.getElementById("guessedLetters").innerText = guessedLetters;
  document.getElementById("numberGuess").innerText = guesses;
  document.getElementById("numberOfWins").innerText = wins;
  document.getElementById("movieName").innerText = movieNameArr.join(' ');
}
  
  // We can also do this with a function. zoo animal example
  // function guessChecker(letterGuess) {
  //   for (var j = 0; j < letterGuess.length; j++) {
  //     console.log(letterGuess[j]);
  //   }
  // }
  // guessChecker(userGuess); //passing event key into guessChecker function instead of assigning to var and then passing to guessChecker function
  