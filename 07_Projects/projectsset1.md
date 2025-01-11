# Projects related to DOM

## projec link
[click here]

# Soltion Code

## project 1

```javascript
console.log("dhruv")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button) {
  console.log(button);
  button.addEventListener('click', function(e) {
    console.log(e);
    console.log(e.target);
    if(e.target.id==='grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id==='red'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id==='blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id==='orange'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id==='purple'){
      body.style.backgroundColor = e.target.id
    }
  });
});

```

## project 2

```javascript
const form = document.querySelector('form');

//this usecase will give you empty value 
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e) {
   e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results= document.querySelector('#results')

  if(height === ''|| height < 0 || isNaN(height)){
    results.innerHTML = `Please enter a valid height ${height}`
  }
 else if(weight === ''|| weight < 0 || isNaN(weight)){
        results.innerHTML = `Please enter a valid weight ${weight}`
    }

    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span>Your BMI is ${bmi}</span`
        if(bmi <= 18.6){
            results.innerHTML += `<br>You are underweight`
          }
          else if(bmi >= 18.6 && bmi<= 24.9){
            results.innerHTML += `<br>You are normal`
          }
          else if(bmi >= 25){
            results.innerHTML += `<br>You are overweight`
          }
          else{
            results.innerHTML = `Please enter a valid height and weight`
          }
    }
  
}) 

```
## project 3

```javascript
clock project self
```

## project 4

``` javascript
    // console.log(parseInt(Math.random()*100+1));

let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaning = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')  
const startOver = document.querySelector('.resultParas')  

const p = document.createElement('p')

let previousGuesses = []
let numGuesses = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
     e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess); // it foe checking in future also
    
    validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess < 1){
        alert('Please enter a number greater than 1!')
    }
    else if (guess > 100){
        alert('Please enter a number less than 100!')
    }
    else{
        previousGuesses.push(guess)
        if(numGuesses === 10){
            displayGuess(guess)
            displayMessage(`Game Over! Random Number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
    }
}
}

function checkGuess(guess){
     if(guess === randomNumber){
         displayMessage(`Congratulations! You guessed the number in ${numGuesses-1} chance!`)
         endGame()
     }
     else if (guess < randomNumber){
         displayMessage('Wrong! Guess the higher number than this!')
     }
     else if (guess > randomNumber){
         displayMessage('Wrong! Guess the lower number than this!')
     }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess};  `
    numGuesses++
    remaning.innerHTML = `${11 - numGuesses}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
     userInput.value = ''
     userInput.setAttribute('disabled', '')
     p.classList.add('button')
     p.innerHTML = '<h2><button class="New-Game" id="reset">Play Again</button></h2>'
     startOver.appendChild(p)
     playGame = false
     newGame()
}

function newGame(){
     const newGameButton = document.querySelector('#reset')
     newGameButton.addEventListener('click', function(e){
       randomNumber = parseInt(Math.random()*100+1)
         previousGuesses = []
         numGuesses = 1
         guessSlot.innerHTML = ''
         remaning.innerHTML = `${11 - numGuesses}`
         userInput.removeAttribute('disabled')
         startOver.removeChild(p)

         playGame = true
})
}







```

