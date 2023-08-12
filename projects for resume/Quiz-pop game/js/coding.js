let Coding= [
    {
      id: 21,
      ques: "What is the correct syntax for an if statement in Python?",
      options: ["if (condition):", "if condition", "if: condition", "if condition:"],
      answer: "option1",
      category: "coding"
    },
    {
      id: 22,
      ques: "Which of the following is not a data type in JavaScript?",
      options: ["String", "Number", "Boolean", "ArrayList"],
      answer: "option4",
      category: "coding"
    },
    {
      id: 23,
      ques: "Which of the following is used to declare a variable in Java?",
      options: ["var", "let", "const", "int"],
      answer: "option4",
      category: "coding"
    },
    {
      id: 24,
      ques: "What is the correct syntax for a for loop in C#?",
      options: ["for i = 0 to 10", "for (i = 0; i <= 10; i++)", "for (int i = 0; i <= 10)", "for i in range(0, 10)"],
      answer: "option2",
      category: "coding"
    },
    {
      id: 25,
      ques: "Which of the following is not a looping structure in PHP?",
      options: ["while", "for", "do-while", "foreach"],
      answer: "option4",
      category: "coding"
    },
    {
      id: 26,
      ques: "Which of the following is not a valid operator in C++?",
      options: ["+", "-", "*", "$"],
      answer: "option4",
      category: "coding"
    },
    {
      id: 27,
      ques: "In which programming language is 'print' used for displaying output?",
      options: ["Python", "JavaScript", "Java", "C++"],
      answer: "option1",
      category: "coding"
    },
    {
      id: 28,
      ques: "What is the correct syntax for a function in Ruby?",
      options: ["function name()", "def name", "function name", "def name()"],
      answer: "option2",
      category: "coding"
    },
    {
      id: 29,
      ques: "Which of the following is not a type of variable in Swift?",
      options: ["Int", "String", "Double", "Object"],
      answer: "option4",
      category: "coding"
    },
    {
      id: 30,
      ques: "In which programming language is '#' used for commenting?",
      options: ["Python", "JavaScript", "Java", "C++"],
      answer: "option4",
      category: "coding"
    }
  ];
let codingButton=document.getElementById("codingButton");
let codingAnchor=document.getElementById("codingPageAnchor");
let scoreCardCoding = document.getElementById("scoreCard");
let codingScore = document.getElementById("codingScore");
let questionCoding = document.querySelector("#ques");
let option1Coding = document.querySelector("#option1Label");
let option2Coding = document.querySelector("#option2Label");
let option3Coding = document.querySelector("#option3Label");
let option4Coding = document.querySelector("#option4Label");
let nextBtnCoding = document.querySelector("#submit");
let previousBtnCoding = document.querySelector("#previous");
let finalSubmitBtnCoding = document.querySelector("#showScore");
let answersCoding = document.querySelectorAll(".answer");
let chosenValueArrayCoding=JSON.parse(localStorage.getItem("chosenValueArray_Coding")||"[]");
localStorage.setItem("value_Coding",Number(localStorage.value_Coding)||0);
localStorage.setItem("score_coding",Number(localStorage.score_coding)||0);
localStorage.setItem("final_coding",Number(localStorage.final_coding)||0);//add this line


function loadQuestion(){
  let counterNum = Number(localStorage.getItem("value_Coding"));
  const questionList = Coding[counterNum];
  questionCoding.innerHTML=questionList.ques;
  option1Coding.innerHTML=questionList.options[0];
  option2Coding.innerHTML=questionList.options[1];
  option3Coding.innerHTML=questionList.options[2];
  option4Coding.innerHTML=questionList.options[3];
}

function getCheckAnswer(){
  let chosenAnswer=null;
  answersCoding.forEach((currentAnswerElement)=>{
      if(currentAnswerElement.checked){
          chosenAnswer=currentAnswerElement.id;
      }
  });
  return chosenAnswer;
}
function deselectAll(){
  answersCoding.forEach((currentAnswerElement)=>{currentAnswerElement.checked=false;});
}

function nextQuestion(){
  let counterNum = Number(localStorage.getItem("value_Coding"));
  let score = Number(localStorage.getItem("score_coding"));
  const checkedAnswer = getCheckAnswer();
  let y = chosenValueArrayCoding[counterNum];
  if(y==null||y==undefined){
    document.getElementById("option1").disabled=false;
    document.getElementById("option2").disabled=false;
    document.getElementById("option3").disabled=false;
    document.getElementById("option4").disabled=false;
      if(checkedAnswer===Coding[counterNum].answer){
          score=score+1;
          localStorage.setItem("score_coding", score);
      }
    chosenValueArrayCoding[counterNum]=checkedAnswer;
  }
  else {
    document.getElementById("option1").disabled=true;
    document.getElementById("option2").disabled=true;
    document.getElementById("option3").disabled=true;
    document.getElementById("option4").disabled=true;
  }
  if(counterNum===9||counterNum>9){
    counterNum=9;
    localStorage.setItem("value_Coding",counterNum);
    //nextBtn
    finalSubmitBtnCoding.classList.remove("showScore");
    nextBtnCoding.classList.add("showScore");
  }
  else {
    localStorage.value_Coding=Number(localStorage.value_Coding)+1;
    previousBtnCoding.classList.remove("showScore");//this Line
    finalSubmitBtnCoding.classList.add("showScore");//thisLine
    counterNum++;
  }
  localStorage.setItem("chosenValueArray_Coding",JSON.stringify(chosenValueArrayCoding));
  deselectAll();
  loadQuestion();
  if(y!=null||y!=undefined){
    document.getElementById("option1").disabled=true;
    document.getElementById("option2").disabled=true;
    document.getElementById("option3").disabled=true;
    document.getElementById("option4").disabled=true;
  }
}

function previousQuestion(){
  if(Number(localStorage.value_Coding)===0|| Number(localStorage.value_Coding)<0){
    localStorage.value_Coding = 0;
    previousBtnCoding.classList.add("showScore");
  }
  else{
    localStorage.value_Coding--;
    //add this-->
    nextBtnCoding.classList.remove("showScore");
    // add this 
    finalSubmitBtnCoding.classList.add("showScore");
  }
  let counterNum = Number(localStorage.getItem("value_Coding"));
  if(chosenValueArrayCoding[counterNum]==null|| chosenValueArrayCoding[counterNum]==undefined){
    document.getElementById("option1").disabled=false;
    document.getElementById("option2").disabled=false;
    document.getElementById("option3").disabled=false;
    document.getElementById("option4").disabled=false;
  }
  else {
      document.getElementById("option1").disabled=true;
      document.getElementById("option2").disabled=true;
      document.getElementById("option3").disabled=true;
      document.getElementById("option4").disabled=true;
    }
  deselectAll();
  loadQuestion();
}
function loadingWebsite(){
  deselectAll();
  loadQuestion();
  let counterNum = Number(localStorage.getItem("value_Coding"));
  if(chosenValueArrayCoding[counterNum]==null|| chosenValueArrayCoding[counterNum]==undefined){
    document.getElementById("option1").disabled=false;
    document.getElementById("option2").disabled=false;
    document.getElementById("option3").disabled=false;
    document.getElementById("option4").disabled=false;
  }
  else {
      document.getElementById("option1").disabled=true;
      document.getElementById("option2").disabled=true;
      document.getElementById("option3").disabled=true;
      document.getElementById("option4").disabled=true;
    }
}
function showScore(){
    let final_coding = Number(localStorage.final_coding);
    if(final_coding===0){
      localStorage.setItem("final_coding", 1);
      codingScore.innerHTML=Number(localStorage.score_coding);
      codingAnchor.setAttribute("href","index.html");
      codingButton.disabled=true;
    }
    else if(final_coding===1){
      codingScore.innerHTML=Number(localStorage.score_coding);
      codingAnchor.setAttribute("href","index.html");
      codingButton.disabled=true;
    }
    
    scoreCardCoding.classList.remove("scoreCard");
}