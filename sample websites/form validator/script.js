const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isvalid = false ;
let passwordsMatch = false ; 
function validateForm(){
 //use constraint API
    isvalid = form.checkValidity();
    //console.log(isvalid);
    if(!isvalid){
    message.textContent ='Please fill out all fields';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return ;
    }

    if(password1El.value === password2El.value){
        passwordsMatch = true ;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else {
        passwordsMatch = false ; 
        message.textContent = ' Make sure passwords match' ; 
        message.style.color = 'red' ;
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        messageContainer.style.borderColor = 'red';
        return ;

    }
    if( isvalid  && passwordsMatch) {
        message.textContent = 'Successful Registration' ;
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}


function processFormdata(e){
    e.preventDefault();
    validateForm() ;
}

//Event Listener
form.addEventListener('submit' ,processFormdata); 