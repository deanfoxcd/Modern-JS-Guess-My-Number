'use strict';

const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const message = document.querySelector('.message');
const guessNum = document.querySelector('.guess');
const number = document.querySelector('.number');
const checkBtn = document.querySelector('.check');
const restart = document.querySelector('.again');
const range = document.querySelector('.between');

// Fundtion to geenrate a random number
const generateNum = function () {
  const num = Math.floor(Math.random() * 20 + 1);
  return num;
};

let randomNum = generateNum();
let currScore = Number(score.textContent);

// Main functionality
checkBtn.addEventListener('click', () => {
  console.log(randomNum);
  const guess = Number(guessNum.value);

  if (!guess) {
    message.textContent = 'Please enter a valid number';

    // When a player guesses right
  } else if (guess === randomNum) {
    //Double equals sign so I don't have to convert to a number each time
    message.textContent = 'Congrats you guessed the number!! 🎉';
    if (Number(highScore.textContent) < currScore) {
      highScore.textContent = currScore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    number.textContent = randomNum;
    guessNum.value = '';
  } else if (guess !== randomNum) {
    if (currScore > 1) {
      message.textContent = guess > randomNum ? 'Too high' : 'Too low';
      guessNum.value = '';
      currScore--;
      score.textContent = currScore;
    } else {
      message.textContent = 'You lose';
      currScore = 0;
      score.textContent = currScore;
    }
  }
});

// To restart the game
restart.addEventListener('click', () => {
  number.textContent = '?';
  message.textContent = 'Start Guessing...';
  score.textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  currScore = Number(score.textContent);
  guessNum.value = '';

  randomNum = generateNum();
});
