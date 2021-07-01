const inputContainer = document.getElementById('input-comtainer');
const  countdownForm  = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

let countdownTitle ='' ;
let countdownDate = '' ;

//SEt date input minimum 
const today = new Date().toISOString().split('T')[0];
console.log(today);
dateEl.setAttribute('min',today)

//take value from form input
function updateCountdown(e){
    countdownTitle = e.srcElement[0].value ;
    countdownDate = e.srcElement[1].value ;
    console.log(countdownDate , countdownTitle);

    e.preventDefault();
}


//Event listener
countdownForm.addEventListener('submit', updateCountdown)