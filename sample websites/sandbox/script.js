const image = document.getElementById('image');
const arrow = document.getElementById('b1');


function imageRotate(e){

// console.log(window.scrollY)

console.log(window.scrollY)
    if(window.scrollY < 251 ){
        image.style.transform= `rotate(-${Math.round(window.scrollY/2.75)}deg)` 
        image.style.position = 'fixed' ;
    }
    else {
        image.style.marginTop = '10px'; 
        image.style.position= ' ' ;
    }
     //console.log(Math.round(window.scrollY/10));
}

window.addEventListener('scroll', imageRotate);
arrow.addEventListener('click', ()=>{ 
    console.log('arrow clicked');
})