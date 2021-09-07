const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];


const placeholder = function (word) {
  const placeholderLetters = [];
  for (const letter of word) {
    console.log(letter);
    placeholderLetters.push("●");
  }
  wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessLetterButton.addEventListener("click", function (e) {
  e.preventDefault();
  message.innerText = "";
  const guess = letterInput.value;
  const goodGuess = playerGuess(guess);
  if (goodGuess) {
    makeGuess(guess);
  }
  letterInput.value = "";
});

const playerGuess = function (input) {
  const acceptedLetter = /[a-zA-Z]/;
  if (input.length === 0) {
    //If input it empty, then
    message.innerText = "Please enter a letter.";
  } else if (input.length > 1) {
    //If input is more than one letter:
    message.innerText = "Please enter only one letter.";
  } else if (!input.match(acceptedLetter)) {
    //If they answer anything other than a letter:
    message.innerText = "Only letters will count.";
  } else {
    //They respond with a single letter
    return input;
  }
};

const makeGuess = function (guess) {
  guess = guess.toUpperCase();
  if (guessedLetters.includes(guess)) {
    message.innerText = "Try again, that was a repetitive mistake.";
  } else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
  }
}
