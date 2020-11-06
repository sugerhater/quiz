//set var
var questions= ["Commonly used data types DO NOT include:", 
               "The condistion in an if/else statement is enclosed within ___.",
               "Arrays in JavaScript can be used to store ___",
               "String values must be enclosed within ___ when being assigned to variables.",
               "A very useful tool used during development and debugging for printing contect to the debugger is:"
            ];
 
var choices = [ ["strings","booleans","alerts","numbers"], 
          ["quotes", "curly brackets", "parenthesis","square brackets"],
          ["numbers and strings", "other arrays", "booleans", "all of the above"],
          ["commas", "curly brackets", "quotes", "parenthesis"],
          ["JavaScript", "terminal/bash", "for loops", "console.log"] ];

var optionEl = document.querySelector("#options");


var q2 = "The condistion in an if/else statement is enclosed within ___.";
var q3 = "Arrays in JavaScript can be used to store ___.";
// var q3 = 

// var = {}

function start() {
    optionEl.innerHTML= "";
//add a <p> into question part;
    var questionPartEl =   document.getElementById("question-part");
    var introEl =  document.getElementById("intro");
    introEl.textContent = "try to answer the following code-related questions with the time limit. Keep in mind that incorrect answer will penalize your scoretime by ten seconds!";
    // intro.setAttribute("style", "align-center" )
    intro.setAttribute("align", "center" )
    questionPartEl.appendChild(intro);
    // add a start button and call startquiz function
    var startButton = document.createElement("button");

    startButton.textContent= "Start Quiz";

    optionEl.appendChild(startButton);
    startButton.addEventListener("click", startQuiz);
};

function startQuiz(){
    console.log("click");
    var questionEl =   document.getElementById("questions");
    var introEl =  document.getElementById("intro");
    // questionDiv.innerHTML= "";
    // var eachQuestion =  document.createElement("p");
    introEl.textContent= "";
    questionEl.textContent= questions[1];
    console.log(questionEl.textContent);
    
    optionEl.innerHTML= "";

    // for (true) {
        for(var j = 0; j < 4; j++){
            var optionLi = document.createElement("li");
            var optionButton = document.createElement("button");
            optionButton.textContent= choices[0][j];
            optionLi.appendChild(optionButton);
            optionEl.appendChild(optionLi);
        }
    // };


}

start();
