const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerChoiceEl = document.getElementById('computerChoice');
const computerScoreEl = document.getElementById('computerScore');
const resultText = document.getElementById('resultText');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.far');


const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScoreNumber = 0 ; 
let computerScoreNumber = 0 ;
let computerChoice = '' ;
// Reset al selected icons
function resetSelected() {
  allGameIcons.forEach( (icon) => {
    icon.classList.remove('selected');
  })
}

function computerRandomChoice() {
  const computerChoiceNumber = Math.random() ;
   if (computerChoiceNumber < 0.2) {
     computerChoice ='rock' ;
   }
  else if (computerChoiceNumber <= 0.4) {
    computerChoice ='paper' ;
  }
 else if (computerChoiceNumber <= 0.6) {
    computerChoice ='scissors' ;
  }
 else if (computerChoiceNumber <= 0.8) {
    computerChoice ='lizard' ;
  }
  else  {
    computerChoice ='spock' ;
  }
}

//Add 'selected' styling & computerchoice 


function displaycomputerChoice(){

  switch(computerChoice){
   case 'rock' :
     computerRock.classList.add('selected');
     computerChoiceEl.textContent = ' --- Rock';
     break;

   case 'paper' :
     computerPaper.classList.add('selected');
     computerChoiceEl.textContent = ' --- Paper';
     break;
     
   case 'scissors' :
     computerScissors.classList.add('selected');
     computerChoiceEl.textContent = ' --- Scissors';
     break;
    
      
   case 'spock' :
    computerSpock.classList.add('selected');
    computerChoiceEl.textContent = ' --- Spock';
    break;
   
    
   case 'lizard' :
     computerLizard.classList.add('selected');
     computerChoiceEl.textContent = ' --- Lizard';
     break;
    
 }
}
// Check result update score 
function updateScore(playerChoice){
  console.log(playerChoice , computerChoice) ;
   if(playerChoice === computerChoice){
     resultText.textContent = "Its a tie" ;
   }else {
     const choice = choices[playerChoice]
     console.log(choice.defeats.indexOf(computerChoice)) ;
     if(choice.defeats.indexOf(computerChoice) > -1){
       resultText.textContent ="you won";
       playerScoreNumber ++ ; 
       playerScoreEl.textContent = playerScoreNumber;
     }else{
       resultText.textContent = "you lost" ;
       computerScoreNumber ++; 
       computerScoreEl.textContent = computerScoreNumber
     }
   }

}


//Call functions to process turn 
function checkResult(playerChoice){
  resetSelected();
  computerRandomChoice();
  displaycomputerChoice();
  updateScore(playerChoice);
}

function select(playerChoice){
  checkResult(playerChoice);
 // add 'selected'  styling  & playerChoice
 switch(playerChoice){
   case 'rock' :
     playerRock.classList.add('selected');
     playerChoiceEl.textContent = ' --- Rock';
     break;

   case 'paper' :
     playerPaper.classList.add('selected');
     playerChoiceEl.textContent = ' --- Paper';
     break;
     
   case 'scissors' :
     playerScissors.classList.add('selected');
     playerChoiceEl.textContent = ' --- Scissors';
     break;
    
      
   case 'spock' :
    playerSpock.classList.add('selected');
    playerChoiceEl.textContent = ' --- Spock';
    break;
   
    
   case 'lizard' :
     playerLizard.classList.add('selected');
     playerChoiceEl.textContent = ' --- Lizard';
     break;
    
 }
}