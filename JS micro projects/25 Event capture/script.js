const divs = document.querySelectorAll('div');
const button =document.querySelector('button');
function logText(e){
   // console.log(this.classList.value);
    console.log(this)
    // research more on bubbling 
  //  e.stopPropogation(); // stops bubbling 
}

divs.forEach( div=> {
    div.addEventListener('click' ,logText, {capture : false , once:false});
}) ;

button.addEventListener('click' , ()=>{console.log('BUtton CLicked ')} )
//the capture happens from a top down approach whereas the events are fired in reverse order
// capture default is false

//setting once: true will remove event listner after  event is listened  , default is false 