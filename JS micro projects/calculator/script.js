const accordionBtns = document.querySelectorAll(".accordion");
const button = document.getElementById('calc');
const slider = document.getElementById('myRange');
accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("is-open");

    let content = this.nextElementSibling;
   // console.log(content);

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
     // console.log(content.style.maxHeight);
    }
  };
});

async function loanCalculate(e){
       e.preventDefault();
       loadanimation();
       
       console.log('animation done');
       document.getElementById('animation-container').hidden = true ;
       document.getElementsByClassName('outer-container').hidden = false ;
       const data = await fetch('https://61018ffc4e50960017c29ebe.mockapi.io/api/calc/fees')
       console.log(data.json()) ; 

}

function loadanimation(){
  console.log('animation loaded');
  setTimeout( ()=>{console.log('animation in progress')} ,3000)
   document.getElementById('animation-container').hidden = false ;
}

function domUpdate(){
 
}

// function feeValue(e){
//   //console.log(e);
//   console.log(slider.value);
// }

button.addEventListener('click' ,loanCalculate);
//button.addEventListener('click' ,loadanimation);
//slider.addEventListener('click' ,feeValue);

let i = document.querySelector('input'),
    o = document.querySelector('output');

o.innerText = i.value;

i.addEventListener('input', function () {
  o.innerText = i.value;
}, false);

