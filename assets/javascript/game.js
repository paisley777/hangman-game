
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

  /*create an array containing all the letter divs that have the underscore class*/
  var letterDivArray = $('.js-underscore');

  /*create a variable to grab a single letter div*/
  var singleLetterDiv;

  /*Obtain user's letter guess*/
  var userGuess;
  document.onkeyup = function(event) {
    userGuess = event.key;
    console.log(userGuess);
    checkLetter();
  }

  /*check if user's letter choice is in the letter array, and return an array of position matches*/
 
  function checkLetter(){
    var matchedLetters = [];
    for (i = 0; i < letterArray.length; i++) {
      if (letterArray[i] === userGuess) {
        matchedLetters.push(i);
      }
    }

    /*if there are letter matches, display the letter;
    if there are not, run function to record guessed letter*/

    if (matchedLetters.length > 0) {
      for (i = 0; i < matchedLetters.length; i++) {
        singleLetterDiv = letterDivArray[matchedLetters[i]];
        singleLetterDiv.innerText = letterArray[matchedLetters[i]];
        singleLetterDiv.classList.remove('js-underscore');
        singleLetterDiv.classList.add('visible-letter');
      }
    } else {
      recordGuessedLetter();
    }
  };

  /*create a function that records the guessed letter;
    need to add code to prevent duplicates from being recorded*/
  function recordGuessedLetter() {
    guessedLetterArray.push(userGuess);
    $('.guesses').html('Letters guessed:&nbsp&nbsp' + guessedLetterArray.join(' '));
    attempts--;
    $('.attempts').html('Guesses remaining:&nbsp&nbsp' + attempts);
  };

  /*If the variable 'attempts' is greater than 0 and
    all singleLetterDivs within letterDivArray have the class 'visible-letter', then
    increase winCount by 1 and display a new word
    Tried code below, but isn't returning the correct visible count 

    var visibleCount = $('visible-letter').length;
    console.log(visibleCount);
    if ((attempts > 0) && (visibleCount = letterArray.length)) {
      winCount++;
      $('.wins').html('Number of wins:&nbsp&nbsp' + winCount);
    };*/

  /*When attempts reach 0, display a new word*/
 
});




