//Get Elements
const startScreen = document.querySelector("#start");
const startBtn = document.querySelector("#start-btn");
const infoBox = document.querySelector(".info-box");
const exitBtn = document.querySelector(".quit");
const continueBtn = document.querySelector(".restart");
const quizBox = document.querySelector(".quiz-box");
const endBox = document.querySelector("#quiz-end");
const submitBtn = document.querySelector("#save-score");
const initialsText = document.querySelector("#initials");
var existing = localStorage.getItem('results');
existing = existing ? existing.split(',') : [];
var queCount = 0;
var counter = 60;
var score = 0;


//If Continue Button Clicked
continueBtn.onclick = ()=>{
    infoBox.classList.add("hide");
    startScreen.classList.remove("hide");
};

//If Start Button Clicked
startBtn.onclick = () => {
    function countdown(){
        counter--;
            if (counter === 0){
                clearInterval(startCountdown)
                quizEnd()
            };
    let timeRem = document.querySelector("#time-rem");
    let timeTag = "<span>Time Left: "+ counter +"</span>"
    timeRem.innerHTML = timeTag;
    };
    var startCountdown = setInterval(countdown, 1000);
    startScreen.classList.add("hide");
    quizBox.classList.remove("hide");
    showQuestions(queCount)
};