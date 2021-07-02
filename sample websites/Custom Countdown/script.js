const inputContainer = document.getElementById('input-container');
const  countdownForm  = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

const  countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button')
const timeElements = document.querySelectorAll('span');

const completeEl = document.getElementById('complete');
const completeElInfo = document.getElementById('complete-info');
const completeBtn = document.getElementById('complete-button');


let countdownTitle ='' ;
let countdownDate = '' ;
let countdownValue = Date ;
let countdownActive ; 
let savedCountdown ; 

const second = 1000;
const minute = second * 60;
const hour = minute * 60 ;
const day = hour *24; 

//SEt date input minimum 
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min',today)

//Populate COuntdown  UI    
function updateDOM(){
   countdownActive = setInterval ( ()=> {
    const now =  new Date().getTime() ;
    const distance = countdownValue - now ;
   
    const days = Math.floor(distance / day );
    const hours = Math.floor( (distance % day ) /hour) ;
    const minutes = Math.floor( (distance % hour) / minute);
    const seconds = Math.floor ( (distance %minute) / second) ;
   
     //Hide Input 
     inputContainer.hidden= true ;

     // countdown ended show complete
     if(distance < 0){
         countdownEl.hidden = true ; 
         clearInterval(countdownActive);
         completeElInfo.textContent = `${countdownTitle} finished on ${countdownDate}` ; 
         completeEl.hidden = false ;
     }

     else {
  //countdown in progress
    // Populate Countdown 
    countdownElTitle.textContent = ` ${countdownElTitle}` ; 
    timeElements[0].textContent = `${days}` ;
    timeElements[1].textContent = `${hours}` ;
    timeElements[2].textContent = `${minutes}` ;
    timeElements[3].textContent = `${seconds}` ;
    
    //Show countdown 
    countdownEl.hidden = false ; 
    completeEl.hidden = true ;
     }

    
    } ,second);
}

//take value from form input
function updateCountdown(e){
    e.preventDefault();
    countdownTitle = e.srcElement[0].value ;
    countdownDate = e.srcElement[1].value ;
    savedCountdown = {
        title :countdownTitle , 
        date : countdownDate 
    } ; 
    localStorage.setItem('custom-countdown', JSON.stringify(savedCountdown));
 
    

     if ( countdownDate === ''){
         alert('input a valid Date');
     }
     else{
        countdownValue = new Date(countdownDate).getTime();
    updateDOM();
     }
    
}

function reset() {
    //Hide countdown , reset countdown  , show input
    countdownEl.hidden = true ; 
    completeEl.hidden = false ; 
    inputContainer.hidden = false ; 

    clearInterval( countdownActive) ;
    countdownElTitle = '';
    countdownDate = '';
    localStorage.removeItem('custom-countdown')
}

// check local storage if any restored value
function restoreCountdown(){
    if(localStorage.getItem('custom-countdown')){
        inputContainer.hidden = true ; 
        savedCountdown = JSON.parse(localStorage.getItem('custom-countdown'));
        countdownTitle = savedCountdown.title ;
        countdownDate = savedCountdown.date ;
        countdownValue = new Date(countdownDate).getTime();
        updateDOM();
    }
}


//Event listener
countdownForm.addEventListener('submit', updateCountdown) ;
countdownBtn.addEventListener('click' ,reset) ;
completeBtn.addEventListener('click' , reset) ;


//onload check local storage
restoreCountdown();