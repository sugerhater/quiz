//set var
var introEl = document.getElementById("intro");
var questionPartEl = document.getElementById("question-part");
var questionTitleEl = document.getElementById("question-title");
var questionOptionsEl = document.getElementById("question-options");
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

            totalTime -= 10;
            renderQuestion();
        }
        // currentQuestionIndex++;
    }
})

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
var formEl = document.getElementById("form");
formEl.style.display = "none";

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

var goBackButton = document.getElementById("goback");
goBackButton.style.display = "none";
goBackButton.addEventListener("click", start);

var clearScoreButton = document.getElementById("clearscores");
clearScoreButton.style.display = "none";
clearScoreButton.addEventListener("click", clearHighScore);

var timerEl = document.getElementById("timer");
var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", submitScore);

var initialInput = document.querySelector("#inputinitial");
var userInitial;
var scores = document.getElementById("scores");

function start() {
    questionTitleEl.innerHTML = "Coding Quit Challenge";
    introEl.innerHTML = "Try to answer the following code-related questions with the time limit. Keep in mind that incorrect answer will penalize your scoretime by ten seconds!"
    scores.style.display = "none"
    introEl.style.display = "block";
    startButton.style.display = "block";
    goBackButton.style.display = "none";
    clearScoreButton.style.display = "none";
    console.log("start")
    questionOptionsEl.innerHTML = "";
    // intro.setAttribute("align", "center")
    // questionPartEl.appendChild(intro);
    startButton.addEventListener("click", startQuiz)
};

function startQuiz() {
    console.log("starQuiz");
    currentQuestionIndex = 0;
    // currentQuestionIndex = 0;
    introEl.style.display = "none";
    startButton.style.display = "none";
    formEl.style.display = "none";
    totalTime = 100;
    clearInterval(gameTimerInterval);
    gameTimerInterval = setInterval(function () {
        console.log(totalTime);
        timerEl.textContent = "Time:" + totalTime;
        totalTime--;
    }, 1000);
    renderQuestion();
}


function renderQuestion() {
    if (currentQuestionIndex < questions.length) {
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
            // currentQuestionIndex++;
        })
    }
    else {
        allDone();
    }
}


function allDone() {
    formEl.style.display = "block";
    clearInterval(gameTimerInterval);
    timerEl.textContent = "Time:0";
    console.log("quiz finished");
    questionOptionsEl.innerHTML = "";
    questionTitleEl.textContent = "All done!"
    //Min score set to 0.
    if (totalTime < 0) {
        totalTime = 0
    }
    introEl.textContent = "Your final socre is " + totalTime + "/100.";
    introEl.style.display = "block";
}

function submitScore(event) {
    event.preventDefault();

    goBackButton.style.display = "block";
    clearScoreButton.style.display = "block";

    console.log("clicked submit button.");
    questionTitleEl.innerHTML = "Hightscores";
    introEl.innerHTML = "";

    userInitial = initialInput.value.trim();
    console.log(userInitial);

    saveScore();
    showScore();
}


function saveScore() {
    var savedScore = localStorage.getItem("storagedScores");
    var savedScoreArray;
    if (savedScore === null) {
        savedScoreArray = [];
    }
    else {
        savedScoreArray = JSON.parse(savedScore);

    }
    var currentScore = {
        initial: initialInput.value.trim(),
        score: totalTime
    }
    console.log(currentScore);
    console.log(savedScoreArray);
    savedScoreArray.push(currentScore);
    var savedScoreArrayString = JSON.stringify(savedScoreArray);
    window.localStorage.setItem("storagedScores", savedScoreArrayString);
    initialInput.value = "";
}

function showScore() {
    scores.style.display = "block"

    var savedScore = localStorage.getItem("storagedScores");
    var savedScoreArray;
    savedScoreArray = JSON.parse(savedScore);
    formEl.style.display = "none";
    // scores.innerHTML= "";
    console.log("showScore");
    console.log(savedScoreArray);
    for (var i = 0; i < savedScoreArray.length; i++) {
        var scoreEl = document.createElement("li");
        scoreEl.textContent = savedScoreArray[i].initial + ": score " + savedScoreArray[i].score;
        console.log(scoreEl);
        console.log(savedScoreArray[i]);
        scores.appendChild(scoreEl);
    }
}

function clearHighScore() {
    window.localStorage.removeItem("storagedScores");
    scores.innerHTML = "All scores cleared!";
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
