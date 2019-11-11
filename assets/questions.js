//Global variables

var questionIndex = 0;
var score = "";

var timeLeft = 60;
var questionsAsked = 0;

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



QuizGAme = function() {
// Game variables here

console.log("Game has started");
timeLeft = 60;
//===================Landing Page Section=============================
head = document.getElementById("h1");
var headLevel = document.createTextNode("Coding Quiz Challenge");
head.appendChild(headLevel);

var paragraph = document.getElementById("p");
var text = document.createTextNode("Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your scoretime by ten seconds!");
paragraph.appendChild(text);

$(".init-page").append($("<button>").text("Start Quiz").addClass("button").on("click", start))
}
//===================Quiz Game Section================================

function start() {
console.log("Game has started")
$(".init-page").empty();//returns content to empty state
console.log("start screen has loaded")
  firstQuestion();
  
  //Timer countdown script, to start counting down after 
  countDown = setInterval(function(){
  document.getElementById("timer").innerHTML = timeLeft;
  timeLeft -= 1;

    if (timeLeft <= 0){
    clearInterval(countDown);
    document.getElementById("timer").innerHTML = "00";
    changeScore()
    }
    /*if (timeLeft == 0){
      changeScore() //Time runs out, go to changeScore page
    }*/
    }, 1000);
}

// Ask the first question
function firstQuestion(){
  let currentItem = questions[questionIndex];
  for (i = 0; i <= currentItem.choices.length -1; i++) {  
      document.querySelector("#title").innerHTML = currentItem.title;//presents the question to the user   
      console.log(currentItem.choices[i],currentItem.answer) 
      questionNumber = questions.indexOf(questions[questionIndex].choices[i])
    $(".possible-answers").append($(`<button id=${i}>`).addClass("button").text(questions[questionIndex].choices[i])//.append($("<div>").addClass("possible-answers").
      .on("click", function (event){//Sean helped by hard pressing the "i" value into the code.
        console.log(questions)
        console.log(event.target.id)
        let currentQuestion = questions[questionIndex].choices[event.target.id]
        let currentAnswer = questions[questionIndex].answer
        //console.log(currentQuestion, currentAnswer)
        
          if (currentAnswer == currentQuestion){
            $("#prompt").append("<hr>").append($("<p>").text("Right!!!"))            
          } else {
            timeLeft = timeLeft - 10;
            $("#prompt").append("<hr>").append($("<p>").text("Wrong!!!"))          
          }         
          nextQuestion(questions[++questionIndex]) 
          console.log(questionIndex.length, questionIndex.length)   
      }))
  } 
}

// Ask the next question, repeat
function nextQuestion(nextItem){//nextItem's value needs to increment through iterations

  questionsAsked += 1;
  console.log(questionsAsked)
  setTimeout (function(){
    console.log("next question has loaded and " + nextItem)
    //$(".ask-question").empty();//returns content to empty state 
    //returns contents to empty state
    $("#prompt").empty();
    $(".possible-answers").empty(); 
    //console.log(questions[questionIndex+1])
    document.querySelector("#title").innerHTML = nextItem.title;//presents the question to the user   
    //console.log(nextItem.choices,nextItem.answer) 

    for (i = 0; i <= questions[questionIndex].choices.length -1; i++) {
          //questionNumber = questions.indexOf(nextItem.choices[i])
      $(".possible-answers").append($(`<button id=${i}>`).addClass("button").text(nextItem.choices[i])
        .on("click", function (event){//Sean helped by hard pressing the "i" value into the code.
          console.log(questions.length)
          console.log(event.target.id)
          let currentQuestion = questions[questionIndex].choices[event.target.id]
          let currentAnswer = questions[questionIndex].answer
          console.log(currentQuestion, currentAnswer)
          
          if (questionsAsked <= questions.length){
            if (currentAnswer == currentQuestion){
              $("#prompt").append("<hr>").append($("<p>").text("Right!!!"))
            }
            else {
              timeLeft = timeLeft - 10;
              $("#prompt").append("<hr>").append($("<p>").text("Wrong!!!"))            
            }
            nextQuestion(questions[++questionIndex]) 
          } 
          if (questionsAsked == questions.length) {
          console.log(questions.length, questionsAsked)
          changeScore()
          }
        }))
    }
  }, 1000);
}

//=================Change Score Section===============================

function changeScore() {
  clearInterval(countDown);
  setTimeout (function(){
$(".ask-question").empty(); //Empties the question page
console.log("changeScore screen has loaded")
score = document.getElementById("timer").innerHTML;// Copies the time left to become the score
var highScores = [];
//Loads the changeScore page info
      $(".changeScore-page")
        .append($("<h2>").text("All Done!"))
          .append($("<p>").text("Your final score is " + score + "."))
            .append($("<p>").text("Enter Initials: ")
              .append("<input>").addClass("initials")
                .append($("<button>").addClass("button").text("Submit").on("click", function(){
                  let userInitials = $(".initials").val();
                  console.log(userInitials)
                  let userScoreInput = (userInitials + "-" + score)
                  highScores.push(userScoreInput)
                  console.log(userScoreInput)
                  console.log(highScores)
                  window.location.replace("leaderboard.html");
                  leaderBoard()
                })))
  }, 1000);
}

//============Leader Board Section======================================

function leaderBoard(){
  var highScores = [];
  console.log(highScores)
  //$(".highscores").append("<h1>").text("Highscores")
  for (i = 0; i < highScores.length; i++) {
    $(".highscores").append("<p>").text(highScores[i])
  }
  $(".highscores").append($("<button>").text("Start Quiz").addClass("button").on("click", start))

$(".highscores").append($("<button>").text("Clear Highscores").addClass("button").on("click", function(){
  highScores = [];
}))
}
QuizGAme()
console.log("document has been loaded");
