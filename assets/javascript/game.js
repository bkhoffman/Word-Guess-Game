//variables
var movieTitles = ["avatar", "titanic", "avengers", "rocky", "inception"]
var alphabet = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
var wins = 0;
var guesses = 10; //Total guesses allowed
var guessesRemaining = 0; //number of guesses left
var guessedLetters = []; //holds guessed letters-add guessed letters to this array
var movieNameArr = []; //holds "_", add guessed letters to this array if correct
var resetNew = false;

function setup(){
  //picks random movie title
  var movieName = movieTitles[Math.floor(Math.random() * movieTitles.length)];
  //blank movie array to hold "_" places
  movieNameArr = [];
  //iterates through "picked" movie title and fill in with "_"
  for (var i = 0; i < movieTitles.length; i++) {
    movieNameArr[i] = "_";
  }

  //reset vars
  guessesRemaining = guesses;
  guessedLetters = [];

  //shows vars/arrays on html by id name
  document.getElementById("guessedLetters").innerText = guessedLetters;
}



if(movieTitles === "avatar"){
  guesses = 10;
}
if(movieTitles === "titanic"){
  guesses = 12;
}
if(movieTitles === "avengers"){
  guesses = 13;
}
if(movieTitles === "rocky"){
  guesses = 9;
}
if(movieTitles === "inception"){
  guesses = 14;
}

//Function to run when key is pressed  (FOR AVATAR MOVIE)
document.onkeyup = function(event){
  var userGuess = event.key.toLocaleLowerCase();
  console.log(userGuess); //remove---reference only
    if(userGuess )
  // Display the user guesses, add letters where appropriate and reduce guess count
  numberGuess.textContent = "guesses remaining: " + guesses;
  
};