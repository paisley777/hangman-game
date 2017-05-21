
$(document).ready(function() {

  /*define list of words*/
  var wordArray = ['springfield', 'cowabunga', 'smithers', 'donuts', 'flanders', 'krusty',
  'wiggum', 'poochie', 'nuclear', 'saxophone', 'maggie', 'groening'];

  /*choose a current word*/
  var currentWord = wordArray[Math.floor(Math.random() * wordArray.length)];

  /*split the current word into an array of letters*/
  var letterArray = currentWord.split('');

  /*create guessed letter array*/
  var guessedLetterArray = [];

  /*create variable for maximum number of wrong letter guesses*/
  var attempts = 7;
  $('.attempts').html('Attempts remaining:&nbsp&nbsp' + attempts);

  /*create variable to count up the number of wins*/
  var winCount;

  /*create placeholder divs for each letter in current word*/
  var currentWordDiv = $('.word-div');
  for (var i = 0; i < letterArray.length; i++) {
    var letterDiv = $('<div>');
    currentWordDiv.append(letterDiv);
    letterDiv.html('');
    letterDiv.addClass('js-underscore');
  }

  /*Obtain user's letter guess*/
  var userGuess;
  document.onkeyup = function(event) {
    userGuess = event.key;
    console.log(userGuess);
    checkLetter();
  }

  /*I believe the code works up to here. In subsequent code, I was trying to test whether
  the user's guess matched a letter in the randomly selected word. If so, I wanted to change
  the CSS class of the corresponding letter div so that the letter would be displayed.*/

  /*check if user guess is equal to letter(s) in letterArray;
    if yes, run function to display letter
    if no, run function to record guessed letter*/  
  function checkLetter(userGuess){
    var matchedLetters = [];
    for (i = 0; i < letterArray.length; i++) {
      if (userGuess === letterArray[i]) {
        matchedLetters.push(i);
        console.log(matchedLetters); // this line is not returning intended values
        displayLetter();
      }
      if (matchedLetters.length = 0) {
        recordGuessedLetter();
      }
    }
  };

  /*create an array containing all the letter divs that have the underscore class*/
  var letterDivArray = $('.js-underscore');

  /*create a variable to grab a single letter div*/
  var singleLetterDiv;

  /*create a function that changes the CSS class of the letter div containing the matched letter*/
  function displayLetter() {
    singleLetterDiv = letterDivArray(letterArray[i]);
    singleLetterDiv.innerText = letterArray[i];
    singleLetterDiv.removeClass('js-underscore').addClass('visible-letter');
  };

  /*create a function that records the guessed letter*/
  function recordGuessedLetter() {
    guessedLetterArray.push(userGuess);
    $('.guesses').html('Letters guessed:&nbsp&nbsp' + userGuess);
    attempts--;
    $('.attempts').html('Guesses remaining:&nbsp&nbsp' + attempts);
  };
 
});




