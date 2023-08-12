let modernArt= [
    {
      id: 11,
      ques: "Which artist is known for coining the term 'Surrealism'?",
      options: ["Pablo Picasso", "Salvador Dali", "Vincent van Gogh", "Henri Matisse"],
      answer: "option2",
      category: "modern-art"
    },
    {
     id: 12,
     ques: "Which movement is associated with the use of abstract forms and shapes in art?",
     options: ["Impressionism", "Expressionism", "Futurism", "Cubism"],
     answer: "option4",
     category: "modern-art"
    },
    {
      id: 13,
      ques: "Which artist is known for painting the work 'The Persistence of Memory'?",
      options: ["Pablo Picasso", "Salvador Dali", "Vincent van Gogh", "Henri Matisse"],
      answer: "option2",
      category: "modern-art"
    },
    {
      id: 14,
      ques: "Which artist is known for creating the painting 'The Scream'?",
      options: ["Vincent van Gogh", "Salvador Dali", "Edvard Munch", "Claude Monet"],
      answer: "option3",
      category: "modern-art"
    },
    {
      id: 15,
      ques: "What movement was associated with the use of bold, bright colors and thick brushstrokes?",
      options: ["Impressionism", "Expressionism", "Fauvism", "Cubism"],
      answer: "option3",
      category: "modern-art"
    },
    {
      id: 16,
      ques: "What movement was associated with the use of bright colors, simplified forms, and a focus on movement and speed",
      options: ["Impressionism", "Futurism", "Surrealism", "Abstract Expressionism"],
      answer: "option2",
      category: "modern-art"
    },
    {
      id: 17,
      ques: "Which artist is known for creating the painting 'Water Lilies'?",
      options: ["Claude Monet", "Paul Cezanne", "Paul Gauguin", "Paul Klee"],
      answer: "option1",
      category: "modern-art"
    },
    {
      id: 18,
      ques: "Which artist is known for creating the painting 'Les Demoiselles d'Avignon'?",
      options: ["Henri Matisse", "Vincent van Gogh", "Salvador Dali", "Pablo Picasso"],
      answer: "option4",
      category: "modern-art"
    },
    {
      id: 19,
      ques: "Which artist is known for creating the painting 'Guernica'?",
      options: ["Claude Mone", "Paul Cezanne", "Pablo Picasso", "Vincent van Gogh"],
      answer: "option3",
      category: "modern-art"
    },
    {
      id: 20,
      ques: "Which artist is known for creating the sculpture 'The Thinker'?",
      options: ["Auguste Rodin", "Alexander Calder", "Jean Arp", "Henry Moore"],
      answer: "option1",
      category: "modern-art"
    }
  ];

let ModernArtButton=document.getElementById("ModernArtButton");
let ModernArtAnchor=document.getElementById("ModernArtPageAnchor");
let scoreCardModernArt = document.getElementById("scoreCard");
let ModernArtScore = document.getElementById("ModernArtScore");

let questionModern = document.querySelector("#ques");
let option1Modern = document.querySelector("#option1Label");
let option2Modern = document.querySelector("#option2Label");
let option3Modern = document.querySelector("#option3Label");
let option4Modern = document.querySelector("#option4Label");
let nextBtnModern = document.querySelector("#submit");
let previousBtnModern = document.querySelector("#previous");
let finalSubmitBtnModern = document.querySelector("#showScore");
let answersModern = document.querySelectorAll(".answer");
let chosenValueArrayModern=JSON.parse(localStorage.getItem("chosenValueArray_ModernArt")||"[]");
localStorage.setItem("value_ModernArt",Number(localStorage.value_ModernArt)||0);
localStorage.setItem("score_ModernArt",Number(localStorage.score_ModernArt)||0);
localStorage.setItem("final_ModernArt",Number(localStorage.final_ModernArt)||0);//add this line


function loadQuestion(){
  let counterNum = Number(localStorage.getItem("value_ModernArt"));
  const questionList = modernArt[counterNum];
  questionModern.innerHTML=questionList.ques;
  option1Modern.innerHTML=questionList.options[0];
  option2Modern.innerHTML=questionList.options[1];
  option3Modern.innerHTML=questionList.options[2];
  option4Modern.innerHTML=questionList.options[3];
}

function getCheckAnswer(){
  let chosenAnswer=null;
  answersModern.forEach((currentAnswerElement)=>{
      if(currentAnswerElement.checked){
          chosenAnswer=currentAnswerElement.id;
      }
  });
  return chosenAnswer;
}
function deselectAll(){
  answersModern.forEach((currentAnswerElement)=>{currentAnswerElement.checked=false;});
}

function nextQuestion(){
  let counterNum = Number(localStorage.getItem("value_ModernArt"));
  let score = Number(localStorage.getItem("score_ModernArt"));
  const checkedAnswer = getCheckAnswer();
  let y = chosenValueArrayModern[counterNum];
  if(y==null||y==undefined){
    document.getElementById("option1").disabled=false;
    document.getElementById("option2").disabled=false;
    document.getElementById("option3").disabled=false;
    document.getElementById("option4").disabled=false;
      if(checkedAnswer===modernArt[counterNum].answer){
          score=score+1;
          localStorage.setItem("score_ModernArt", score);
      }
    chosenValueArrayModern[counterNum]=checkedAnswer;
  }
  else {
    document.getElementById("option1").disabled=true;
    document.getElementById("option2").disabled=true;
    document.getElementById("option3").disabled=true;
    document.getElementById("option4").disabled=true;
  }
  if(counterNum===9||counterNum>9){
    counterNum=9;
    localStorage.setItem("value_ModernArt",counterNum);
    //nextBtn
    finalSubmitBtnModern.classList.remove("showScore");
    nextBtnModern.classList.add("showScore");
  }
  else {
    localStorage.value_ModernArt=Number(localStorage.value_ModernArt)+1;
    previousBtnModern.classList.remove("showScore");//this Line
    finalSubmitBtnModern.classList.add("showScore");//thisLine
    counterNum++;
  }
  localStorage.setItem("chosenValueArray_ModernArt",JSON.stringify(chosenValueArrayModern));
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
  if(Number(localStorage.value_ModernArt)===0|| Number(localStorage.value_ModernArt)<0){
    localStorage.value_ModernArt = 0;
    previousBtnModern.classList.add("showScore");
  }
  else{
    localStorage.value_ModernArt--;
    //add this-->
    nextBtnModern.classList.remove("showScore");
    // add this 
    finalSubmitBtnModern.classList.add("showScore");
  }
  let counterNum = Number(localStorage.getItem("value_ModernArt"));
  if(chosenValueArrayModern[counterNum]==null|| chosenValueArrayModern[counterNum]==undefined){
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
  let counterNum = Number(localStorage.getItem("value_ModernArt"));
  if(chosenValueArrayModern[counterNum]==null|| chosenValueArrayModern[counterNum]==undefined){
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
    let final_ModernArt = Number(localStorage.final_ModernArt);
    if(final_ModernArt===0){
      localStorage.setItem("final_ModernArt", 1);
      ModernArtScore.innerHTML=Number(localStorage.score_ModernArt);
      ModernArtAnchor.setAttribute("href","index.html");
      ModernArtButton.disabled=true;
    }
    else if(final_ModernArt===1){
      ModernArtScore.innerHTML=Number(localStorage.score_ModernArt);
      ModernArtAnchor.setAttribute("href","index.html");
      ModernArtButton.disabled=true;
    }
    
    scoreCardModernArt.classList.remove("scoreCard");
  }
  