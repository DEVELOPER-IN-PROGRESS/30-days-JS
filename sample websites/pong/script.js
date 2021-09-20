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



// Change Mobile Settings
if (isMobile.matches) {
  speedY = -2;
  speedX = speedY;
  computerSpeed = 4;
} else {
  speedY = -1;
  speedX = speedY;
  computerSpeed = 3;
}



// Reset Ball to Center
function ballReset() {
    ballX = width / 2;
    ballY = height / 2;
    speedY = -3;
    paddleContact = false;
  }
  
  // Adjust Ball Movement
  function ballMove() {
    // Vertical Speed
    ballY += -speedY;
    // Horizontal Speed
    if (playerMoved && paddleContact) {
      ballX += speedX;
    }
  }
  
  // Determine What Ball Bounces Off, Score Points, Reset Ball
  function ballBoundaries() {
    // Bounce off Left Wall
    if (ballX < 0 && speedX < 0) {
      speedX = -speedX;
    }
    // Bounce off Right Wall
    if (ballX > width && speedX > 0) {
      speedX = -speedX;
    }
    // Bounce off player paddle (bottom)
    if (ballY > height - paddleDiff) {
      if (ballX > paddleBottomX && ballX < paddleBottomX + paddleWidth) {
        paddleContact = true;
        // Add Speed on Hit
        if (playerMoved) {
          speedY -= 1;
          // Max Speed
          if (speedY < -5) {
            speedY = -5;
            computerSpeed = 6;
          }
        }
        speedY = -speedY;
        trajectoryX = ballX - (paddleBottomX + paddleDiff);
        speedX = trajectoryX * 0.3;
      } else if (ballY > height) {
        // Reset Ball, add to Computer Score
        ballReset();
        computerScore++;
      }
    }
    // Bounce off computer paddle (top)
    if (ballY < paddleDiff) {
      if (ballX > paddleTopX && ballX < paddleTopX + paddleWidth) {
        // Add Speed on Hit
        if (playerMoved) {
          speedY += 1;
          // Max Speed
          if (speedY > 5) {
            speedY = 5;
          }
        }
        speedY = -speedY;
      } else if (ballY < 0) {
        // Reset Ball, add to Player Score
        ballReset();
        playerScore++;
      }
    }
  }

function computerAI(){
    if (playerMoved) {
        if (paddleTopX + paddleDiff < ballX) {
          paddleTopX += computerSpeed;
        } else {
          paddleTopX -= computerSpeed;
        }
      }
}

function animate(){
    renderCanvas();
    ballMove();
    ballBoundaries();
    computerAI();
    window.requestAnimationFrame(animate);
}

function startGame(){
    
    playerScore = 0 ;
    computerScore = 0 ;     

    createCanvas(); 
    animate(); 
     canvas.addEventListener('mousemove' , (e) =>{
        playerMoved = true ;

        paddleBottomX = e.clientX -canvasPosition - paddleDiff; 
        if(paddleBottomX < paddleDiff){
            paddleBottomX = 0 ;
        }
        if( paddleBottomX > width - paddleWidth){
                paddleBottomX = width - paddleWidth ; 
        }

        canvas.style.cursor = 'none';

    });
}

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

//onload 
startGame();