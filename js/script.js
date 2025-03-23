document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.querySelector(".nav-menu");

  mobileMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Modal Functionality
  const loginModal = document.getElementById("login-modal");
  const signupModal = document.getElementById("signup-modal");
  const loginBtn = document.querySelector(".btn-login");
  const signupBtn = document.querySelector(".btn-signup");
  const closeBtns = document.querySelectorAll(".close");
  const switchToSignup = document.getElementById("switch-to-signup");
  const switchToLogin = document.getElementById("switch-to-login");

  // Open Login Modal
  loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    loginModal.classList.add("active");
    signupModal.classList.remove("active");
  });

  // Open Signup Modal
  signupBtn.addEventListener("click", function (e) {
    e.preventDefault();
    signupModal.classList.add("active");
    loginModal.classList.remove("active");
  });

  // Close Modals
  closeBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      loginModal.classList.remove("active");
      signupModal.classList.remove("active");
    });
  });

  // Switch from Login to Signup
  switchToSignup.addEventListener("click", function (e) {
    e.preventDefault();
    loginModal.classList.remove("active");
    signupModal.classList.add("active");
  });

  // Switch from Signup to Login
  switchToLogin.addEventListener("click", function (e) {
    e.preventDefault();
    signupModal.classList.remove("active");
    loginModal.classList.add("active");
  });

  // Close Modals When Clicking Outside
  window.addEventListener("click", function (e) {
    if (e.target === loginModal) {
      loginModal.classList.remove("active");
    }
    if (e.target === signupModal) {
      signupModal.classList.remove("active");
    }
  });

  // Handle Signup Form Submission
  const signupForm = document.querySelector("#signup-modal form");
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email-signup").value;
    const password = document.getElementById("password-signup").value;

    // Basic validation
    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // Store user data in local storage
    const user = { name, email, password };
    localStorage.setItem(email, JSON.stringify(user));

    // Redirect to login modal
    signupModal.classList.remove("active");
    loginModal.classList.add("active");
  });

  // Handle Login Form Submission
  const loginForm = document.querySelector("#login-modal form");
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Basic validation
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // Retrieve user data from local storage
    const user = JSON.parse(localStorage.getItem(email));

    if (user && user.password === password) {
      // Successful login
      updateNavbar(user.name);
      loginModal.classList.remove("active");
    } else {
      alert("Invalid email or password.");
    }
  });

  // Update Navbar After Login
  function updateNavbar(username) {
    const navMenu = document.querySelector(".nav-menu");
    const loginBtn = document.querySelector(".btn-login");
    const signupBtn = document.querySelector(".btn-signup");

    // Replace login and signup buttons with username and logout button
    navMenu.innerHTML = `
            <li><a href="index.html">Flashcard Study</a></li>
            <li><a href="flashcard.html">Flashcard</a></li>
            <li><a href="quiz.html">Quiz</a></li>
            <li><a href="#">Stats</a></li>
            <li><a href="#" class="btn-login">${username}</a></li>
            <li><a href="#" class="btn-signup" id="logout-btn">Logout</a></li>
        `;

    // Add logout functionality
    const logoutBtn = document.getElementById("logout-btn");
    logoutBtn.addEventListener("click", function (e) {
      e.preventDefault();
      localStorage.removeItem("loggedInUser");
      window.location.reload(); // Refresh the page to reset the navbar
    });
  }

  // Check if a user is already logged in
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    const user = JSON.parse(loggedInUser);
    updateNavbar(user.name);
  }

  // Enhanced Flashcard Functionality
  const cards = document.querySelectorAll(".card");

  // Function to handle card flip
  function handleCardFlip(card) {
    const cardInner = card.querySelector(".card-inner");
    cardInner.style.transform =
      cardInner.style.transform === "rotateY(180deg)" ? "" : "rotateY(180deg)";
  }

  // Add event listeners to all cards
  cards.forEach((card) => {
    // For mobile: click to flip
    if (window.innerWidth < 768) {
      card.addEventListener("click", function () {
        handleCardFlip(this);
      });
    }
    // For desktop: hover functionality is in CSS, but add click option too
    else {
      card.addEventListener("click", function () {
        handleCardFlip(this);
      });
    }
  });

  // Demo flashcard data
  const flashcardData = [
    {
      question: "What is JavaScript?",
      answer: "A programming language that enables interactive web pages.",
    },
    {
      question: "What is the capital of Canada?",
      answer:
        "Ottawa",
    },
    {
      question: "Who discovered penicillin?",
      answer: "Alexander Fleming",
    },
    {
      question: "Which animated movie features a character named Simba?",
      answer: "The Lion King",
    },
    {
      question: "What is the real name of the superhero Batman?",
      answer:
        "Bruce Wayne",
    },
  ];

  // Demo flashcard auto-cycling
  const demoCard = document.querySelector(".card-demo .card");
  if (demoCard) {
    const cardInner = demoCard.querySelector(".card-inner");
    const cardFront = demoCard.querySelector(".card-front");
    const cardBack = demoCard.querySelector(".card-back");
    let currentIndex = 0;
    let isFlipped = false;

    // Function to update card content
    function updateCardContent(index) {
      cardFront.textContent = flashcardData[index].question;
      cardBack.textContent = flashcardData[index].answer;
    }

    // Flip the card and change content when flipped back
    setInterval(() => {
      if (isFlipped) {
        // Card is currently showing answer, flip back and change question
        cardInner.style.transform = "";
        isFlipped = false;

        // After flipping back, wait a moment and change the question
        setTimeout(() => {
          currentIndex = (currentIndex + 1) % flashcardData.length;
          updateCardContent(currentIndex);
        }, 500);
      } else {
        // Card is showing question, flip to answer
        cardInner.style.transform = "rotateY(180deg)";
        isFlipped = true;
      }
    }, 3000);
  }

  // How It Works button functionality
  const howItWorksBtn = document.getElementById("how-it-works-btn");
  if (howItWorksBtn) {
    howItWorksBtn.addEventListener("click", function () {
      // Smooth scroll to features section
      const featuresSection = document.querySelector(".features");
      featuresSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});
