'use strict';

let secretAnswer =  Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(secretAnswer);

document.querySelector('.check').addEventListener('click',function () {
    const guess = document.querySelector('.guess').value;
    console.log(guess, secretAnswer);

    if (!guess) {
        document.querySelector('.message').textContent = 'No answer!!' ;    
    } else if (secretAnswer < guess) {
        // Too High
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too High \u2191' ;
            score--;
        } else  {
            document.querySelector('.message').textContent = 'Sorry you lost the game!' ;
            score = 0;
        }
        
    } else if (secretAnswer >  guess) {
        // Too low
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low \u2193' ;
            score--;
        } else  {
            document.querySelector('.message').textContent = 'Sorry you lost the game!' ;
            score = 0;
        }
    } else {
        document.querySelector('.message').textContent = 'Correct Answer!  !';
        document.querySelector('.number').textContent = guess;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = "";
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    secretAnswer =  Math.trunc(Math.random() * 20) + 1;
});
