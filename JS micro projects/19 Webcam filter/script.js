const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo(){
    navigator.mediaDevices.getUserMedia({video:true , audio:false})
    .then(localMediaStream =>{ 
        console.log(localMediaStream);
        video.srcObject = localMediaStream;
        //console.log(localMediaStream.src);
        video.play();
    })
    .catch(err=>{
        console.error(`Access Denied , Pal` ,err );
    })
}

getVideo();

function paintToCanvas(){
    const width = video.videoWidth;
    const height = video.videoHeight ;
    
    canvas.width = width ;
    canvas.height = height ; 

return  setInterval(  ()=>{
      ctx.drawImage(video, 0, 0 , width , height);
    } , 1699);

}

function takePhoto(){
    snap.currentTime = 0 
    snap.play();

    const data = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = data ;
    link.setAttribute('download', 'handsome')
    link.innerHTML = `<img src=${data} alt='Boba Fett' />`;
    strip.insertBefore(link , strip.firstChild);

}

// for automatically running paintToCanvas rather can calling from browser 
video.addEventListener('canplay' , paintToCanvas)