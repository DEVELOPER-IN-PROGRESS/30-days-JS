const video = document.querySelector('video');
const progressRange = document.querySelector('.progress-range');
const progressBar = document.querySelector('.progress-bar');
const playBtn = document.getElementById('play-btn');
const volumeIcon = document.getElementById('volume-icon');
const volumeRange = document.querySelector('.volume-range');
const volumeBar = document.querySelector('.volume-bar');
const currentTime = document.querySelector('.time-elapsed');
const duration  = document.querySelector('.time-duration');
const fullscreenBtn = document.querySelector('.fullscreen');

// Play & Pause ----------------------------------- //
function showPlayIcon(){
    playBtn.classList.replace('fa-pause' , 'fa-play');
         playBtn.setAttribute('title' ,'Play');
} 

function togglePlay(){
     if(video.paused){
        playBtn.classList.replace('fa-play' , 'fa-pause'); 
        playBtn.setAttribute('title' ,'Pause');
        video.play();

     }
     else{
         video.pause();
        showPlayIcon();
     }
 }
 //on video end show play button icon 
 video.addEventListener('ended' , showPlayIcon);


// Progress Bar ---------------------------------- //

//calculate display time format 
function displayTime(time){
    const minutes = Math.floor( time/ 60);
    let seconds = Math.floor (time % 60);
      seconds = seconds < 10 ? `0${seconds}` : seconds ; 
      return `${minutes}:${seconds}`;
}

//update progress bar
function updateProgress(){
   // console.log('currenttime' , video.currentTime , 'duration' , video.duration);
   progressBar.style.width = `${ (video.currentTime /video.duration ) * 100}%` ; 
   currentTime.textContent = `${displayTime(video.currentTime)} /` ; 
   duration.textContent = `${displayTime(video.duration)}` ;
}

//click to seek within the video
function setProgress(e){
 const newTime  = e.offsetX /progressRange.offsetWidth;
 progressBar.style.width = `${newTime *100}%`;
 video.currentTime = newTime * video.duration ; 

}


// Volume Controls --------------------------- //



// Change Playback Speed -------------------- //



// Fullscreen ------------------------------- //

//Event listeners
playBtn.addEventListener('click' , togglePlay);
video.addEventListener('click' , togglePlay);
video.addEventListener('timeupdate' , updateProgress) ;
video.addEventListener('canplay' , updateProgress) ;
progressRange.addEventListener('click' ,setProgress );