
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
  }
  
});




