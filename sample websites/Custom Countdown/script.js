const inputContainer = document.getElementById('input-comtainer');
const  countdownForm  = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

//SEt date input minimum 
const today = new Date().toISOString().split('T')[0];
console.log(today);
dateEl.setAttribute('min',today)