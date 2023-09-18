let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["red","yellow","green","purple"];

let h2 = document.querySelector("h2");

 document.addEventListener("keypress", function(){
    if (started==false){
        console.log("game is started");
        started = true;
        levelup();
    }
 })

 function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

 }
 function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);

 }

 function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    //random btn choose 
    let randIdx = Math.floor((Math.random()*3)+1);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    
    // console.log(randIdx); //random no . genarate by machine[0,1,2,3]
    // console.log(randColor);// random no color is selected 
    // console.log(randBtn);//
   
     gameSeq.push(randColor);
     console.log(gameSeq);
    //then flash the random button
    btnFlash(randBtn);


 }

 function checkAns(idx){
     // console.log(`curren level :  ${level}`);
    // let idx = level -1;
    if(gameSeq[idx] === userSeq[idx]){
        // console.log("Same value");
        if(gameSeq.length === userSeq.length){
            setTimeout(levelup , 1000);
        }
    }else{
        h2.innerHTML = `GAME OVER! <br> your score was <b>${level}</b> . press any key to start`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white"
        },250);
        wrongSound();
        reset();
    }
 }


 function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);

     userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
 }
 let allBtns = document.querySelectorAll(".btn");
 for(btn of allBtns){
    btn.addEventListener("click", btnPress);
 }

 function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
 }

 //WRONG Sound
 function wrongSound(){
    let audio = new Audio("wrong.mp3");
    audio.play();
 }


//All button sound
 let redSound = document.getElementById("red");
 function playRed(){
    let audio = new Audio("red.mp3");
    audio.play();
 }
 redSound.addEventListener("click", playRed);

 let purpleSound = document.getElementById("purple");
 function playPurple(){
    let audio = new Audio("blue.mp3");
    audio.play();
 }
 purpleSound.addEventListener("click", playPurple);

 let greenSound = document.getElementById("green");
 function playGreen(){
    let audio = new Audio("green.mp3");
    audio.play();
 }
 greenSound.addEventListener("click", playGreen);

 let yellowSound = document.getElementById("yellow");
 function playYellow(){
    let audio = new Audio("yellow.mp3");
    audio.play();
 }
 yellowSound.addEventListener("click", playYellow);
