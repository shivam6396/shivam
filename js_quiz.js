const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQestionIndex = 0;

document.addEventListener('DOMContentLoaded', function () {
  const timerDisplay = document.getElementById('timer');
  let timeLeft = 20 * 60; // 30 minutes in seconds

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  function countdown() {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent = 'Time\'s up!';
     
      showscore()
      // Optionally, you can add code here to handle what happens when time is up
    } else {
      timerDisplay.textContent = formatTime(timeLeft);
      timeLeft--;
    }
  }
  countdown();
  // Initial call to display timer immediately

  const timerInterval = setInterval(countdown, 1000); // Update timer every second
});

let score = 0;

function startQuiz() {
  
  currentQestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
 
}


function showQuestion() {
 
  resetstate();
  
  let currentQestion = questions_java_script[currentQestionIndex];
  let questionNo = currentQestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQestion.question;

  currentQestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
      
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetstate() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const iscorrect = selectedBtn.dataset.correct === "true";
  if (iscorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showscore() {
  resetstate();
  if (score < 8) {
    questionElement.innerHTML = ` You scored  😒 ${score} out of ${questions_java_script.length}!;`;
  } else if (score < 13) {
    questionElement.innerHTML = ` You scored 😜 ${score} out of ${questions_java_script.length}!
    ;`;
  } else if (score < 17) {
    questionElement.innerHTML = ` You scored 🥰 ${score} out of ${questions_java_script.length}!
;`;
  } else if (score < 25) {
    questionElement.innerHTML = `You scored 😘 ${score} out of ${questions_java_script.length}!;`;
  } else {
    questionElement.innerHTML = ` You scored 🤦‍♂️ ${score} out of ${questions_java_script.length}!
;`;
  }


  nextButton.innerHTML = "Try Again";
  nextButton.style.display = "none";
  tryAgainBtn.style.display= 'block'
}

function handleNextButton() {
  currentQestionIndex++;
  if (currentQestionIndex < questions_java_script.length) {
    showQuestion();
  } else {
    showscore();
}
}

let tryAgainBtn = document.getElementById("try-again-btn");
tryAgainBtn.addEventListener('click' , ()=>{
   window.location.href = "jsquiz.html"
})


  nextButton.addEventListener("click", () => {

  handleNextButton();
 
  // if (currentQestionIndex < questions_java_script.length) {
  //   handleNextButton();
  // } else {
    
  //   startQuiz();
   
    
  // }
});

startQuiz();


// HTML QUIZ 

alert("This is java Script Mcq \n there based on only 30min")




  