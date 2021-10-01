var quizData = document.querySelector(".quiz-form");
var quizSubmitBtn = document.querySelector(".quiz-submit");
var outputArea = document.querySelector(".output-area-result");

quizSubmitBtn.addEventListener("click", quizEval);
var score = 0;

function quizEval() {
    score = 0;
    var ansArray = ['60', '2', 'greater', '12'];
    var chosenArray = [];
    const formResult = new FormData(quizData);
    for(let entry of formResult.values()) {
        chosenArray.push(entry);
    }
    for(let i = 0; i < ansArray.length; i++) {
        if (ansArray[i] === chosenArray[i]) {
            score++;
        }
    }
    outputArea.innerText = `Your Score of the Triangle quiz is ${score}`;
} 
