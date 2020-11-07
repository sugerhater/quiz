//set var

var introEl = document.getElementById("intro");
var questionPartEl = document.getElementById("question-part");
var questionTitleEl = document.getElementById("question-title");
var questionOptionsEl = document.getElementById("question-options");
var headerEl = document.getElementsByTagName("header");
var questions = [{
    title: "Commonly used data types DO NOT include:",
    answer: "alerts",
    choices: ["strings", "booleans", "alerts", "numbers"],
},

{
    title: "The condistion in an if/else statement is enclosed within ___.",
    answer: "parenthesis",
    choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
},

{
    title: "Arrays in JavaScript can be used to store ___",
    answer: "all of the above",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"]
},

{
    title: "String values must be enclosed within ___ when being assigned to variables.",
    answer: "quotes",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"]
},

{
    title: "A very useful tool used during development and debugging for printing contect to the debugger is:",
    answer: "console.log",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"]
}

];

var choices = [["strings", "booleans", "alerts", "numbers"],
["quotes", "curly brackets", "parenthesis", "square brackets"],
["numbers and strings", "other arrays", "booleans", "all of the above"],
["commas", "curly brackets", "quotes", "parenthesis"],
["JavaScript", "terminal/bash", "for loops", "console.log"]];

var currentQuestionIndex = 0;
var timeElapsed = 0;
var totalTime = 100;
var gameTimerInterval;
var startButton = document.getElementById("start");
var timerEl = document.getElementById("timer");


function start() {
    console.log("start")
    questionOptionsEl.innerHTML = "";

    // intro.setAttribute("align", "center")
    // questionPartEl.appendChild(intro);

    startButton.addEventListener("click", startQuiz)
};

function startQuiz() {
    console.log("starQuiz");
    // currentQuestionIndex = 0;
    introEl.style.display = "none";
    startButton.style.display = "none";
    totalTime= 100;
    clearInterval(gameTimerInterval);
    gameTimerInterval = setInterval(function(){
        console.log(totalTime);
        timerEl.textContent = "Time:" + totalTime;
        totalTime--;
    },1000);
    // initiate the timer.
    renderQuestion();
    // set the event listener for our question options (answers)
    questionOptionsEl.addEventListener("click", function (event) {
        if (event.target.matches("button")) {
            console.log("button is clicked")
            if (questions[currentQuestionIndex].answer === event.target.innerText) {
                console.log("right answer");
                currentQuestionIndex++;
                renderQuestion();
            }
            else {
                console.log("wrong answer");
                currentQuestionIndex++;
                
                totalTime -=10;
                renderQuestion();
            }
            // currentQuestionIndex++;
        }
    })
}

function allDone() {
    clearInterval(gameTimerInterval);
    timerEl.textContent = "Time:0";
    console.log("quiz finished");
    questionOptionsEl.innerHTML = "";
    questionTitleEl.textContent = "All done!"
    introEl.textContent = "Your final socre is"+totalTime;
    introEl.style.display = "block";
}

function clearHighScore() {

}

function renderQuestion() {
    if (currentQuestionIndex < 5) {
        console.log("renderQuestion");
        // set the title
        // clear the old options if any
        // draw the new options 
        questionTitleEl.textContent = questions[currentQuestionIndex].title;
        questionOptionsEl.innerHTML = "";
        questions[currentQuestionIndex].choices.forEach(function (choice) {
            // create the list item
            var choiceEl = document.createElement("li");
            var choiceButtonEl = document.createElement("button");

            // set the text content to the choice
            choiceButtonEl.textContent = choice;
            choiceEl.appendChild(choiceButtonEl);

            // append it to the options el
            questionOptionsEl.appendChild(choiceEl);
            console.log(currentQuestionIndex);
        })
    }
    else{
        allDone();
    }

}


start();

        // function nextQuestion() {
        //             var clickTarget = document.getElementsByTagName("button");
        //             for (var k = 0; k < 5; k++) {
        //                 clickTarget.addEventListener("click", changeQuestions(k))
        //                 console.log(clickTarget);
        //             }
        //         }
        // questionOptionsEl.addEventListener("click", renderQuestion)
    // questionOptionsEl.addEventListener("click", renderQuestion)
    // questionOptionsEl.addEventListener("click", function (event) {
    //     if (event.target.matches("button")) {
    //         console.log("A question option was clicked");
    //         currentQuestionIndex++;

    //         // check for a right answer
    //         if (questions.answer === event.target.innerText) {

    //             //         // We know the right answer is selected.
    //             //         // handle correct answers.... increment score
    //             //     } else {
    //             //         // handle incorrect answers... decrement the timer
    //             //     }


    //             // renderQuestion;
    //             // } );
    //         }
    //     }

    //     // function rightOrWrong() {

    // }
    // )}






















// //set var
// var questions = ["Commonly used data types DO NOT include:",
//     "The condistion in an if/else statement is enclosed within ___.",
//     "Arrays in JavaScript can be used to store ___",
//     "String values must be enclosed within ___ when being assigned to variables.",
//     "A very useful tool used during development and debugging for printing contect to the debugger is:"
// ];

// var choices = [["strings", "booleans", "alerts", "numbers"],
// ["quotes", "curly brackets", "parenthesis", "square brackets"],
// ["numbers and strings", "other arrays", "booleans", "all of the above"],
// ["commas", "curly brackets", "quotes", "parenthesis"],
// ["JavaScript", "terminal/bash", "for loops", "console.log"]];

// var optionEl = document.querySelector("#options");


// var q2 = "The condistion in an if/else statement is enclosed within ___.";
// var q3 = "Arrays in JavaScript can be used to store ___.";

// var i = 0;
// function start() {
//     optionEl.innerHTML = "";
//     //add a <p> into question part;
//     var questionPartEl = document.getElementById("question-part");
//     var introEl = document.getElementById("intro");
//     introEl.textContent = "try to answer the following code-related questions with the time limit. Keep in mind that incorrect answer will penalize your scoretime by ten seconds!";
//     // intro.setAttribute("style", "align-center" )
//     intro.setAttribute("align", "center")
//     questionPartEl.appendChild(intro);
//     // add a start button and call startquiz function
//     var startButton = document.createElement("button");

//     startButton.textContent = "Start Quiz";

//     optionEl.appendChild(startButton);
//     startButton.addEventListener("click", startQuiz);
// };

// function startQuiz() {
//     i = 0;
//     console.log("click");
//     // questionDiv.innerHTML= "";
//     // var eachQuestion =  document.createElement("p");
//     changeQuestions(0);
//     // for (true) {
//     // };
// }

// function changeQuestions(i) {
//     var questionEl = document.getElementById("questions");
//     var introEl = document.getElementById("intro");
//     introEl.textContent = "";
//     questionEl.textContent = questions[i];
//     console.log(questionEl.textContent);
//     optionEl.innerHTML = "";

//     for (var j = 0; j < 4; j++) {
//         var optionLi = document.createElement("li");
//         var optionButton = document.createElement("button");
//         optionButton.textContent = choices[i][j];
//         optionLi.appendChild(optionButton);
//         optionEl.appendChild(optionLi);
//     }
//     // i++;
//     // optionButton.addEventListener("click",changeQuestions(2))
//     // nextQuestion;
// }

// function nextQuestion() {
//     var clickTarget = document.getElementsByTagName("button");
//     for (var k = 0; k < 5; k++) {
//         clickTarget.addEventListener("click", changeQuestions(k))
//         console.log(clickTarget);
//     }
// }

// // function nextOptions() {
// //     for ()
// // }

// // for (var i = 0; i < 5; i++) {


// start();
