# Projects related to DOM

## Project Link
https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js


## Project 1: 

```javascript
console.log('PG')
const buttons =document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button){
  console.log(button);
  button.addEventListener('click',function(e){
console.log(e);
console.log(e.target);
 if(e.target.id === 'grey') {
   body.style.backgroundColor = e.target.id;
 }
 if(e.target.id === 'blue') {
  body.style.backgroundColor = e.target.id;
}
if(e.target.id === 'yellow') {
  body.style.backgroundColor = e.target.id;
}
if(e.target.id === 'white') {
  body.style.backgroundColor = e.target.id;
}
  })
});

```
## Project 2:

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const weightguide = document.querySelector('#weight-guide');

  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please give a valid height`;
    return;
  }

  if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please give a valid weight`;
    return;
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  results.innerHTML = `Your BMI is ${bmi}`;

  if (bmi < 18.6) {
    weightguide.innerHTML = `<span>${bmi} is Underweight!</span>`;
  } 
  else if (bmi >= 18.6 && bmi < 25) {
    weightguide.innerHTML = `<span>${bmi} is Normal :) </span>`;
  } 
  else {
    weightguide.innerHTML = `<span>${bmi} is Overweight!</span>`;
  }
});



```
### Project 3

```javascript
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```
