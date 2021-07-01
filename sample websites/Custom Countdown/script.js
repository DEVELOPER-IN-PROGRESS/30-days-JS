const inputContainer = document.getElementById('input-container');
const  countdownForm  = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

const  countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button')
const timeElements = document.querySelectorAll('span');

let countdownTitle ='' ;
let countdownDate = '' ;
let countdownValue = Date ;

const second = 1000;
const minute = second * 60;
const hour = minute * 60 ;
const day = hour *24; 

//SEt date input minimum 
const today = new Date().toISOString().split('T')[0];
console.log(today);
dateEl.setAttribute('min',today)

//Populate COuntdown  UI    
function updateDOM(){
 const now =  new Date().getTime() ;
 const distance = countdownValue - now ;
 console.log('remaining:' , distance) 

 const days = Math.floor(distance / day );
 const hours = Math.floor( (distance % day ) /hour) ;
 const minutes = Math.floor( (distance % hour) / minute);
 const seconds = Math.floor ( (distance %minute) / second) ;
 console.log( days , minutes ,hours , seconds);

 countdownElTitle.textContent = ` ${countdownElTitle}` ; 
 timeElements[0].textContent = `${days}` ;
 timeElements[0].textContent = `${hours}` ;
 timeElements[0].textContent = `${minutes}` ;
 timeElements[0].textContent = `${seconds}` ;
  //Hide Input 
 inputContainer.hidden= true ;
 //Show countdown 
 countdownEl.hidden = false ; 
}

//take value from form input
function updateCountdown(e){
    e.preventDefault();
    countdownTitle = e.srcElement[0].value ;
    countdownDate = e.srcElement[1].value ;
    console.log(countdownDate , countdownTitle);

    countdownValue = new Date(countdownDate).getTime();
    console.log('Countdown value:' , countdownValue);
    updateDOM();
}


//Event listener
countdownForm.addEventListener('submit', updateCountdown)