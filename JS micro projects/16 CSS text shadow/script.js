const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100 ; //100px 

function textShadow(e){
  //  const width = hero.offsetWidth ;
   // const height = hero.offsetHeight ;
    // or this way
    const { offsetHeight:width , offsetHeight:height} = hero ; 
    let {offsetX: x , offsetY :y } = e;


     // console.log(this , e.target);  this =hero e.target = h1 
      if( this !== e.target){
          x = x + e.target.offsetLeft ;
          y = y + e.target.offsetTop  ;

      }

      const xWalk = (x/width * walk ) - (walk /2) ;
      const yWalk = (y/height * walk ) - (walk /2) ;
      
      text.style.textShadow = `${xWalk}px  ${yWalk}px 0 blue
      
      ` ;
      ///console.log(x, y) ;
}

hero.addEventListener('mousemove' , textShadow) ;