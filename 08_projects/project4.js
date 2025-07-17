let randomNumber= (parseInt(Math.random() * 100 + 1));//random no. 1 to 100
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        
        validateGuess(guess)
    });
}

function validateGuess(guess){
    // check value is betwwwn 1 to 100 or not any alphabet value
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if (guess < 1){
        alert('Please enter a number more than 1')
    } else if (guess > 100){
        alert('Please enter a number less than 100')
    } else {
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over.Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    // check value is eqaul to random no. or not
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`)
        endGame()
    } else if (guess < randomNumber){
        displayMessage(`Number is TOOO low`)
    } else if (guess > randomNumber){
        displayMessage(`Number is TOOO high`)
    }
}

function displayGuess(guess){ // cleanup guess
   // if it is equal then it run
   userInput.value = ''
   guessSlot.innerHTML += `${guess},  `;
   numGuess++;
   remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    // interact with DOM
    lowOrHi.innerHTML = `<h2>${message}</h2>`

}

function endGame(){
    //
    userInput.value = ''
    userInput.setAttribute('disabled', '');
    p.classList.add('buton');
    p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame();
}

function newGame(){
    //
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disblaed')
        startOver.removeChild(p)
        
        playGame = true;
    })
}




