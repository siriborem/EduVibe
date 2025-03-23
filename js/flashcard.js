document.addEventListener("DOMContentLoaded", () => {
    //declaring object and inserting values in the object 
    const topics = {
        "JavaScript": [
            { front: "What is JavaScript?",
            back: "JavaScript is a programming language used to create interactive effects within web browsers.", 
            hint: "Think about client-side scripting." },
            { front: "What is a variable in JavaScript?", 
                back: "A variable is a container for storing data values.", 
                hint: "Variables hold data that can change." },
            { front: "What is the use of `let` in JavaScript?", 
                back: "The `let` keyword is used to declare a variable with block scope.", 
                hint: "Used for block-scoped variables." },
            { front: "What is a function in JavaScript?", 
                back: "A function is a block of code that performs a task when called.", 
                hint: "Functions can accept parameters and return values." },
            { front: "What is an array in JavaScript?", 
                back: "An array is a collection of elements stored in a single variable.", 
                hint: "Arrays are zero-indexed." },
            { front: "What is the difference between `==` and `===` in JavaScript?", 
                back: "`==` compares values with type coercion, while `===` compares values and types without coercion.", 
                hint: "Be cautious about implicit type conversion." },
            { front: "What is a closure in JavaScript?", 
                back: "A closure is a function that retains access to its outer function’s variables even after the outer function has finished executing.", 
                hint: "Closures enable data encapsulation." },
            { front: "What is the `this` keyword in JavaScript?",
                 back: "The `this` keyword refers to the context in which a function is called.", 
                 hint: "It points to the object in whose context the function is executed." },
            { front: "What is an event listener in JavaScript?", 
                back: "An event listener is a function that waits for a specific event (like click or keypress) to occur.",
                 hint: "Commonly used for user interaction handling." },
            { front: "What is a promise in JavaScript?", 
                back: "A promise is an object representing the eventual completion or failure of an asynchronous operation.", 
                hint: "Promises are used for async tasks like API calls." }
        ],
        "HTML": [
            { front: "What does HTML stand for?",
                 back: "HTML stands for HyperText Markup Language.", 
                 hint: "It's the standard language for creating web pages." },
            { front: "What is a tag in HTML?", 
                back: "A tag is used to define elements in HTML.",
                 hint: "Tags are enclosed in angle brackets, like `<tag>`." },
            { front: "What is the `<head>` tag in HTML?", 
                back: "The `<head>` tag contains meta-information about the document.", 
                hint: "It’s not visible on the page but is important for SEO and linking resources." },
            { front: "What is the purpose of the `<title>` tag in HTML?",
                 back: "The `<title>` tag sets the title of the document, which appears in the browser tab.", 
                 hint: "It’s a child of the `<head>` element." },
            { front: "What does the `<div>` tag do in HTML?",
                 back: "The `<div>` tag is a block-level element used to group content.", 
                 hint: "It's commonly used for layout structure." },
            { front: "What is the difference between a block-level and inline element?", 
                back: "Block-level elements take up the full width, while inline elements take up only as much space as needed.",
                 hint: "Block elements include `<div>`, while inline elements include `<span>`." },
            { front: "What is an anchor tag in HTML?", 
                back: "The `<a>` tag is used to create hyperlinks.", 
                hint: "It uses the `href` attribute to link to a destination." },
            { front: "What is the `<img>` tag in HTML?", 
                back: "The `<img>` tag is used to embed images on a webpage.", 
                hint: "The `src` attribute specifies the image source." },
            { front: "What is the purpose of the `<form>` tag?",
                 back: "The `<form>` tag is used to collect user input for submission.", 
                 hint: "It can contain inputs, buttons, and other form elements." },
            { front: "What is the `<meta>` tag used for?", 
                back: "The `<meta>` tag provides metadata about the HTML document.",
                 hint: "It’s often used for character encoding and author information." }
        ],
        "CSS": [
            { front: "What does CSS stand for?", 
                back: "CSS stands for Cascading Style Sheets.",
                 hint: "Used to style HTML elements." },
            { front: "What is the purpose of CSS?", 
                back: "CSS is used to style HTML elements.", 
                hint: "Defines layout, colors, fonts, and more." },
            { front: "What is the `flex` property in CSS?", 
                back: "The `flex` property is used in Flexbox to align items.", 
                hint: "Part of Flexbox layout for positioning items." },
            { front: "What is a CSS selector?",
                 back: "A CSS selector is used to target HTML elements for styling.", 
                 hint: "Selectors can target by element, class, or ID." },
            { front: "What is the difference between `class` and `id` selectors in CSS?", 
                back: "`class` selectors can target multiple elements, while `id` selectors target a single element.",
                 hint: "Use `id` for unique elements and `class` for reusable styles." },
            { front: "What is the `box-model` in CSS?", 
                back: "The box model defines the space around elements, including padding, borders, and margins.", 
                hint: "Think of it as the element’s container." },
            { front: "What does `position: absolute;` do in CSS?", 
                back: "It positions an element relative to its nearest positioned ancestor.", 
                hint: "It removes the element from the normal document flow." },
            { front: "What is a media query in CSS?", 
                back: "A media query applies styles based on the device’s characteristics, like screen size or resolution.", 
                hint: "Used for responsive design." },
            { front: "What is the `z-index` property in CSS?", 
                back: "The `z-index` property controls the stacking order of elements.", 
                hint: "Elements with a higher `z-index` are stacked on top of those with a lower one." },
            { front: "What is the `background-color` property in CSS?",
                 back: "The `background-color` property sets the background color of an element.", 
                 hint: "It can be set using color names, hex codes, or RGB values." }
        ]
    };

    //creating flash card elements
    const createTopicButton = document.getElementById("create-topic");
    const flashcardFormContainer = document.getElementById("flashcard-form-container");
    const flashcardTopicSelect = document.getElementById("flashcard-topic");
    const flashcardFrontInput = document.getElementById("flashcard-front");
    const flashcardBackInput = document.getElementById("flashcard-back");
    const flashcardHintInput = document.getElementById("flashcard-hint");
    const addFlashcardButton = document.getElementById("add-flashcard");

    //redirecting to the form when we click on the text 
        createTopicButton.addEventListener("click", () => {
            //showing blank page
            flashcardFormContainer.style.display = "block";

            //hiding the elements when the form is redirected like heading, topic selection and text
            topicContainerHeading.style.display = "none"; 
            document.querySelector(".topics-container").style.display = "none";  
            createTopicButton.style.display = "none"; 
        });
    
        // displaying the form after we click
        addFlashcardButton.addEventListener("click", () => {
            const topic = flashcardTopicSelect.value;
            const front = flashcardFrontInput.value.trim();
            const back = flashcardBackInput.value.trim();
            const hint = flashcardHintInput.value.trim();

            // creating alert to fill all the forms
            if (front === "" || back === "" || hint === "") {
                alert("Please fill in all fields.");
                return;
            }

            //creating flash card with these properties
            const newFlashcard = { front, back, hint };

            //pushing the values to the topic array an dthen alerting it
            topics[topic].push(newFlashcard);
            alert("Flashcard added successfully.");

            //clears the values on the form and shows a fresh form
            flashcardFrontInput.value = "";
            flashcardBackInput.value = "";
            flashcardHintInput.value = "";
            flashcardFormContainer.style.display = "none";
            topicContainerHeading.style.display = "block"; 
            document.querySelector(".topics-container").style.display = "flex";  
        });

        // creating a close form button 
        const closeFormButton = document.createElement("div");
        closeFormButton.id = "close-form";
        closeFormButton.textContent = "Close Form";
        flashcardFormContainer.appendChild(closeFormButton);

        //returing to the original page by using addeventlistener() 
        //also hides the form and restores the heading, buttons text
        closeFormButton.addEventListener("click", () => {
            flashcardFormContainer.style.display = "none";
            topicContainerHeading.style.display = "block"; 
            document.querySelector(".topics-container").style.display = "flex"; 
            createTopicButton.style.display = "block";  
        });

//selecting the elements 
    const topicContainerHeading = document.querySelector(".topic-container-heading");
    const topicButtons = document.querySelectorAll(".topic-button");
    const flashcardContainer = document.querySelector(".flashcard-container");
    const flashcard = document.querySelector(".flashcard");
    const flashcardFront = document.querySelector(".card-front");
    const flashcardBack = document.querySelector(".card-back");
    const hintContainer = document.querySelector(".hint-container");
    const nextButton = document.getElementById("next-button");
    const backButton = document.getElementById("back-button");
    const returnButton = document.getElementById("return-button");

    //declaring the topic, flash card and the list
    let currentTopic = "";
    let currentIndex = 0;
    let currentFlashcards = [];

    // Show flashcards when topic button is clicked
    topicButtons.forEach(button => {
        //will add an eventlistener for displaying flash card
        button.addEventListener("click", () => {
            currentTopic = button.textContent;
            currentFlashcards = topics[currentTopic]; //gives the flashcards according to the topic
            currentIndex = 0;
            //this will display the first flash card
            if (currentFlashcards.length > 0) {
                showFlashcard();
            }
            flashcardContainer.style.display = "flex";

            //displaying the buttons which helps in navigating the flash cards
            nextButton.style.display = "inline-block";
            backButton.style.display = "inline-block";
            returnButton.style.display = "inline-block";
            topicContainerHeading.style.display = "none"; //hides the topic selection heading
            document.querySelector(".topics-container").style.display = "none"; // hides the topic-container
            createTopicButton.style.display = "none";   // hides the create flash card button
        });
    });

    //function that wull display the current flash card
    function showFlashcard() {
        const card = currentFlashcards[currentIndex];
        flashcardFront.textContent = card.front; //shows content in front side
        flashcardBack.textContent = card.back; //shows content in back side
        
        //setting  the hint 
        hintContainer.setAttribute("data-hint", card.hint);
    }

    // create a function to flip the flash card
    flashcard.addEventListener("click", () => {
        flashcard.classList.toggle("flipped");
    });

    //create a function for next button to check the next flash card
    nextButton.addEventListener("click", () => {
        if (currentIndex < currentFlashcards.length - 1) {
            currentIndex++;
            showFlashcard();
        }
    });

    // create a function for back button to go to previous flash acrd
    backButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            showFlashcard();
        }
    });

    // create a function for return button so that it goes back to the topic-selection
    returnButton.addEventListener("click", () => {
        //hiding the buttons and flash card when it goes back 
        flashcardContainer.style.display = "none";
        nextButton.style.display = "none";
        backButton.style.display = "none";
        returnButton.style.display = "none";
        //shows the topic selection container with buttons
        topicContainerHeading.style.display = "block";
        document.querySelector(".topics-container").style.display = "flex";
        createTopicButton.style.display = "block";  
    });


});