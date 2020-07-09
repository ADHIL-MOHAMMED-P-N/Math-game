
const point = document.querySelector('.point');
const question = document.querySelector('.question');
const go = document.querySelector('.go');
const submit = document.querySelector('.submit');
const input = document.querySelector('.input');
const numbers = ['0','1','2','3','4','5','6','7','8','9']
const signs = ['+','-'];
const buttons = document.querySelectorAll('.button');//keyboard
const clear = document.querySelector('.clear');
window.addEventListener('DOMContentLoaded',function(){
    point.textContent = score;
    question.textContent = "Press Go to Play";
});

var score = 0;
var que = "";
var randomNumber;


go.addEventListener('click',start);
function start(){
 go.style.display = 'none';
 input.style.display = 'block';
 submit.style.display = 'inline-block';
 queGen();
 question.textContent = que;
}
//Question Generator
function queGen(){
 var setOne ="";
 var setTwo ="";
 var sign ="";
 for(let i=0;i<2;i++){
    randomNumber = Math.floor(Math.random() * numbers.length);
    setOne += numbers[randomNumber];
 }
 for(let i=0;i<2;i++){
    randomNumber = Math.floor(Math.random() * numbers.length);
    setTwo += numbers[randomNumber];
 }
 sign = signs[Math.floor(Math.random() * signs.length)]
 que = setOne + sign + setTwo;
 return que;
 
}

submit.addEventListener('click',function(){
    var actualAnwer = eval(que);
    var usersAnswer = input.value;
    if(actualAnwer == usersAnswer){
        score++;
    }else{
        score--;
    }
    point.textContent = score;
    queGen();
    question.textContent = que;
    input.value ="";
});

buttons.forEach(function(val){
    val.addEventListener('click',function(){
        input.value += val.value;
    })
})
clear.addEventListener('click',function(){
    input.value ="";
})

