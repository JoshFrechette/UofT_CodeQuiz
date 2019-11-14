# CodeQuiz
Assignment 4 for coding Bootcamp

# GitHub Deployment links

https://twistedpixels.github.io/CodeQuiz/

https://github.com/TwistedPixels/CodeQuiz.git


Directly from the Assignment Description

# Unit 04 Web APIs Homework: Code Quiz

As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment. These assessments are typically a combination of multiple-choice questions and interactive challenges. In this homework assignment, your challenge is to build a code quiz with multiple-choice questions.


## Instructions

From scratch, build a timer-based quiz application that stores high scores client-side. Following the [common templates for user stories](https://en.wikipedia.org/wiki/User_story#Common_templates), we can frame this challenge as follows:

```
As a coding bootcamp student
I want to take a timed quiz on JavaScript fundamentals that stores high scores
so that I can gauge my progress compared to my peers
```

How do you deliver this? Here are some guidelines:

* Play proceeds as follows:

  * The user arrives at the landing page and is presented with a call-to-action to "Start Quiz." Also note the navigation option to "View Highscores" and the "Time" value set at 0.

  * Clicking the "Start Quiz" button presents the user with a series of questions. The timer is initialized with a value and immediately begins countdown.

  * Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).

  * When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their initials. Their final score and initials are then stored in `localStorage`.

* Your application should also be responsive, ensuring that it adapts to multiple screen sizes.

* Refer to the animated GIF below for a demonstration of the application functionality.

![code quiz](./Assets/04-Web-APIs-homework-demo.gif)


# pseudoCode

User is presented with the landing page where they are presented with the option to either  
    - Go to Highscore Page (HTML Link)
    - Start the game (Press a button to progress to the quiz game)

Upon pressing the start button;
    - The timer starts counting down
    - The user is presented with the first question (for loop, cycling through the questions and possible answers)

User either
    - Chooses correctly => on screen alert that they were right => proceed to next question
    - Chooses incorrectly => on screen alert that they were wrong => deduct 10 secs from their score/timeleft => proceed to next question

User cycles through all questions and is presented with an input to include their initials
    => upon submit, intials and score are stored and added to the highscores

User can 
    - Play again
    - Clear highscores

# Issues (screenshots in supporting file folder)

Screenshot 1
    Buttons not presented vertically
    Solution; styling, "flex-direction: column;"

Screenshot 2
    After creating NextQuestion function, possible answers not styled properly
    Solution; rework the for loop to accomodate a slightly more complicated input

Screenshot 3
    Highscore page not loading javascript, local storage
    Solution; using JSON to get and retrieve local storage data

