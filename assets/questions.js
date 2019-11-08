//Global variables

var questionIndex = 0;
var score = "";
var highScores = [];
var timeLeft = 60;

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



var QuizGAme = function() {
// Game variables here
console.log("Game has started")

//===================Landing Page Section=============================
head = document.getElementById("h1");
var headLevel = document.createTextNode("Coding Quiz Challenge");
head.appendChild(headLevel);

var paragraph = document.getElementById("p");
var text = document.createTextNode("Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your scoretime by ten seconds!");
paragraph.appendChild(text);

$(".init-page").append($("<button>").text("Start Quiz").addClass("button").on("click", start))
  
//===================Quiz Game Section================================

function start() {
$(".init-page").empty();//returns content to empty state
console.log("start screen has loaded")
  askQuestions();
  timeLeft = 60;
  //Timer countdown script, to start counting down after 
  countDown = setInterval(function(){

  document.getElementById("timer").innerHTML = "Time " + timeLeft + " seconds";
  timeLeft -= 1;

    if (timeLeft <= 0){
    clearInterval(countDown);
    document.getElementById("timer").innerHTML = "Time Out!";
    }
    if (timeLeft == 0){
      changeScore() //Time runs out, go to changeScore page
    }
    }, 1000);
}


    // Ask the questions

function askQuestions(){
for (i = 0; i <= questions[questionIndex].choices.length -1; i++) {  
  
    document.querySelector("#title").innerHTML = questions[questionIndex].title;//presents the question to the user   
    console.log(questions[questionIndex].choices[i],questions[questionIndex].answer) 
  $(".possible-answers").append($(`<button id=${i}>`).text(questions[questionIndex].choices[i])
    .on("click", function (event){//Sean helped by hard pressing the "i" value into the code.
console.log(questions)
console.log(event.target.id)
      let currentQuestion = questions[questionIndex].choices[event.target.id]
      let currentAnswer = questions[questionIndex].answer
      console.log(currentQuestion, currentAnswer)
     
    if (currentAnswer == currentQuestion){
      $("#prompt").append("<hr>").append($("<p>").text("Right!!!"))
    }  
    if (currentAnswer != currentQuestion){
      timeLeft = timeLeft - 10;
      $("#prompt").append("<hr>").append($("<p>").text("Wrong!!!")) 
    }
    //$(".start-page").empty();//returns content to empty state
    
    }))
} 

//questions[questionIndex] = questions[questionIndex+1];
//console.log(questions[questionIndex])
}                        
    }

/*function getAnswer(userAnswer,answer) {
console.log(userAnswer,answer);
console.log("top of get answer")
    if (userAnswer != answer){
      console.log(userAnswer)
      console.log(answer)
      timeLeft = timeLeft - 10;
      $("#prompt").append("<hr>").append($("<p>").text("Wrong!!!"))  
                              
    }   
    
    if (userAnswer){
      $("#prompt").append("<hr>").append($("<p>").text("Right!!!"))

    }   
    //$(".start-page").empty();
    //askQuestions(questions[questionIndex+1])
    //questions[questionIndex] = questions[questionIndex+1];
}*/




//=================Change Score Section===============================

/*function changeScore() {
$(".start-page").empty();
    $(".changeScore-page").append("<h2>").text("Enter your Initials")
      .append("<form>").addClass("initials")
        .append("<input>")
        .append("<button>").attr("submit").on("click", addScore())
    console.log("changeScore screen has loaded")
    // Log initals 

    function addScore() {

    
    score = document.getElementById("timer").innerHTML;// Copies the time left to become the score
    //let name  = // Get initials, add score, push to highScore array as a string
    }


}

   /* if (questionIndex <= questions[questionIndex].choices.length) {//Keep asking questions until there are no more
      console.log(questionIndex, questions[questionIndex].choices.length)
    askQuestions(questions[i + 1]) 
    } 
    else {
    changeScore()
    }*/

//askQuestions(questions +1)
//===================================================================
QuizGAme()
console.log("document has been loaded");
/*
//============Leader Board Section======================================
function leaderBoard(){

  for (i = 0; i < highScores.length; i++) {
    $("#highscores").append("<p>").text(highScores[i])
  }
}
*/

 