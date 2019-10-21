//Global variables
var timer = 60;

//A way presented in class
var QuizGAme = function() {
// Game variables here



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
    
    var head = document.getElementById("h1");
    var headLevel = document.createTextNode("Coding Quiz Challenge");

    var paragraph = document.getElementById("p");
    var text = document.createTextNode("Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your scoretime by ten seconds!");

    paragraph.appendChild(text);
    head.appendChild(headLevel);

    var startBtn = document.createElement("BUTTON"); // Create a button for the user to start the quiz || starts the timer
    startBtn.innerHTML = "Start Quiz";
    document.body.appendChild(startBtn);

    startBtn.onclick = start()
  }
  function start() {
    //Start the timer
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


 