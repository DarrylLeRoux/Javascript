'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.score');

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// Get random Number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;

const scoreEl = document.querySelector('.score');

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no number input by user
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number!';
    // When the user wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When the number is higher than the correct number
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      scoreEl.textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lost the Game!';
      scoreEl.textContent = 0;
    }

    // When the number is lower than the correct number
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--;
      scoreEl.textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lost the Game!';
      scoreEl.textContent = 0;
    }
  }
});
