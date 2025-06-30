// Preloader
$(function () {
  $(window).on("load", function () {
    $("#loaderContainer").fadeOut("100", function () {
      $(this).remove();
    });
  });
});

setTimeout(function () {
  $("#loaderContainer").fadeOut("100", function () {
    $(this).remove();
  });
}, 7000);


// 
$(document).ready(function () {
  // Cache selectors for better performance
  var sections = $('section'),
    nav = $('.navbar-nav'),
    navHeight = nav.outerHeight();

  // Track scrolling
  $(window).on('scroll', function () {
    var currentPosition = $(this).scrollTop();

    // Loop through each section
    sections.each(function () {
      var top = $(this).offset().top - navHeight,
        bottom = top + $(this).outerHeight();

      // Check if the current scroll position is within this section
      if (currentPosition >= top && currentPosition <= bottom) {
        // Remove active class from all nav-item and nav-link
        nav.find('.nav-item, .nav-link').removeClass('active');

        // Add active class to both the current section's nav-item and nav-link
        var currentLink = nav.find('a[href="#' + $(this).attr('id') + '"]');
        currentLink.addClass('active'); // Add active to nav-link
        currentLink.closest('.nav-item').addClass('active'); // Add active to nav-item
      }
    });
  });
});


//Header Shrink on Scroll
$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $("nav").addClass("shrink");
    $("nav").addClass("shadow");
  } else {
    $("nav").removeClass("shrink");
    $("nav").removeClass("shadow");
  }
});

// ====================Swiper Slider=============
var swiper = new Swiper(".swiper-container", {
  spaceBetween: 30,
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Testimonials carousel (uses the Owl Carousel library)
$(".testimonials-carousel").owlCarousel({
  autoplay: true,
  dots: true,
  loop: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 1,
    },
    900: {
      items: 2,
    },
  },
});
// course details -> course
$(".course-carousel").owlCarousel({
  autoplay: true,
  dots: true,
  loop: true,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1024: {
      items: 3,
    },
    1280: {
      items: 4,
    },
  },
});

//Header Shrink on Scroll
$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $("nav").addClass("shrink");
    $("nav").addClass("shadow");
  } else {
    $("nav").removeClass("shrink");
    $("nav").removeClass("shadow");
  }
});

// ===============img gallery==========
//LightGallery
$("#lightgallery").lightGallery({
  pager: true,
  share: false,
  download: false,
});

// ==============animation==============

//AOS Initialization
AOS.init({
  duration: 1200,
  once: true,
});

new WOW().init();

//Scroll to Top
$(window).scroll(function () {
  if ($(this).scrollTop() >= 50) {
    // If page is scrolled more than 50px
    $(".scroll-top").animate(
      {
        opacity: 1,
      },
      2
    );
  } else {
    $(".scroll-top").animate(
      {
        opacity: 0,
      },
      2
    ); // Else fade out the arrow
  }
});
$(".scroll-top").click(function () {
  // When arrow is clicked
  $("body,html").animate(
    {
      scrollTop: 0, // Scroll to top of body
    },
    500
  );
});

// Courses
$(".python").hover(
  function () {
    $(".pythonImgDiv").toggleClass("plain");
    $(".pythonIcon").css("color", "#F7C93D");
    // $(".pythonImg").css({ "filter": 'brightness(1) invert(0)' });
  },
  function () {
    $(".pythonImgDiv").toggleClass("plain");
    $(".pythonIcon").css("color", "#4488C7");
    // $(".pythonImg").css({ "filter": 'brightness(0) invert(1)' });
  }
);

$(".web").hover(
  function () {
    $(".webImgDiv").toggleClass("plain");
    $(".webIcon").css("color", "#3776AB");
    // $(".pythonImg").css({ "filter": 'brightness(1) invert(0)' });
  },
  function () {
    $(".webImgDiv").toggleClass("plain");
    $(".webIcon").css("color", "#4488C7");
    // $(".pythonImg").css({ "filter": 'brightness(0) invert(1)' });
  }
);

$(".java").hover(
  function () {
    $(".javaImgDiv").toggleClass("plain");
    $(".javaIcon").css("color", "red");
    // $(".pythonImg").css({ "filter": 'brightness(1) invert(0)' });
  },
  function () {
    $(".javaImgDiv").toggleClass("plain");
    $(".javaIcon").css("color", "#4488C7");
    // $(".pythonImg").css({ "filter": 'brightness(0) invert(1)' });
  }
);

$(".cProgramming").hover(
  function () {
    $(".cProgrammingImgDiv").toggleClass("plain");
    $(".cIcon").css("color", "#314A91");
    // $(".pythonImg").css({ "filter": 'brightness(1) invert(0)' });
  },
  function () {
    $(".cProgrammingImgDiv").toggleClass("plain");
    $(".cIcon").css("color", "#4488C7");
    // $(".pythonImg").css({ "filter": 'brightness(0) invert(1)' });
  }
);

$(".graphicDesign").hover(
  function () {
    $(".graphicDesignImgDiv").toggleClass("plain");
    $(".gdIcon").css("color", "#EE3A80");
    // $(".pythonImg").css({ "filter": 'brightness(1) invert(0)' });
  },
  function () {
    $(".graphicDesignImgDiv").toggleClass("plain");
    $(".gdIcon").css("color", "#4488C7");
    // $(".pythonImg").css({ "filter": 'brightness(0) invert(1)' });
  }
);

$(".dataScience").hover(
  function () {
    $(".dataScienceImgDiv").toggleClass("plain");
    $(".dsIcon").css("color", "#846EB0");
    // $(".pythonImg").css({ "filter": 'brightness(1) invert(0)' });
  },
  function () {
    $(".dataScienceImgDiv").toggleClass("plain");
    $(".dsIcon").css("color", "#4488C7");
    // $(".pythonImg").css({ "filter": 'brightness(0) invert(1)' });
  }
);

$(".flutter").hover(
  function () {
    $(".flutterImgDiv").toggleClass("plain");
    $(".flutterIcon").css("color", "#50BBEB");
    // $(".pythonImg").css({ "filter": 'brightness(1) invert(0)' });
  },
  function () {
    $(".flutterImgDiv").toggleClass("plain");
    $(".flutterIcon").css("color", "#4488C7");
    // $(".pythonImg").css({ "filter": 'brightness(0) invert(1)' });
  }
);

$(".wordpress").hover(
  function () {
    $(".wordpressImgDiv").toggleClass("plain");
    $(".wordpressIcon").css("color", "#50BBEB");
    // $(".pythonImg").css({ "filter": 'brightness(1) invert(0)' });
  },
  function () {
    $(".wordpressImgDiv").toggleClass("plain");
    $(".wordpressIcon").css("color", "#4488C7");
    // $(".pythonImg").css({ "filter": 'brightness(0) invert(1)' });
  }
);

$(".dataStructures").hover(
  function () {
    $(".dataStructuresImgDiv").toggleClass("plain");
    $(".dstIcon").css("color", "#ea5e5b");
    // $(".pythonImg").css({ "filter": 'brightness(1) invert(0)' });
  },
  function () {
    $(".dataStructuresImgDiv").toggleClass("plain");
    $(".dstIcon").css("color", "#4488C7");
    // $(".pythonImg").css({ "filter": 'brightness(0) invert(1)' });
  }
);

$(".diploma").hover(
  function () {
    $(".diplomaImgDiv").toggleClass("plain");
    $(".dstIcon").css("color", "#ea5e5b");
    // $(".pythonImg").css({ "filter": 'brightness(1) invert(0)' });
  },
  function () {
    $(".diplomaImgDiv").toggleClass("plain");
    $(".dstIcon").css("color", "#4488C7");
    // $(".pythonImg").css({ "filter": 'brightness(0) invert(1)' });
  }
);

$(".degree").hover(
  function () {
    $(".degreeImgDiv").toggleClass("plain");
    $(".dstIcon").css("color", "#ea5e5b");
    // $(".pythonImg").css({ "filter": 'brightness(1) invert(0)' });
  },
  function () {
    $(".degreeImgDiv").toggleClass("plain");
    $(".dstIcon").css("color", "#4488C7");
    // $(".pythonImg").css({ "filter": 'brightness(0) invert(1)' });
  }
);

// $(document).ready(function () {

//   // PYTHON START
//   $(".python").hover(function () {
//     $('.pythonImg').attr('src', 'assets/img/courses/python1.svg');
//     $(".pythonIcon").css("color", "#F7C93D");
//   }, function () {
//     $('.pythonImg').attr('src', 'assets/img/courses/python.svg');
//     $(".pythonIcon").css("color", "#4488C7");
//   });
//   // PYTHON END

//   // WEB START
//   $(".web").hover(function () {
//     $('.webImg').attr('src', 'assets/img/courses/webCopy.svg');
//     $(".webIcon").css("color", "#3776AB");
//   }, function () {
//     $('.webImg').attr('src', 'assets/img/courses/web.svg');
//     $(".webIcon").css("color", "#4488C7");
//   });
//   // WEB END

//   // JAVA START
//   $(".java").hover(function () {
//     $('.javaImg').attr('src', 'assets/img/courses/java1.svg');
//     $(".javaIcon").css("color", "red");
//   }, function () {
//     $('.javaImg').attr('src', 'assets/img/courses/java.svg');
//     $(".javaIcon").css("color", "#4488C7");
//   });
//   // JAVA END

//   // C START
//   $(".cProgramming").hover(function () {
//     $('.cProgrammingImg').attr('src', 'assets/img/courses/cLangCopy.svg');
//     $(".cIcon").css("color", "#314A91");
//   }, function () {
//     $('.cProgrammingImg').attr('src', 'assets/img/courses/clang.svg');
//     $(".cIcon").css("color", "#4488C7");
//   });
//   // C END

//   // GRAPHIC DESIGN START
//   $(".graphicDesign").hover(function () {
//     $('.graphicDesignImg').attr('src', 'assets/img/courses/graphicDesignCopy.svg');
//     $(".gdIcon").css("color", "#E16B5A");
//   }, function () {
//     $('.graphicDesignImg').attr('src', 'assets/img/courses/graphicDesign.svg');
//     $(".gdIcon").css("color", "#4488C7");
//   });
//   // GRAPHIC DESIGN END

//   // DATA SCIENCE START
//   $(".dataScience").hover(function () {
//     $('.dataScienceImg').attr('src', 'assets/img/courses/dataScienceLogo.png');
//     $(".dsIcon").css("color", "#846EB0");
//   }, function () {
//     $('.dataScienceImg').attr('src', 'assets/img/courses/dataScienceLogoCopy.png');
//     $(".dsIcon").css("color", "#4488C7");
//   });
//   // DATA SCIENCE END

//   // FLUTTER START
//   $(".flutter").hover(function () {
//     $('.flutterImg').attr('src', 'assets/img/courses/flutter.svg');
//     $(".flutterIcon").css("color", "#50BBEB");
//   }, function () {
//     $('.flutterImg').attr('src', 'assets/img/courses/flutterCopy.svg');
//     $(".flutterIcon").css("color", "#4488C7");
//     // FLUTTER END
//   });

//   // WORDPRESS START
//   $(".wordpress").hover(function () {
//     $('.wordpressImg').attr('src', 'assets/img/courses/wordpressCopy.svg');
//     $(".wordpressIcon").css("color", "#50BBEB");
//   }, function () {
//     $('.wordpressImg').attr('src', 'assets/img/courses/wordpress.svg');
//     $(".wordpressIcon").css("color", "#4488C7");
//     // WORDPRESS END
//   });
// });


// COURSE-DETAILS START
$(document).ready(function () {
  const hoverStyles = [{
    color: "#ffd166",
    bgColor: "#fcebc3",
    border: "#ffd166",
  },
  {
    color: "#c8e9a0",
    bgColor: "#eaf6da",
    border: "#c8e9a0",
  },
  {
    color: "#00d8ff",
    bgColor: "#9cf0ff",
    border: "#00d8ff",
  },
  {
    color: "#f7a278",
    bgColor: "#fbded0",
    border: "#f7a278",
  },
  {
    color: "#f44336",
    bgColor: "#fabcb9",
    border: "#f44336",
  },
  {
    color: "#008037",
    bgColor: "#a5d2b9",
    border: "#008037",
  },
  {
    color: "#5b42ef",
    bgColor: "#8b8af3",
    border: "#5b42ef",
  },
  {
    color: "#f048a3",
    bgColor: "#ff8bca",
    border: "#f048a3",
  },
  {
    color: "#dc9d00",
    bgColor: "#dc9e00b2",
    border: "#dc9d00",
  }
  ];

  for (let i = 1; i <= hoverStyles.length; i++) {
    const hoverStyle = hoverStyles[i - 1];
    const cardSelector = `.other-course-card-${i}`;

    $(cardSelector).hover(
      function () {
        const $this = $(this);
        $this.find(".rounded-circle, span, ul li i").css("color", hoverStyle.color);
        $this.find(".rounded-circle").css("background", hoverStyle.bgColor);
        $this.css({
          "border-bottom": `5px solid ${hoverStyle.border}`,
        });
      },
      function () {
        const $this = $(this);
        $this.find(".rounded-circle, span, ul li i").css("color", "#4488c7");
        $this.find(".rounded-circle").css("background", "#5fc8db");
        $this.css({
          "border-bottom": "5px solid #4488c7",
        });
      }
    );
  }
});
// COURSE-DETAILS END

// Course Details Navbar Start
$(document).ready(function () {
  $('a.nav-link').on('click', function (event) {
    var target = this.hash;
    if ($(target).length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 800, function () {
        window.location.hash = target;
      });
    } else {
      window.location.href = 'index-3.html' + target;
    }
  });
});
// Course Details Navbar End


// Enroll Now Form Start
// $(document).ready(function () {
//   $('.enroll-now-form').submit(function (event) {
//     event.preventDefault();

//     var name = $('#name').val();
//     var number = $('#number').val();
//     var email = $('#email').val();

//     // Reset validation messages
//     $('.validate').html('');

//     var isValid = true;

//     // Validate name
//     if (name.length < 3) {
//       $('#name').siblings('.validate').html('Name should be at least 3 characters long.');
//       isValid = false;
//     }

//     // Validate contact number
//     if (number.length < 10 && number.trim() === '') {
//       $('#number').siblings('.validate').html('number cannot be blank.');
//       isValid = false;
//     }

//     // Validate email if name is less than 3 characters
//     if (email.length < 3 && email.trim() === '') {
//       $('#email').siblings('.validate').html('Email cannot be blank.');
//       isValid = false;
//     }

//     // If all validations pass, submit the form
//     if (isValid) {
//       this.submit();
//     }
//   });
// });
// Enroll Now Form End

// Course Details Sidebar Start
document.addEventListener("DOMContentLoaded", function () {
  // Get the list-group and all list items
  var listGroup = document.getElementById("list-tab");
  var listItems = listGroup.getElementsByClassName("list-group-item");

  // Function to handle click events on list items
  function handleItemClick(event) {
    // Prevent the default behavior of the anchor link
    event.preventDefault();

    // Remove "active" class from all list items
    for (var i = 0; i < listItems.length; i++) {
      listItems[i].classList.remove("active");
    }

    // Add "active" class to the clicked list item
    this.classList.add("active");

    // Scroll to the corresponding section
    var targetId = this.getAttribute("href").substring(1);
    var targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Attach click event listeners to list items
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", handleItemClick);
  }

  // Function to determine if an element is in the viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to set the active class based on the section in the viewport
  function setActiveSection() {
    for (var i = 0; i < listItems.length; i++) {
      var targetId = listItems[i].getAttribute("href").substring(1);
      var targetSection = document.getElementById(targetId);

      if (targetSection && isElementInViewport(targetSection)) {
        // Remove "active" class from all list items
        for (var j = 0; j < listItems.length; j++) {
          listItems[j].classList.remove("active");
        }

        // Add "active" class to the corresponding list item
        listItems[i].classList.add("active");
        break; // Exit the loop after finding the active section
      }
    }
  }

  // Attach scroll event listener to set the active section during scrolling
  window.addEventListener("scroll", setActiveSection);

  // Initial check for active section
  setActiveSection();
});
// Course Details Sidebar End




// Quiz Start
document.addEventListener('DOMContentLoaded', function () {
  const questions = document.querySelectorAll('.question-card');
  const options = document.querySelectorAll('.answer-card');
  let currentStep = 0;
  let formSubmitted = false;
  const timeLimitInMinutes = 3;
  let timeLimitInSeconds = timeLimitInMinutes * 60;
  const timerElement = document.getElementById('timer');
  const circle = document.getElementById('circle');
  const circumference = 2 * Math.PI * parseFloat(circle.getAttribute('r'));
  const timerInterval = setInterval(updateTimer, 1000);
  let score = 0;

  // Add click event listeners to each option
  options.forEach(option => {
    option.addEventListener('click', () => handleOptionClick(option));
  });

  // Add data attribute to each option to store whether it is correct or not
  options.forEach(option => {
    const isCorrect = option.classList.contains('correct');
    option.setAttribute('data-correct', isCorrect);
  });

  // Function to handle option click
  function handleOptionClick(selectedOption) {
    // Check if the selected option is already selected
    const isSelected = selectedOption.classList.contains('selected');
    if (isSelected) {
      return; // Do nothing if the option is already selected
    }

    resetOptionBorders();

    const isCorrect = selectedOption.getAttribute('data-correct') === 'true';
    handleAnswerFeedback(selectedOption, isCorrect);
    updateScore(isCorrect);

    // Disable options and add pointer-events: none to all answer cards of the current question
    disableOptions(selectedOption);
    selectedOption.classList.add('selected');
  }

  // Function to handle the feedback for the selected answer
  function handleAnswerFeedback(selectedOption, isCorrect) {
    const color = isCorrect ? '#5cb85c' : '#d9534f';
    const backgroundColor = isCorrect ? '#dff0d8' : '#f2dede';

    selectedOption.style.border = `2px solid ${color}`;
    selectedOption.style.backgroundColor = backgroundColor;

    if (!isCorrect) {
      // Find and mark the correct option as green
      const correctOption = selectedOption.closest('.question-card').querySelector('.correct');
      correctOption.style.border = `2px solid #5cb85c`;
      correctOption.style.backgroundColor = '#dff0d8';
    }
  }

  // Function to update and display the score
  function updateScore(isCorrect) {
    if (isCorrect) {
      score += 1;
      updateScoreDisplay();
    }
  }

  // Function to update the score display
  function updateScoreDisplay() {
    const scoreElements = document.querySelectorAll('.player-score');
    const scoreText = `Score ${score}/${questions.length}`;

    scoreElements.forEach(scoreElement => {
      scoreElement.textContent = scoreText;
    });
  }

  // Function to reset borders of all options
  function resetOptionBorders() {
    options.forEach(option => {
      option.classList.remove('selected');
      option.style.border = '2px solid #80808080';
    });
  }

  // Function to disable options only within the current question
  function disableOptions(clickedOption) {
    const currentQuestionCard = clickedOption.closest('.question-card');
    const optionsWithinCurrentQuestion = currentQuestionCard.querySelectorAll('.answer-card');

    optionsWithinCurrentQuestion.forEach(option => {
      if (option !== clickedOption) {
        option.style.pointerEvents = 'none';
        option.style.opacity = '0.5';
      }
    });
  }

  // Function to reset all options to the initial state
  function resetOptions() {
    options.forEach(option => {
      option.style.pointerEvents = 'auto';
      option.style.opacity = '1';
      option.style.border = '2px solid #80808080';
    });
  }

  // Function to handle the timer update
  function updateTimer() {
    timeLimitInSeconds--;

    if (timeLimitInSeconds < 0) {
      timerElement.textContent = '00:00';
      clearInterval(timerInterval);
      handleTimeUp();
      return;
    }

    const minutes = Math.floor(timeLimitInSeconds / 60);
    const seconds = timeLimitInSeconds % 60;

    timerElement.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    updateProgress();
  }

  // Function to handle the timer progress update
  function updateProgress() {
    const remainingPercentage = (timeLimitInSeconds / (timeLimitInMinutes * 60)) * 100;
    const dashoffset = circumference * (1 - remainingPercentage / 100);
    circle.style.strokeDashoffset = dashoffset;

    const hue = (remainingPercentage / 100) * 120;
    circle.style.stroke = `hsl(${hue}, 100%, 50%)`;
  }

  // Function to handle the time up scenario
  function handleTimeUp() {
    handleSubmissionResult();
  }

  // Function to handle the submission result
  function handleSubmissionResult() {
    if (formSubmitted) {
      return;
    }

    formSubmitted = true;

    const passThreshold = 5; // Change this threshold as needed

    // Swal.fire({
    //   icon: score >= passThreshold ? 'success' : 'error',
    //   title: score >= passThreshold ? 'Congratulations! You Passed!' : 'Sorry, You Failed!',
    //   html: `Your score is ${score}/${questions.length}.<br>${score >= passThreshold ? 'Well done!' : 'Better luck next time.'}`,
    //   confirmButtonText: 'OK'
    // });

    // Disable all options after submission
    options.forEach(option => {
      option.style.pointerEvents = 'none';
      option.style.opacity = '0.5';
    });
  }

  // Function to show the current step
  function showStep(step) {
    questions.forEach((question, index) => {
      question.style.display = index === step ? 'block' : 'none';
    });

    const prevButton = document.querySelector('#prev-btn');
    const nextButton = document.querySelector('#next-btn');
    const submitButton = document.querySelector('#submit-btn');

    if (step === 0) {
      prevButton.style.display = 'none';
      nextButton.style.display = 'block';
      submitButton.style.display = 'none';
    } else if (step === questions.length - 1) {
      prevButton.style.display = 'block';
      nextButton.style.display = 'none';
      submitButton.style.display = 'block';
    } else {
      prevButton.style.display = 'block';
      nextButton.style.display = 'block';
      submitButton.style.display = 'none';
    }
  }

  // Function to handle the next button click
  window.handleNextButtonClick = function () {
    if (currentStep < questions.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  };

  // Function to handle the previous button click
  window.handlePrevButtonClick = function () {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  };

  // Function to handle the submit button click
  window.handleSubmitButtonClick = function () {
    if (!formSubmitted) {
      formSubmitted = true;
      const passThreshold = 5; // Change this threshold as needed

      // Check if the user passed or failed
      const passStatus = score >= passThreshold;

      // Hide the quiz-main-div and show the quiz-result-container
      document.querySelector('.quiz-main-div').style.display = 'none';
      document.querySelector('.quiz-result-container').style.display = 'block';

      // Show the appropriate result container based on passStatus
      if (passStatus) {
        document.querySelector('.quiz-passed-container').style.display = 'block';
        document.querySelector('.quiz-failed-container').style.display = 'none';
      } else {
        document.querySelector('.quiz-passed-container').style.display = 'none';
        document.querySelector('.quiz-failed-container').style.display = 'block';
      }

      // Update the result content (e.g., score display) as needed
      const resultScoreElement = document.querySelector('.result-score');
      resultScoreElement.textContent = `Your score is ${score}/${questions.length}.`;

      // Additional logic or customization can be added here
    }
  };

});


// Chatbot
$("#msgForm").submit(function (e) {
  e.preventDefault();
  if ($('#messageBox').val() != '') {
    var time = new Date();
    time = time.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
    $message = `<div class="msg-card-receiver mb-3 d-flex justify-content-end">
                            <div class="message-receiver">` + $('#messageBox').val() + `<div class="time">` + time + `</div>
                            </div><img loading="lazy" src="bot/assets/image/avatar.html">
                        </div>`;
    $(".card-body").append($message)
    $(".card-body").append(`<div class="msg-card-sender mb-3 d-flex typing-card">
                                    <img loading="lazy" src="bot/assets/image/logo.html">
                                    <div class="message-sender text-muted"><i>Typing...</i></div>
                                  </div>`)
    $('#messageBox').val('');
    $('.card-body').animate({
      scrollTop: 9999
    }, 'slow');
    $.ajax({
      type: "POST",
      url: "bot/chat.php",
      // url: "chat.php",
      data: {
        message: $message
      },
      success: function (response) {
        $reply = `<div class="msg-card-sender mb-3 d-flex">
                        <img loading="lazy" src="bot/assets/image/logo.html">
                        <div class="message-sender">` + response + `<div class="time">` + time + `</div>
                        </div>
                      </div>`
        $(".typing-card").remove();
        $(".card-body").append($reply)
        $('.card-body').animate({
          scrollTop: 9999
        }, 'slow');
      }
    });
  }
})

$(document).ready(function () {
  $('.chatbot-icon').click(function () {
    var chatbotMainSec = $('.chatbot-main-sec');
    var buttonIcon = $(this).find('i');

    chatbotMainSec.slideToggle('slow', function () {
      if ($(this).is(':visible')) {
        // Chatbot section is now visible
        buttonIcon.fadeOut('fast', function () {
          $(this).removeClass('fa-regular fa-comments').addClass('fas fa-times').fadeIn('slow');
        });
      } else {
        // Chatbot section is now hidden
        buttonIcon.fadeOut('fast', function () {
          $(this).removeClass('fas fa-times').addClass('fa-regular fa-comments').fadeIn('slow');
        });
      }
    });
  });
  $('.chatbot-icon').click(function () {
    toggleChatbot();
  });
});

// Click event outside chatbot section to close it
$(document).on('click', function (event) {
  if (!$(event.target).closest('.chatbot-main-sec').length && !$(event.target).closest('.chatbot-icon').length) {
    $('.chatbot-main-sec').slideUp('slow');
    $('.chatbot-icon i').removeClass('fa-solid fa-x').addClass('far fa-comments');
  }
});

// 
$(document).ready(function () {
  $('.key-highlight ul.infoGraphic li .content h2').hover(
    function () {
      $(this).closest('li').find('.number').css('position', 'relative').animate({
        'top': '-20px',
        'left': '-20px',
        'opacity': 1
      }, 300);
    },
    function () {
      $(this).closest('li').find('.number').animate({
        'top': '0px',
        'left': '0px',
        'opacity': 0.8
      }, 300);
    }
  );
});

// 
$(document).ready(function () {
  $("#toggle-btn").click(function () {
    $(".sidebar-col").toggleClass("col-lg-1 sidebar-hidden");
    $(".main-col").toggleClass("col-lg-11 col-lg-12");
  });
});








// Contact Email Send
$(document).ready(function () {
  // Handle form submission for any form containing .secureKey
  $('form:has(.secureKey)').on('submit', function (e) {
    e.preventDefault();
    const form = $(this);
    const loader = form.find('.form-spinner-wrapper');
    const msg = form.find('.form-response-message');

    loader.show();
    msg.hide().empty();

    $.ajax({
      type: 'POST',
      url: 'required/send-mail',
      data: form.serialize(),
      dataType: 'json',
      success: function (response) {
        msg.text(response.message)
          .css({
            color: response.status === 'success' ? 'green' : 'red',
            display: 'block'
          })
          .fadeIn();

        if (response.status === 'success') {
          form[0].reset();
        }
      },
      error: function (xhr) {
        const errorMsg = xhr.responseJSON && xhr.responseJSON.message
          ? xhr.responseJSON.message
          : "Server error. Please try again later.";

        msg.text(errorMsg)
          .css({
            color: 'red',
            display: 'block'
          })
          .fadeIn();
      },
      complete: function () {
        loader.hide();
        setTimeout(() => msg.fadeOut(), 4000);
      }
    });
  });
});