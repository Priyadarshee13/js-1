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

## Project 4

```javascript
let randomno= parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');

const remaining = document.querySelector('.lastResult');
const LowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess =[];
let numGuess=1;

let playGame=true;

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess=parseInt(userInput.value);
    validateGuess(guess);
  })
}

function validateGuess(guess){
  if (isNaN(guess)){
alert('Enter a valid no.')
  }
 else if(guess<1){
   alert('Enter a no. greater than 0')
 }
 else if(guess>100){
   alert('Enter a no. less than 100')
 }
 else{
   prevGuess.push(guess);
 }
 if(numGuess === 11 ){
   displayGuess();
   displaymessage(`Game over. Random no. was ${randomno}`);
   endgame();
 }
 else{
   displayGuess(guess);
   checkGuess(guess);
 }
 }

function checkGuess(guess){
  if(guess === randomno){
    displaymessage('You guessed it right');
    endgame();
  
  }
  else if(guess < randomno){
    displaymessage('Think bigger bro');
  }
  else if(guess > randomno){
    displaymessage('Not that big!');
  }
}
function displaymessage(message) {
  LowOrHigh.innerHTML=`<h2>${message}</h2>`;
}

function displayGuess(guess){
  userInput.value='';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML=`${11-numGuess} `;
}

function endgame(){
  userInput.value='';
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML=`<h2 id="newgame">start new game</h2>`;
  startOver.appendChild(p);
  playGame=false;
  newgame();

}

function newgame(){
  const newgamebutton = document.querySelector('#newgame');
  newgamebutton.addEventListener('click',function(e){
    randomno=parseInt(Math.random()*100+1);
    prevGuess=[];
    numGuess=1;
    guessSlot.innerHTML='';
    remaining.innerHTML=`${11-numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame=true


  });

}
```
## Project 6

```javascript
const randomno=function(){
  const hex= "123456789ABCDEF";
  let color='#';
  for(i=0;i<6;i++){
    color += hex[Math.floor(Math.random()*16)];

  }
  return color;

}
let chngcolor;
function bgcolor()
{
  document.body.style.backgroundColor=randomno();
}

document.querySelector('#start').addEventListener('click',function(){
  if(!chngcolor){
  chngcolor=setInterval(bgcolor,1000);}
});
document.querySelector('#stop').addEventListener('click',function(){
 clearInterval(chngcolor);
 chngcolor=null
});

```
