const checkboxes = document.querySelectorAll('.main-box input[type="checkbox"]');
console.log(checkboxes);

let lastChecked ;

function clickCheck(e){

//Check if shiftkey was  hold down and monitor it continuouslly 
let inBetween = false ;
 if(e.shiftKey && this.checked){
 
    //loop over every  single checkboxes 
  
     checkboxes.forEach( box => {
     if ( box === this || box ===lastChecked ){
      inBetween = !inBetween ;
     }
  
     // we set our flag variable inbetween as false in the 1st if it becomes iverted state and it is cehcked  in below if 
      if(inBetween){
        box.checked = true ;
      }
  
    }) ;

 }

    lastChecked = this  ;
    console.log(lastChecked);
}
//Listen for click in any of checkboxes
checkboxes.forEach( checkbox => checkbox.addEventListener('click' , clickCheck ))