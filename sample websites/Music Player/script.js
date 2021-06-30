const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container')
const progress = document.getElementById('progress')

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
 console.log(song.artists);
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
       // console.log(duration , currentTime);
        //
        const progressPercent = (currentTime / duration) * 100 ;
        console.log(progressPercent)
        progress.style.width =`${progressPercent}%`;
    
    }
}

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateProgressBar) ;



//timeupdate