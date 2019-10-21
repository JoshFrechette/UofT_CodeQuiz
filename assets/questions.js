//Global variables
var timer = 60;

//A way presented in class
var QuizGAme = function() {
// Game variables here

// Timer countdown script
var timeleft = 60;
  countDown = setInterval(function(){
  document.getElementById("timer").innerHTML = "Time " + timeleft + " seconds";
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(countDown);
    document.getElementById("timer").innerHTML = "Time Out!"
  }
}, 1000);

// Hint provided from the assignment file
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Which typing convention is widely accepted as the norm in the coding community?",
      choices: ["giraffe bumps", "camel case", "lemur tail", "squirrel sprint"],
      answer: "camel case"
    },
];

  function init() {
      //"init-page content" First content to come up
      var btn = document.createElement("BUTTON");
      start()
  }
  function start() {
      changeScore()
  }
  function changeScore() {
      endGame()
  }
  function endGame() {

  }
  init();
}
QuizGAme();


 