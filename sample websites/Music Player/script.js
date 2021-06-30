const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container')
const progress = document.getElementById('progress')
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

const songs= [
    {
        name :'jacinto-1',
        displayName: 'Electric Chill Machine',
        artists:'Jaconto Design',
    },
    {
        name :'jacinto-2',
        displayName: 'Seven Nation Army',
        artists:'Jaconto Design',
    },
    {
        name :'jacinto-3',
        displayName: 'Electric Chill Machine',
        artists:'Jaconto Design',
    },
    {
        name :'jacinto-4',
        displayName: 'Electric Chill Machine',
        artists:'Jaconto Design',
    },
]

let isPlaying = false;

//Play song
function playSong(){
    isPlaying = true;
    playBtn.classList.replace('fa-play' ,'fa-pause');
    playBtn.setAttribute('title' , 'Pause');
    music.play();
}

function pauseSong(){
    isPlaying = false ;
    playBtn.classList.replace('fa-pause' ,'fa-play');
    playBtn.setAttribute('title' , 'Play');
    music.pause();
}

//Play or Pause event Listener
playBtn.addEventListener('click' , () =>( isPlaying ? pauseSong() :playSong()));

//Update DOM
function loadSong(song){
    title.textContent = song.displayName;
   artist.textContent = song.artists;
    music.src= `./music/${song.name}.mp3`;
    image.src = `./img/${song.name}.jpg`;
 
}

//currentsong
let songIndex = 0 ;

//previos song
function prevSong(){
    songIndex--;
    if(songIndex<0){
        songIndex= songs.length -1;
    }
    loadSong(songs[songIndex]);
    playSong();
}


//next song
function nextSong(){
    songIndex++;
    if(songIndex> songs.length -1){
        songIndex=0;
    }
   loadSong(songs[songIndex]);
    playSong();
}

//onload Select 1st Song
loadSong(songs[songIndex]);

//update progress bar and time 
function updateProgressBar(e){
    if(isPlaying){
        const { duration , currentTime } = e.srcElement;
        const progressPercent = (currentTime / duration) * 100 ;
        progress.style.width =`${progressPercent}%`;
        // display duration 
        const durationMinutes = Math.floor(duration/60);
        let durationSeconds = Math.floor(duration % 60);
         durationSeconds =    durationSeconds < 10 ? `0${durationSeconds}` : durationSeconds ;
        
         
      // delay to not display NaN
      if (durationSeconds){  
        durationEl.textContent = `${durationMinutes}:${durationSeconds}`; 
       }

    // display  current time current  
    const currentMinutes = Math.floor(currentTime/60);
    let currentSeconds = Math.floor(currentTime % 60);
    currentSeconds =    currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds ;
  
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`; 


    }
}
//set progress bar
function setProgressBar(e){
 console.log(e);
 const width = this.clientWidth;
 const clickX = e.offsetX ; 
 const { duration } = music ;
 console.log(clickX / width); 
 console.log( (clickX / width)*duration); 
music.currentTime =(clickX / width)*duration ;
}


//event listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateProgressBar) ;
progressContainer.addEventListener('click' , setProgressBar);


//timeupdate