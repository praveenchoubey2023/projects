const bug = document.querySelector('.ladybird');
const upBtn = document.querySelector('#up');
const downBtn = document.querySelector('#down');
const rightBtn = document.querySelector('#right');
const leftBtn = document.querySelector('#left');
const homeBtn = document.querySelector('#home');
const turnClockWiseBtn = document.querySelector('#turnClockWise');
const turnAntiClockWiseBtn = document.querySelector('#turnAntiClockWise');

let rotation = 0;
let xPos = 0;
let yPos = 0;
const travel = ()=>{
    bug.style.left = `${xPos}px`;
    bug.style.top = `${yPos}px`;
};
const moveLeft = ()=>{
    xPos > 0 && (xPos -= 10);
    console.log(xPos);
    travel();
};
const moveRight = ()=>{
    xPos < 450 && (xPos += 10); 
    console.log(xPos);
    travel();
};
const moveUp = ()=>{
    yPos>0 && (yPos -= 10);
    travel();
};
const moveDown = ()=>{
    yPos<450 && (yPos += 10);
    travel();
};
const antiClock = ()=>{
    rotation -= 90;
    bug.style.transform = `rotate(${rotation}deg)`;
};
const clockWise = ()=>{
    rotation += 90;
    bug.style.transform = `rotate(${rotation}deg)`;
};
const backHome = ()=>{
    xPos=0;
    yPos=0;
    travel();
};
upBtn.addEventListener('click',moveUp);
downBtn.addEventListener('click', moveDown);
leftBtn.addEventListener('click',moveLeft);
rightBtn.addEventListener('click',moveRight);
downBtn.addEventListener('click',moveDown);
homeBtn.addEventListener('click',backHome);
turnClockWiseBtn.addEventListener('click',clockWise);
turnAntiClockWiseBtn.addEventListener('click',antiClock);

// Keyboard Events

document.addEventListener('keyup', function(event){
        // for(const val in event){
        //     console.log(`${val} and the value is ${event[val]}`);
        // }
        const {key}=event;
        switch (key){
            case 'ArrowUp':
                moveUp();
                break;
            case 'ArrowDown':
                moveDown();
                break;
            case 'ArrowRight':
                moveRight();
                break;
            case 'ArrowLeft':
                moveLeft();
                break;
            case ']':
                clockWise();
                break;
            case '[':
                antiClock();
                break;
            case 'h':
                backHome();
                break;
        }
});
