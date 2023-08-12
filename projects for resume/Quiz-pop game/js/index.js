let musicButton=document.getElementById("musicButton");
let ModernArtButton=document.getElementById("ModernArtButton");
let codingButton=document.getElementById("codingButton");
let musicAnchor=document.getElementById("musicPageAnchor");
let ModernArtAnchor=document.getElementById("ModernArtPageAnchor");
let codingAnchor=document.getElementById("codingPageAnchor");
let musicScore = document.querySelector("#musicScore");
let ModernArtScore = document.getElementById("ModernArtScore");
let codingScore = document.getElementById("codingScore");
let scoreCard=document.getElementById("scoreCard");
function checkScore(){
    let final_Music = Number(localStorage.final_Music);
    let final_ModernArt = Number(localStorage.final_ModernArt);
    let final_coding = Number(localStorage.final_coding);
    if((final_Music===1)||(final_ModernArt===1)||(final_coding===1)){
      musicScore.innerHTML=Number(localStorage.score_Music);
      ModernArtScore.innerHTML=Number(localStorage.score_ModernArt);
      codingScore.innerHTML=Number(localStorage.score_coding);
      scoreCard.classList.remove("scoreCard");
    }
    else {
      scoreCard.classList.add("scoreCard");
    }
    if(final_Music===1){
        musicScore.innerHTML=Number(localStorage.score_Music);
        musicAnchor.setAttribute("href","index.html");
        musicButton.disabled=true;
    }
//modern art button
    if(final_ModernArt===1){
       ModernArtScore.innerHTML=Number(localStorage.score_ModernArt);
       ModernArtAnchor.setAttribute("href","index.html");
       ModernArtButton.disabled=true;
    }
    

//coding Button
    if(final_coding===1){
      codingScore.innerHTML=Number(localStorage.score_coding);
      codingAnchor.setAttribute("href","index.html");
      codingButton.disabled=true;
    }
}