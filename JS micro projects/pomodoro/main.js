//definitions
let isStartClicked = false ;
let root = document.querySelector(':root');
let color = 'red' ;
let font = 'ff1' ;
let elapsed = 0 ;

let quantity1 = document.getElementById('quantity') ;
let parent = document.getElementById('parent');
let child = document.getElementById('child');

let timeSettings={
  pomodoro: 25,
  short: 5,
  long: 15 ,
} ;

let inputs = document.querySelectorAll('.initialvalue');

var newTaskInput = document.getElementById('newTaskInput');
var timer = document.getElementById('timer');
var newTaskForm = document.getElementById('newTaskForm');
var play = document.getElementById('btnPlay');
var reset = document.getElementById('btnReset');
var checklist = document.getElementById("checklist");
var clear = document.getElementById("clear");
var newTaskBtn = document.getElementById("newTask");
var tabs = document.getElementsByClassName("tab");
var timertype = '25:00';
var pomodoro = 25 * 60;
let ring = document.querySelector('.outerring');

var audio = new Audio('http://soundbible.com/mp3/analog-watch-alarm_daniel-simion.mp3');
var Cd;
var elem,instance;
var secondsLeft;
audio.volume=0.02;

function switchColor(e,col){
 clearTick();
 color= col;
 console.log(e);
 e.innerHTML = '<i class="fa-solid fa-check"></i>';
}

function switchFont(e,fonts){
  clearColor();
  e.style.backgroundColor = '#161932';
  e.style.color = '#FFFFFF' ;
  console.log(e.innerText);
  font = fonts;
}

function setAttributes(){
  root.style.setProperty('--currentcolor', `var(--${color})`);
  root.style.setProperty('--currentfont' , `var(--${font})`);

  Timer.stop();

  let ip1 = document.getElementById('quantity').value ;
  let ip2 = document.getElementById('quantity1').value ;
  let ip3 = document.getElementById('quantity2').value ;


  let active=   document.getElementsByClassName('active')[0].innerText ;

  switch(active){
      case 'long break':
              timer.innerText = ip3 < 10 ? `0${ip3}:00` : `${ip3}:00` ;
              pomodoro = secondsLeft = ip3 * 60;
              console.log({pomodoro});
              elapsed = 0 ;
              break ;

      case 'short break':
        timer.innerText = ip2 < 10 ? `0${ip2}:00` : `${ip2}:00` ;
        pomodoro = secondsLeft = ip2 * 60;
        console.log({pomodoro});
        elapsed = 0 ;
        break ;

      case 'pomodoro':
          timer.innerText = ip1 < 10 ? `0${ip1}:00` : `${ip1}:00` ;
          pomodoro = secondsLeft = ip1 * 60;
          console.log({pomodoro});
          elapsed = 0 ;
          break ;
  }

  timeSettings.pomodoro = Number(ip1) ;
  timeSettings.short = Number(ip2) ;
  timeSettings.long = Number(ip3)  ;

  console.log({timeSettings})

  if(play.innerText== 'PAUSE'){
    startTimer();
    isStartClicked = true ;
  }

  ring.style.background = `conic-gradient(#161932 0deg 360deg)` ;
//Timer.start();
  modal.style.display = "none";
}

function runTimer(){
  isStartClicked = ! isStartClicked ;
  if(isStartClicked){
    play.innerText = 'PAUSE' ;
  }
  else{
    play.innerText = 'START' ;
  }
}

function clearTick(){
  let ticks = document.querySelectorAll('.ticktick');
 ticks.forEach( (e) => {
   e.innerText = '' ;
 });
}

function clearColor(){
   let fontsdiv = document.querySelectorAll('.fontsss');
  fontsdiv.forEach( (e) => {
    e.style.backgroundColor = '#EFF1FA';
    e.style.color='#1E213F';
    e.style.fontWeight='700';
  });
}

//event delegation for checking the tasks
checklist.addEventListener('click',function(e){
  let c;
  let n;

   if(e.target && e.target.nodeName == "INPUT") {
     //get the checked value
    this.c = e.target.checked;
	}

  audio.pause()

  //check to see which is the element you are looking for
     if(e.target && e.target.nodeName == "SPAN") {
		// get the element name
    this.n = e.target.innerText;
    e.target.classList.toggle('striketrough');
	}
  list.check(this.n,this.c);
});

timer.innerHTML = timertype;

function sameProperties(){
  isStartClicked = false;
  play.innerText = 'START';
  elapsed = 0;
  parent.style.display = 'none';
  child.style.display = 'none';
  parent.style.transform = `rotate(0deg)`;
  ring.style.background = `conic-gradient(#161932 0deg 360deg)`;
}

// tabs click event listeners
for (var i = 0; i< tabs.length; i++){
  tabs[i].addEventListener('click', function(e){
     audio.pause()
    switch(e.target.hash) {
      case "#pomodoro":
       sameProperties();
        timertype = (timeSettings.pomodoro <10) ? `0${timeSettings.pomodoro}:00` :  `${timeSettings.pomodoro}:00`;
         pomodoro = secondsLeft = timeSettings.pomodoro * 60;
         Timer.stop();
        break;
      case "#shortBreak":
        sameProperties();
        timertype = (timeSettings.short <10) ? `0${timeSettings.short}:00` :  `${timeSettings.short}:00`;
        pomodoro = secondsLeft = timeSettings.short * 60;

        Timer.stop();
        break;
      case "#longBreak":
        sameProperties();
        timertype = (timeSettings.long <10) ? `0${timeSettings.long}:00` :  `${timeSettings.long}:00`;
        pomodoro = secondsLeft = timeSettings.long * 60;
         Timer.stop();
        break;
      default:
        timer.innerHTML = "25:00";
    }
    timer.innerHTML = timertype;
  });
}

document.getElementById('modalTr').addEventListener('click', function(e){
instance.open();
  audio.pause()
});

function startTimer(){
  audio.pause()
  // color play button Red
  parent.style.display = 'block';
  child.style.display = 'block';
  if (Timer.isRunning !== true){
    if(secondsLeft === undefined ){
     //
      Timer.start(pomodoro);
    }
    else if(secondsLeft === 0 ){
      play.innerText = 'RESTART' ;
    }else{
      Timer.start(secondsLeft);
    }
    changePlayClass();
  } else{
    Timer.stop();
  }
}

play.addEventListener('click', startTimer);

reset.addEventListener('click', function(e){
  audio.pause()
  // countdownTimer.pause();
  Timer.stop();
  secondsLeft=pomodoro;
  console.log({timertype});
  timer.innerHTML = timertype;
});

clear.addEventListener('click', function(e){
  list.clear();
});

newTask.addEventListener('click', function(e){
  audio.pause()
  newTask.classList.add('hidden');
  newTaskForm.classList.remove('hidden');
  newTaskInput.focus();
  list.display();
});

//listen for form submit
newTaskForm.addEventListener('submit', function(e){
  audio.pause()
  e.preventDefault();
  list.newTask(e);
});
//hide input when out of focus
newTaskInput.addEventListener('blur', function(e){
  audio.pause()
  e.preventDefault();
  newTask.classList.remove('hidden');
  newTaskForm.classList.add('hidden');
  list.display();
});

//onload function
document.body.onload = function() {
  //Initialize JS for Materialize
  M.AutoInit();
  elem = document.getElementsByClassName('modal');
  instance = M.Modal.init(elem[0]);
  list.getLocalStorage();
  list.display();

};

//functions
//Change Play button Class from Play to Paus
function changePlayClass(){
  for (var i = 0; i < play.classList.length; i++){
    if (play.classList[i] == 'playIcon'){
      play.classList.remove('playIcon');
      play.classList.add('pauseIcon');
      return;
    }else{
      if (play.classList[i] =='pauseIcon'){
        play.classList.remove('pauseIcon');
        play.classList.add('playIcon');
      }
    }
  }
}

//new countdown function
function CountDown() {
  this.isRunning = false;
  this.interval = undefined;


  function display(seconds) {
    //console.log({pomodoro});
    elapsed++;
    console.log({elapsed});
    let slice = (elapsed/pomodoro)*360;
    console.log(slice);

    ring.style.background = `conic-gradient(var(--currentcolor) ${slice}deg , #161932 ${slice}deg 360deg )`;
    parent.style.transform = `rotate(${slice}deg)`;

    const minutes = Math.floor(seconds / 60);
    var rSeconds = seconds % 60;
    rSeconds = rSeconds < 10 ? '0'+rSeconds : rSeconds;

    timer.innerText = minutes< 10 ? `0${minutes}:${rSeconds}` :`${minutes}:${rSeconds}`;
    if(minutes == 0 && rSeconds == 0 ){
      play.innerText = 'RESTART' ;
      isStartClicked = false ;
    }
  }

  this.timer = function(seconds){
    const now = Date.now();
    var then = now + seconds *1000;

    display(seconds);
    this.isRunning = true;

    this.interval = setInterval(() => {
      secondsLeft = Math.round((then - Date.now())/1000);
      if (secondsLeft < 0){
        secondsLeft = 0;
        changePlayClass();
        audio.play();
        this.stop();

      }else{
        display(secondsLeft);
      }
    },1000);


  };

  this.start = function(seconds){

    this.timer(seconds);
  };

  this.stop = function(){
     clearInterval(this.interval);
    Timer.isRunning = false;
    play.classList.remove('pauseIcon');
    play.classList.add('playIcon');

  };

  this.reset = function(){};

}

let Timer = new CountDown();

//checklist object
var list = {
  tasks : [],

//iterate thorouh all the tasks  and set the value
  check : function(taskName, checked){
    for (let i = 0; i<this.tasks.length;i++){
    if (this.tasks[i].name == taskName){
      this.tasks[i].checked = checked;
    }

  }
    this.addLocalStorage(this.tasks);
  },

  addLocalStorage: function(element){
    localStorage.setItem("Tasks", JSON.stringify(element));
  },

  getLocalStorage: function(){
    if (localStorage.getItem("Tasks") !== null){
      this.tasks = JSON.parse(localStorage.getItem("Tasks"));
      console.log(JSON.parse(localStorage.getItem("Tasks")));
    }
    this.display();
  },
  newTask : function(e){
    let task = {
      name: undefined,
      checked: false,
    };
    task.name = e.target[0].value;
    this.tasks.push(task);
    newTaskForm.reset();
    this.addLocalStorage(this.tasks);
    list.display();
  },

  display : function(){
    //check if there are any tasks
    if (this.tasks !== 'undefined' && this.tasks.length>0) {
      document.getElementById("newTask").innerHTML = '<a class="red-text" href="#">Add another task</a>';
      checklist.innerHTML = "";
      for (var i = 0; i < this.tasks.length; i++){
        //iterate and then get the name and value in variables to display
        let taskName = this.tasks[i].name;
        let checked = this.tasks[i].checked === true ? 'checked=""' : '';
        let striketrough = this.tasks[i].checked === true ? 'striketrough' : '';
        checklist.innerHTML +=`
                              <li class="collection-item row">
                                <form action="#">
                                  <label class="col s12">
                                    <input type="checkbox" ${checked} class="filled-in " >
                                    <span class="${striketrough}">${taskName}</span>
                                  </label>
                                </form>
                              </li>
                              `;}
  } else{
  checklist.innerHTML = "";
  document.getElementById("newTask").innerHTML = '<a class="red-text" href="#">Add a task!</a>';
}



},

  clear : function(){
    this.tasks = [];
    localStorage.removeItem("Tasks");
    list.display();
  }

};

// modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//modal-dropdown
var valueCount
document.querySelector(".plus-btn").addEventListener("click", function () {
  if (valueCount < 25) {
  valueCount = document.getElementById("quantity").value;
    console.log(valueCount)
  valueCount++;
  }
  document.getElementById("quantity").value = valueCount;
})


document.querySelector(".minus-btn").addEventListener("click", function () {
  valueCount = document.getElementById("quantity").value;
  valueCount--;
  console.log(valueCount,'plus brnnn')
  if (valueCount <= 1) {
    valueCount = 1
  }
  document.getElementById("quantity").value = valueCount;


})

var valueCount
document.querySelector(".plus-btn1").addEventListener("click", function () {
  if (valueCount < 5) {
    valueCount = document.getElementById("quantity1").value;
    console.log(valueCount)
  valueCount++;
  }

  document.getElementById("quantity1").value = valueCount;
})


document.querySelector(".minus-btn1").addEventListener("click", function () {
  valueCount = document.getElementById("quantity1").value;
  valueCount--;
  console.log(valueCount,'plus brnnn')
  if (valueCount <= 1) {
    valueCount = 1
  }
  document.getElementById("quantity1").value = valueCount;


})

var valueCount
document.querySelector(".plus-btn2").addEventListener("click", function () {
  if (valueCount < 15) {
  valueCount = document.getElementById("quantity2").value;
    console.log(valueCount)
  valueCount++;
  }
  document.getElementById("quantity2").value = valueCount;
})

play.addEventListener('click' , runTimer)
