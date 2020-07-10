
const point = document.querySelector('.point');
const question = document.querySelector('.question');
const go = document.querySelector('.go');
const submit = document.querySelector('.submit');
const input = document.querySelector('.input');
const numbers = ['0','1','2','3','4','5','6','7','8','9']
const signs = ['+','-'];
const buttons = document.querySelectorAll('.button');//keyboard
const clear = document.querySelector('.clear');
const reset = document.querySelector('.reset');
const time = document.querySelector('.time');
const scoreCard = document.querySelector('.score-card');
const gameScore = document.querySelector('.score');//score to display
const closebtn = document.querySelector('.closebtn');
var flag = false;//GO button is not clicked
var count = 60;

window.addEventListener('DOMContentLoaded',function(){
    point.textContent = score;
    question.textContent = "Press Go to Play";

});
var score = 0;
var userScore = 0;
var que = "";
var randomNumber;

go.addEventListener('click',start);
function start(){
 flag =true//GO btn is clicked
 go.style.display = 'none';
 input.style.display = 'block';
 submit.style.display = 'inline-block';
 queGen();
 question.textContent = que;
 score = 0;
 point.textContent = score;
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
 if(flag){ 
     return que;
}else
 que = "Please press GO to play";
 return que;
};
//Keyboard
submit.addEventListener('click',function(){
    var actualAnwer = eval(que);
    var usersAnswer = input.value;
    if(flag){
        if(actualAnwer == usersAnswer){
            score++;
        }else{
            score--;
        }
    }else{
        score = 0;
    }
    point.textContent = score;
    queGen();
    question.textContent = que;
    input.value ="";
});

buttons.forEach(function(orange){
    orange.addEventListener('click',function(){
        
        if(flag){
            input.value += orange.textContent;
        }else{
            input.value = ""
        }
    })
});
/*
buttons.forEach(function(val){
    val.addEventListener('click',function(){
        if(flag){ input.value += val.value;
        }else{
            input.value = "";
        }   
    })
})
*/
clear.addEventListener('click',function(){
    input.value ="";
});
//reset
reset.addEventListener('click',resetFunction)
function resetFunction(){  
        flag = false
        userScore =score;
        score = 0;
        point.textContent = score;
        input.value = "";
        question.textContent = "Press Go to Play";
        go.style.display = "block" 
        scoreCard.classList.add('score-card-display');
        gameScore.textContent = userScore;
        count = 60;      
}
//time
setInterval(function(){
    if(flag){
        count--;
        time.textContent = count;
        if(count <= 0){
           time.textContent = "Time is up"
           time.style.color = 'red';
           resetFunction();
        }
    }  
   },1000);
   closebtn.addEventListener('click',function(){
    scoreCard.classList.remove('score-card-display');
    count = 60;
    time.textContent = count;
   });