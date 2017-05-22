
$(document).ready(function() {

  /*define list of words*/
  var wordArray = ['springfield', 'cowabunga', 'smithers', 'donuts', 'flanders', 'krusty',
  'wiggum', 'poochie', 'nuclear', 'saxophone', 'maggie', 'groening'];

  /*choose a current word*/
  var currentWord;
  function selectWord() {
    currentWord = wordArray[Math.floor(Math.random() * wordArray.length)];
  };
  selectWord();

  /*split the current word into an array of letters*/
  var letterArray = currentWord.split('');

  /*create guessed letter array*/
  var guessedLetterArray = [];

  /*create variable for maximum number of wrong letter guesses*/
  var attempts = 7;
  $('.attempts').html('Attempts remaining:&nbsp&nbsp' + attempts);

  /*create variable to count up the number of wins*/
  var winCount = 0;
  $('.wins').html('Number of wins:&nbsp&nbsp' + winCount);

  /*create placeholder divs for each letter in current word*/
  
  function displayWord(){
    var currentWordDiv = $('.word-div');
    for (var i = 0; i < letterArray.length; i++) {
      var letterDiv = $('<div>');
      currentWordDiv.append(letterDiv);
      letterDiv.html('');
      letterDiv.addClass('js-underscore');
    }  
  };

  displayWord();

  /*create an array containing all the letter divs that have the underscore class*/
  var letterDivArray = $('.js-underscore');

  /*create a variable to grab a single letter div*/
  var singleLetterDiv;

  /*Obtain user's letter guess*/
  var userGuess;
  document.onkeyup = function(event) {
    userGuess = event.key;
    console.log(userGuess);
    if (attempts > 0) {
      checkLetter();
    }
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
        increaseWins();
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
    resetWord();
  };

  /*If the variable 'attempts' is greater than 0 and
    all singleLetterDivs within letterDivArray have the class 'visible-letter', then
    increase winCount by 1 and display a new word*/

  var underscoreCount;
  function increaseWins() {
    underscoreCount = $('.js-underscore').length;
    if ((attempts > 0) && (underscoreCount === 0)) {
      winCount++;
      $('.wins').html('Number of wins:&nbsp&nbsp' + winCount);
      resetWord();
    }
  };

  /*create a function to reset the current word*/
  function resetWord () {
    if ((attempts === 0) || ((attempts > 0) && (underscoreCount === 0))) {
      guessedLetterArray = [];
      attempts = 7;
      selectWord();
      /*displayWord function is appending another array, not replacing the array
      displayWord();*/
    }
  };
});




