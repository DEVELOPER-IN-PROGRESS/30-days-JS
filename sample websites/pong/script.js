const { body } = document;
const canvas =   document.createElement('canvas') ; 
const context  = canvas.getContext('2d') ;
const width = 500;
const height = 580 ;    // window.screen.height/1.3  change it according to your monitor height 
const screenWidth = window.screen.width;
const canvasPosition = screenWidth / 2 - width / 2;
const isMobile = window.matchMedia('(max-width: 600px)');
const gameOverEl = document.createElement('div');


// Paddle
const paddleHeight = 10;
const paddleWidth = 50;
const paddleDiff = 25;
let paddleBottomX = 225;
let paddleTopX = 225;
let playerMoved = false;
let paddleContact = false;

// Ball
let ballX = 250;
let ballY = 290;
const ballRadius = 5;

// Speed
let speedY;
let speedX;
let trajectoryX;
let computerSpeed;

let playerScore = 0 ;
let computerScore = 0 ;     


function renderCanvas(){
     context.fillStyle = 'black'; 
     context.fillRect(0,0,width, height);

     //paddle color 
     context.fillStyle ='white' ; 

     //paddle bottom - player
     context.fillRect(paddleBottomX , height - 20 , paddleWidth , paddleHeight) ; 
     //computer paddle
     context.fillRect(paddleTopX , 10 , paddleWidth , paddleHeight ) ; 

     //dashed center line 
     context.beginPath();
     context.setLineDash([4]) ;
     context.moveTo(0,290) ;
     context.lineTo(500 , 290); 
     context.strokeStyle = 'grey' ; 
     context.stroke() ; 

     //ball 
     context.beginPath(); 
     context.arc(ballX , ballY , ballRadius , 2* Math.PI , false ) ;
     context.fillStyle = 'white' ;
     context.fill(); 

     //score 
        context.font = '32px Courier New' ; 
        context.fillText(playerScore , 20 , canvas.height /2 + 50 );
        context.fillText( computerScore , 20 , canvas.height /2 -30 ) ; 
}

function createCanvas(){
    canvas.width = width ;
    canvas.height = height ; 
    body.appendChild(canvas);
    renderCanvas();
}


//todo : make it onload function 
createCanvas();