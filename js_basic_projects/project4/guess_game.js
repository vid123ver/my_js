//step 1: genrate random number
let randomNumber = parseInt(Math.random() * 100 + 1);//add 1 to avoid 0
 
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');//for message
const startOver = document.querySelector('.result')

// const p = document.createElement('p');//this is for creating paragraph tag
const newGameBtn = document.createElement("button");
newGameBtn.setAttribute("id", "newgame");
newGameBtn.textContent = "Start New Game";
//these below variable are in globaly declared
let prevGuess = [];
let numGuess = 1;
let playGame = true;


if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuesses(guess);
    });
}
function validateGuesses(guess) {
    //validate values that values are from 1 to 100 and values are actually exists or not
    if (isNaN(guess)) {
        alert('please enter a valid number');
    }
    else if (guess < 1) {
        alert('please enter number greater number 1');        
    }
    else if (guess > 100) {
        alert('please enter number less then 100')
    }
    else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
} 
function checkGuess(guess) {
    //check values are matching or not!
    if (guess === randomNumber) {
        displayMessage(`you guessed it right`);
        endGame();
    }
    else if (guess > randomNumber) {
        displayMessage(`you guessed large number`);  
    } else if (guess < randomNumber) {
        displayMessage(`you guessed small number`);  
    }

}

function displayGuess(guess){
    //update guesses and refreshes input field
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess} `
}

function displayMessage(message) {
    //print messages
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    // this is for paragraph woroking as button not particu;ar button
    // p.classList.add('button');
    // p.innerHTML = `<h2 id = "newgame"> Start new Game </h2>`;
    // startOver.appendChild(p);
    newGameBtn.classList.add("button");
    startOver.appendChild(newGameBtn);
    playGame = false;
    newGame();
}

function newGame() {
    const newgame = document.querySelector('#newgame');
    newgame.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = ''; 
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}
