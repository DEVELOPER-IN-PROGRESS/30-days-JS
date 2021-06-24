const menuBars = document.getElementById('menu-bars') ;
const overlay = document.getElementById('overlay') ;
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

const navItems= [nav1, nav2, nav3 ,nav4 ,nav5] ;

function navAnimation(direction1 , direction2) {
  navItems.forEach( (nav, i) => {
     //console.log(`slide-${direction1}-${id+1}` , `slide-${direction2}-${id+1}`);
     nav.classList.replace(`slide-${direction1}-${i+1}` , `slide-${direction2}-${i+1}`);
  }) ;
}


function toggleNav(){
  // toggle menu bars  
  menuBars.classList.toggle('change')  
  overlay.classList.toggle('overlay-active');

 
  if (overlay.classList.contains('overlay-active')){
    //Animate overlay 
   overlay.classList.replace('overlay-slide-left' ,'overlay-slide-right') ;
// repalce does the combined functionality of remove() and add() 
// but we cannot replace a class with another if it is not there so we add extra class in HTML 
      navAnimation('out','in');
      nav1.classList.replace('slide-out-1', 'slide-in-1');
   }
    else {
  overlay.classList.replace('overlay-slide-right','overlay-slide-left') ;
  navAnimation('in' , 'out');
    }

  }

menuBars.addEventListener ('click' ,toggleNav);
navItems.forEach( (nav) =>{nav.addEventListener('click' ,toggleNav)}  )