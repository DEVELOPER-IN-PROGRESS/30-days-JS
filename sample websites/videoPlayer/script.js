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
const  speed = document.querySelector('.player-speed');
const player = document.querySelector('.player')
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
let lastVolume = 1 ; 
//Volume bar 
function changeVolume(e){
    let volume = e.offsetX /volumeRange.offsetWidth ;
    //Round volume 
    if (volume <0.1){
        volume = 0 ;
    }
    if(volume >0.9) {
        volume = 1; 
    }
    volumeBar.style.width = `${volume * 100}%` ;
     //change volume icon based on volume 
     volumeIcon.className = '' ; 
     if ( volume > 0.7){
         volumeIcon.classList.add('fas', 'fa-volume-up');
     }
     else  if ( volume < 0.7 && volume > 0 ){
        volumeIcon.classList.add('fas', 'fa-volume-down');
    }else if ( volume === 0 ){
        volumeIcon.classList.add('fas', 'fa-volume-off');
    }
 lastVolume = volume 

}
// Mute /Unmute 
function muteTrigger(){
    volumeIcon.className = '';
      if( video.volume ){
          lastVolume = video.volume ; 
          video.volume = 0 ;
          volumeBar.style.width = 0 ; 
          volumeIcon.classList.add('fas', 'fa-volume-mute');
          volumeIcon.setAttribute('title' , 'Unmute');
      }
      else {
          video.volume = lastVolume;
          volumeBar.style.width = `${lastVolume*100}%` ;
          volumeIcon.classList.add('fas', 'fa-volume-up');
          volumeIcon.setAttribute('title' , 'Mute');
      }
}

// Change Playback Speed -------------------- //
function changeSpeed(){
    video.playbackRate = speed.value
}


// Fullscreen ------------------------------- //

function openFullscreen(elem) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }
  
  /* Close fullscreen */
  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
    video.classList.add('video-fullscreen');
  }

  let fullscreen = false ; 
  function toggleFullscreen(){
      if(!fullscreen){
          openFullscreen(player)
      }
      else{
          closeFullscreen();
      }
      fullscreen = !fullscreen ;
  }
//Event listeners
playBtn.addEventListener('click' , togglePlay);
video.addEventListener('click' , togglePlay);
video.addEventListener('timeupdate' , updateProgress) ;
video.addEventListener('canplay' , updateProgress) ;
progressRange.addEventListener('click' ,setProgress );
volumeRange.addEventListener('click' ,changeVolume) ;
volumeIcon.addEventListener('click' , muteTrigger) ;
speed.addEventListener('change' , changeSpeed);
fullscreenBtn.addEventListener('click' ,toggleFullscreen);