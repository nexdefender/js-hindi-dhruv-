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

project 2

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

