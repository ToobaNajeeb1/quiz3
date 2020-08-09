let questions = [
   
    {
        id: 1,
        question: "What is the color of strawberry?",
        answer: "Red",
        options: [
            "Pink",
            "Purple",
            "Red",
            "yellow"
        ]
    },



    {
        id: 2,
        question: "Full form of RGB",
        answer: "Red Green Blue",
        options: [
            "Red Green Blue",
            "Red Gray Blue",
            "Red Orange Blue",
            "Red Sky Blue"
        ]

    },
    {
        id: 3,
        question: "What is the color of sky?",
        answer: "Blue",
        options: [
            "Pink",
            "Purple",
            "Blue",
            "yellow"

        ]

    },

    {
        id: 4,
        question: "What is the color of Tree?",
        answer: "Green & Brown",
        options: [
            "Green & Brown",
            "Green & purple",
            "Red & Brown",
            "yellow"

        ]

    },
    {
        id: 5,
        question: "Addition of 2 +2",
        answer: "4",
        options: [
            "1",
            "2",
            "4",
            "5"

        ]

    },


  ];
  
  let question_count = 0;
  let points = 0;
  
  window.onload = function() {
    show(question_count);
  
  };
  
  function next() {
  
     
    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) {
      sessionStorage.setItem("time", time);
      clearInterval(mytime);
      location.href = "end.html";
    }
    console.log(question_count);
  
    let user_answer = document.querySelector("li.option.active").innerHTML;
    // check if the answer is right or wrong
    if (user_answer == questions[question_count].answer) {
      points += 10;
      sessionStorage.setItem("points", points);
    }
    console.log(points);
  
    question_count++;
    show(question_count);
  }
  
  function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;
  
    question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
     <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
  </ul> 
    `;
    toggleActive();
  }
  
  function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  }