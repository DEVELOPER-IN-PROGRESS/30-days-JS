const image = document.getElementById('image');
const arrow = document.getElementById('b1');


function imageRotate(e){
console.log(Math.round(window.scrollY))
    if(window.scrollY < 278 ){
        image.style.transform= `rotate(-${(Math.round(window.scrollY))/3}deg)` 
        image.style.position = 'fixed' ;
    }
    else {
        image.style.position= 'static' ;
    }
    //  console.log(Math.round(window.scrollY/10));
}

window.addEventListener('scroll', imageRotate);
arrow.addEventListener('click', ()=>{ 
    console.log('arrow clicked');
})