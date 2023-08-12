let music = [
  {
    id: 1,
    ques: "Which of the following is not a type of music notation?",
    options: ["Standard notation", "Tab notation", "Morse code notation", "Graphics notation"],
    answer: "option3",
    category: "music"
  },
  {
    id: 2,
    ques: "What is the most common time signature in classical music?",
    options: ["3/4", "4/4", "5/4", "6/8"],
    answer: "option2",
    category: "music"
  },
  {
    id: 3,
    ques: "Which of the following is not a type of instrument in a symphony orchestra?",
    options: ["Violin", "Piano", "Harp", "Theremin"],
    answer: "option4",
    category: "music"
  },
  {
    id: 4,
    ques: "What is the most common key in pop music?",
    options: ["C Major", "G Major", "D Major", "A Major"],
    answer: "option1",
    category: "music"
  },
  {
    id: 5,
    ques: "Which of the following is not a type of chord?",
    options: ["Major", "Minor", "Diminished", "Flat"],
    answer: "option4",
    category: "music"
  },
  {
    id: 6,
    ques: "Which of the following is not a type of music genre?",
    options: ["Jazz", "Blues", "Rock", "Applesauce"],
    answer: "option4",
    category: "music"
  },
  {
    id: 7,
    ques: "Which of the following is not a type of music theory?",
    options: ["Harmony", "Counterpoint", "Form", "Cooking"],
    answer: "option4",
    category: "music"
  },
  {
    id: 8,
    ques: "What is the most common tempo marking in classical music?",
    options: ["Allegro", "Andante", "Adagio", "Moderato"],
    answer: "option1",
    category: "music"
  },
  {
    id: 9,
    ques: "Which of the following is not a type of musical form?",
    options: ["Sonata", "Symphony", "Concerto", "Spaghetti"],
    answer: "option4",
    category: "music"
  },
  {
    id: 10,
    ques: "Which of the following is not a type of music notation software?",
    options: ["Sibelius", "Finale", "MuseScore", "Microsoft Word"],
    answer: "option4",
    category: "music"
  }
];
// from below 
let musicButton=document.querySelector("#musicButton");
let musicAnchor=document.querySelector("#musicPageAnchor");
let scoreCardMusic = document.querySelector("#scoreCard");
let musicScore = document.querySelector("#musicScore");
//upto above
let question = document.querySelector("#ques");
let option1 = document.querySelector("#option1Label");
let option2 = document.querySelector("#option2Label");
let option3 = document.querySelector("#option3Label");
let option4 = document.querySelector("#option4Label");
let nextBtn = document.querySelector("#submit");
let previousBtn = document.querySelector("#previous");
let finalSubmitBtn = document.querySelector("#showScore");//add this line
let answers = document.querySelectorAll(".answer");
let chosenValueArray=JSON.parse(localStorage.getItem("chosenValueArray_Music")||"[]");
localStorage.setItem("value_Music",Number(localStorage.value_Music)||0);
localStorage.setItem("score_Music",Number(localStorage.score_Music)||0);
localStorage.setItem("final_Music",Number(localStorage.final_Music)||0);//add this line


function loadQuestion(){
  let counterNum = Number(localStorage.getItem("value_Music"));
  const questionList = music[counterNum];
  question.innerHTML=questionList.ques;
  option1.innerHTML=questionList.options[0];
  option2.innerHTML=questionList.options[1];
  option3.innerHTML=questionList.options[2];
  option4.innerHTML=questionList.options[3];
  
}

function getCheckAnswer(){
  let chosenAnswer=null;
  answers.forEach((currentAnswerElement)=>{
      if(currentAnswerElement.checked){
          chosenAnswer=currentAnswerElement.id;
      }
  });
  return chosenAnswer;
}
function deselectAll(){
  answers.forEach((currentAnswerElement)=>{currentAnswerElement.checked=false;});
}

function nextQuestion(){
  let counterNum = Number(localStorage.getItem("value_Music"));
  let score = Number(localStorage.getItem("score_Music"));
  const checkedAnswer = getCheckAnswer();
  let y = chosenValueArray[counterNum];
  if(y==null||y==undefined){
    document.getElementById("option1").disabled=false;
    document.getElementById("option2").disabled=false;
    document.getElementById("option3").disabled=false;
    document.getElementById("option4").disabled=false;
      if(checkedAnswer===music[counterNum].answer){
          score=score+1;
          localStorage.setItem("score_Music", score);
      }
    chosenValueArray[counterNum]=checkedAnswer;
  }
  else {
    document.getElementById("option1").disabled=true;
    document.getElementById("option2").disabled=true;
    document.getElementById("option3").disabled=true;
    document.getElementById("option4").disabled=true;
  }
  if(counterNum===9||counterNum>9){
    counterNum=9;
    localStorage.setItem("value_Music",counterNum);
    //add these lines below
    finalSubmitBtn.classList.remove("showScore");
    nextBtn.classList.add("showScore");
  }
  else {
    localStorage.value_Music=Number(localStorage.value_Music)+1;
    previousBtn.classList.remove("showScore");//this Line
    finalSubmitBtn.classList.add("showScore");//thisLine
    counterNum++;
  }
  localStorage.setItem("chosenValueArray_Music",JSON.stringify(chosenValueArray));
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
  if(Number(localStorage.value_Music)===0|| Number(localStorage.value_Music)<0){
    localStorage.value_Music = 0;
    //add this--->
    previousBtn.classList.add("showScore");
  }
  else{
    localStorage.value_Music--;
    //add this-->
    nextBtn.classList.remove("showScore");
    // add this 
    finalSubmitBtn.classList.add("showScore");
  }
  let counterNum = Number(localStorage.getItem("value_Music"));
  if(chosenValueArray[counterNum]==null|| chosenValueArray[counterNum]==undefined){
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
  let counterNum = Number(localStorage.getItem("value_Music"));
  if(chosenValueArray[counterNum]==null|| chosenValueArray[counterNum]==undefined){
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
//add this also-->
function showScore(){
  let final_Music = Number(localStorage.final_Music);
  if(final_Music===0){
    localStorage.setItem("final_Music", 1);
    musicScore.innerHTML=Number(localStorage.score_Music);
    musicAnchor.setAttribute("href","index.html");
    musicButton.disabled=true;
  }
  else if(final_Music===1){
    musicScore.innerHTML=Number(localStorage.score_Music);
    musicAnchor.setAttribute("href","index.html");
    musicButton.disabled=true;
  }
  scoreCardMusic.classList.remove("scoreCard");
}
