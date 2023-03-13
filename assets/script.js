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


