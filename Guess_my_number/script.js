'use strict';

let secretAnswer =  Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(secretAnswer);

const displayMessage = function (msg) {
    document.querySelector('.message').textContent = msg ;
}

document.querySelector('.check').addEventListener('click',function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, secretAnswer);

    if (!guess) {
        displayMessage('No answer!!');    
    } else if (guess === secretAnswer) {
        console.log("equal");
        displayMessage('Correct Answer!!');
        document.querySelector('.number').textContent = guess;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (secretAnswer !== guess) {
        console.log("not equal");
        if (score > 1) {
            displayMessage(secretAnswer > guess ? 'Too Low \u2193' : 'Too High \u2191');
            score--;
        } else  {
            displayMessage('Sorry you lost the game!');
            score = 0;
        }
    } 
    document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = "";
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    secretAnswer =  Math.trunc(Math.random() * 20) + 1;
});
