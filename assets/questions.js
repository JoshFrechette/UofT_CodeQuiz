//Global variables
//var timeLeft = 0;
var timer = 60;
var head = 0;;
var score = 0;
var questionIndex = 0;
var highScores = [];


//A way presented in class
var QuizGAme = function() {
// Game variables here
//init()
//==================================================================
  //function init() {
  console.log("ready");
//"init-page content" First content to come up
        head = document.getElementById("h1");
        var headLevel = document.createTextNode("Coding Quiz Challenge");
        head.appendChild(headLevel);

        var paragraph = document.getElementById("p");
        var text = document.createTextNode("Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your scoretime by ten seconds!");
        paragraph.appendChild(text);
        
        $(".init-page").append($("<button>").text("Start Quiz").addClass("button").on("click", start))
        /*var startBtn = document.createElement("BUTTON"); // Create a button for the user to start the quiz || starts the timer
        startBtn.className = "button"; // Give  a class to the anme so that it can be styled
        startBtn.innerHTML = "Start Quiz"; //Text for the button function
        document.body.appendChild(startBtn); //Place the button in the page

        document.addEventListener("click", start);*/
      
  //}
//==================================================================
  function start() {
    $(".init-page").empty();
  console.log("start screen has loaded")
         //returns content to empty state

                  var countDown = document.getElementById("timer").innerHTML = "Time " + timeLeft + " seconds";
                  timeLeft -= 1;

                  var timeLeft = 60;
                  //Timer countdown script, to start counting down after 
                  countDown = setInterval(function(){
                  document.getElementById("timer").innerHTML = "Time " + timeLeft + " seconds";
                  timeLeft -= 1;
                    
                    if(timeLeft <= 0){
                    clearInterval(countDown);
                    document.getElementById("timer").innerHTML = "Time Out!";
                    }
                    }, 1000);

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

          console.log(questions)

                  if (questionIndex <= (questions.length)) { //Keep asking questions until there are no more
                    document.querySelector("#title").innerHTML = questions[questionIndex].title;
                    //Clear
                    //var possibleAnswer = questions[choices];
                    for (i = 0; i <= questions.length; i++) {
                     
                        $(".possible-answers").append($("<button>").text([i+ 1] + " " + questions[questionIndex].choices[i]).on("click"));
                        userAnswer = $(this).text(questions[questionIndex].choices[i]);
                        console.log(userAnswer)
                    }
                    /*if (userAnswer != answer)
                      timeLeft = timeLeft + 15;*/
                  }   
                  if (questionIndex === questions.length || timer === 0) {// Determines if the game has ended, either by answering all the questions or if time has run out. End of this block of code ==> on to next
                  changeScore()
                  }

            head = document.getElementById("h2");
          }
        
          //questions() // Where did this come from?
      // Hint provided from the assignment file



  //===================================================================
  function changeScore() {
      console.log("changeScore screen has loaded")
      // Log initals 
      //endGame()
  }
      //init();// Return to Homescreen when button is pushed
}

  //==================================================================
// *Fix code*
// When elements loaded, start init()
//$(document.ready(QuizGAme()))
QuizGAme()
console.log("document has been loaded");


 