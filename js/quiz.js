document.addEventListener("DOMContentLoaded", () => {
  // creating and inserting values in topic array
  const topics = {
    JavaScript: [
      {
        front: "What is JavaScript?",
        back: "JavaScript is a programming language used to create interactive effects within web browsers.",
        hint: "Think about client-side scripting.",
      },
      {
        front: "What is a variable in JavaScript?",
        back: "A variable is a container for storing data values.",
        hint: "Variables hold data that can change.",
      },
      {
        front: "What is the use of `let` in JavaScript?",
        back: "The `let` keyword is used to declare a variable with block scope.",
        hint: "Used for block-scoped variables.",
      },
      {
        front: "What is a function in JavaScript?",
        back: "A function is a block of code that performs a task when called.",
        hint: "Functions can accept parameters and return values.",
      },
      {
        front: "What is an array in JavaScript?",
        back: "An array is a collection of elements stored in a single variable.",
        hint: "Arrays are zero-indexed.",
      },
      {
        front: "What is the difference between `==` and `===` in JavaScript?",
        back: "`==` compares values with type coercion, while `===` compares values and types without coercion.",
        hint: "Be cautious about implicit type conversion.",
      },
      {
        front: "What is a closure in JavaScript?",
        back: "A closure is a function that retains access to its outer function’s variables even after the outer function has finished executing.",
        hint: "Closures enable data encapsulation.",
      },
      {
        front: "What is the `this` keyword in JavaScript?",
        back: "The `this` keyword refers to the context in which a function is called.",
        hint: "It points to the object in whose context the function is executed.",
      },
      {
        front: "What is an event listener in JavaScript?",
        back: "An event listener is a function that waits for a specific event (like click or keypress) to occur.",
        hint: "Commonly used for user interaction handling.",
      },
      {
        front: "What is a promise in JavaScript?",
        back: "A promise is an object representing the eventual completion or failure of an asynchronous operation.",
        hint: "Promises are used for async tasks like API calls.",
      },
    ],
    HTML: [
      {
        front: "What does HTML stand for?",
        back: "HTML stands for HyperText Markup Language.",
        hint: "It's the standard language for creating web pages.",
      },
      {
        front: "What is a tag in HTML?",
        back: "A tag is used to define elements in HTML.",
        hint: "Tags are enclosed in angle brackets, like `<tag>`.",
      },
      {
        front: "What is the `<head>` tag in HTML?",
        back: "The `<head>` tag contains meta-information about the document.",
        hint: "It’s not visible on the page but is important for SEO and linking resources.",
      },
      {
        front: "What is the purpose of the `<title>` tag in HTML?",
        back: "The `<title>` tag sets the title of the document, which appears in the browser tab.",
        hint: "It’s a child of the `<head>` element.",
      },
      {
        front: "What does the `<div>` tag do in HTML?",
        back: "The `<div>` tag is a block-level element used to group content.",
        hint: "It's commonly used for layout structure.",
      },
      {
        front:
          "What is the difference between a block-level and inline element?",
        back: "Block-level elements take up the full width, while inline elements take up only as much space as needed.",
        hint: "Block elements include `<div>`, while inline elements include `<span>`.",
      },
      {
        front: "What is an anchor tag in HTML?",
        back: "The `<a>` tag is used to create hyperlinks.",
        hint: "It uses the `href` attribute to link to a destination.",
      },
      {
        front: "What is the `<img>` tag in HTML?",
        back: "The `<img>` tag is used to embed images on a webpage.",
        hint: "The `src` attribute specifies the image source.",
      },
      {
        front: "What is the purpose of the `<form>` tag?",
        back: "The `<form>` tag is used to collect user input for submission.",
        hint: "It can contain inputs, buttons, and other form elements.",
      },
      {
        front: "What is the `<meta>` tag used for?",
        back: "The `<meta>` tag provides metadata about the HTML document.",
        hint: "It’s often used for character encoding and author information.",
      },
    ],
    CSS: [
      {
        front: "What does CSS stand for?",
        back: "CSS stands for Cascading Style Sheets.",
        hint: "Used to style HTML elements.",
      },
      {
        front: "What is the purpose of CSS?",
        back: "CSS is used to style HTML elements.",
        hint: "Defines layout, colors, fonts, and more.",
      },
      {
        front: "What is the `flex` property in CSS?",
        back: "The `flex` property is used in Flexbox to align items.",
        hint: "Part of Flexbox layout for positioning items.",
      },
      {
        front: "What is a CSS selector?",
        back: "A CSS selector is used to target HTML elements for styling.",
        hint: "Selectors can target by element, class, or ID.",
      },
      {
        front:
          "What is the difference between `class` and `id` selectors in CSS?",
        back: "`class` selectors can target multiple elements, while `id` selectors target a single element.",
        hint: "Use `id` for unique elements and `class` for reusable styles.",
      },
      {
        front: "What is the `box-model` in CSS?",
        back: "The box model defines the space around elements, including padding, borders, and margins.",
        hint: "Think of it as the element’s container.",
      },
      {
        front: "What does `position: absolute;` do in CSS?",
        back: "It positions an element relative to its nearest positioned ancestor.",
        hint: "It removes the element from the normal document flow.",
      },
      {
        front: "What is a media query in CSS?",
        back: "A media query applies styles based on the device’s characteristics, like screen size or resolution.",
        hint: "Used for responsive design.",
      },
      {
        front: "What is the `z-index` property in CSS?",
        back: "The `z-index` property controls the stacking order of elements.",
        hint: "Elements with a higher `z-index` are stacked on top of those with a lower one.",
      },
      {
        front: "What is the `background-color` property in CSS?",
        back: "The `background-color` property sets the background color of an element.",
        hint: "It can be set using color names, hex codes, or RGB values.",
      },
    ],
  };

  //referencing to the html elements
  const deckSelect = document.getElementById("deck-select");
  const quizTypeSelect = document.getElementById("quiz-type");
  const startQuizBtn = document.getElementById("start-quiz-btn");
  const quizContent = document.querySelector(".quiz-content");
  const quizSetup = document.querySelector(".quiz-setup");
  const questionText = document.getElementById("question-text");
  const multipleChoiceContainer = document.getElementById(
    "multiple-choice-container"
  );

  const writtenContainer = document.getElementById("written-container");
  const submitAnswerBtn = document.getElementById("submit-answer");
  const nextQuestionBtn = document.getElementById("next-question");
  const feedbackContainer = document.getElementById("feedback-container");
  const correctFeedback = document.getElementById("correct-feedback");
  const incorrectFeedback = document.getElementById("incorrect-feedback");
  const correctAnswerText = document.getElementById("correct-answer");
  const quizResults = document.querySelector(".quiz-results");
  const scorePercentage = document.getElementById("score-percentage");
  const correctCount = document.getElementById("correct-count");
  const questionTotal = document.getElementById("question-total");
  const retryQuizBtn = document.getElementById("retry-quiz");
  const returnSetupBtn = document.getElementById("return-setup");
  const progressFill = document.querySelector(".progress-fill");
  const currentQuestionText = document.getElementById("current-question");
  const totalQuestionsText = document.getElementById("total-questions");

  let currentDeck = "";
  let currentQuizType = "";
  let currentQuestions = [];
  let currentQuestionIndex = 0;
  let correctAnswers = 0;

  //create event listener to start the quiz 
  startQuizBtn.addEventListener("click", () => {
    //selecting the topic
    currentDeck = deckSelect.value;
    //selecting the quiz type
    currentQuizType = quizTypeSelect.value;
    //getting random questions from the flash card
    currentQuestions = getRandomQuestions(topics[currentDeck], 10);
    currentQuestionIndex = 0;
    correctAnswers = 0;

    //hides the quiz setup page
    quizSetup.style.display = "none";
    //shows the quiz screen
    quizContent.style.display = "block";
    //getting 10 random questions
    totalQuestionsText.textContent = currentQuestions.length;
    showQuestion();
  });

  //reating a function to get some random selection of questions
  function getRandomQuestions(questions, count) {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
  //function that will display the question
  function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    questionText.textContent = question.front;
    if (currentQuizType === "multiple-choice") {
      multipleChoiceContainer.style.display = "block";
      writtenContainer.style.display = "none";

      const options = generateMultipleChoiceOptions(question.back);
      multipleChoiceContainer.innerHTML = options;
    } else if (currentQuizType === "written") {
      multipleChoiceContainer.style.display = "none";
      writtenContainer.style.display = "block";
    }

    currentQuestionText.textContent = currentQuestionIndex + 1;
    progressFill.style.width = `${
      ((currentQuestionIndex + 1) / currentQuestions.length) * 100
    }%`;
  }
//function for generating mcq type answer options
  function generateMultipleChoiceOptions(correctAnswer) {
    const options = [correctAnswer];
    while (options.length < 4) {
      const randomQuestion =
        topics[currentDeck][
          Math.floor(Math.random() * topics[currentDeck].length)
        ];
      if (!options.includes(randomQuestion.back)) {
        options.push(randomQuestion.back);
      }
    }
    options.sort(() => 0.5 - Math.random());

    return options
      .map(
        (option, index) => `
            <div class="answer-option">
                <input type="radio" name="answer" id="option${
                  index + 1
                }" value="${index}">
                <label for="option${index + 1}">${option}</label>
            </div>
        `
      )
      .join("");
  }
//adding event listener for answer submission
  submitAnswerBtn.addEventListener("click", () => {
    const selectedAnswer = getSelectedAnswer();
    const correctAnswer = currentQuestions[currentQuestionIndex].back;

    if (selectedAnswer === correctAnswer) {
      correctAnswers++;
      correctFeedback.style.display = "block";
      incorrectFeedback.style.display = "none";
    } else {
      correctFeedback.style.display = "none";
      incorrectFeedback.style.display = "block";
      correctAnswerText.textContent = correctAnswer;
    }

    feedbackContainer.style.display = "block";
    submitAnswerBtn.style.display = "none";
    nextQuestionBtn.style.display = "block";
  });
//getting the selected answer
  function getSelectedAnswer() {
    if (currentQuizType === "multiple-choice") {
      const selectedOption = document.querySelector(
        'input[name="answer"]:checked'
      );
      return selectedOption
        ? selectedOption.nextElementSibling.textContent
        : null;
    } else if (currentQuizType === "written") {
      return document.getElementById("written-answer").value.trim();
    }
  }
//creating an event listener for the next question button
  nextQuestionBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
      showQuestion();
      feedbackContainer.style.display = "none";
      submitAnswerBtn.style.display = "block";
      nextQuestionBtn.style.display = "none";
    } else {
      showResults();
    }
  });
//function for displaying the results
  function showResults() {
    quizContent.style.display = "none";
    quizResults.style.display = "block";

    const score = (correctAnswers / currentQuestions.length) * 100;
    scorePercentage.textContent = `${score}%`;
    correctCount.textContent = correctAnswers;
    questionTotal.textContent = currentQuestions.length;

    const correctBar = document.querySelector(".correct-bar");
    const incorrectBar = document.querySelector(".incorrect-bar");
    correctBar.style.width = `${score}%`;
    incorrectBar.style.width = `${100 - score}%`;
  }
//event lostener for retrying the quiz
  retryQuizBtn.addEventListener("click", () => {
    quizResults.style.display = "none";
    quizSetup.style.display = "block";
  });

  returnSetupBtn.addEventListener("click", () => {
    quizResults.style.display = "none";
    quizSetup.style.display = "block";
  });
});
