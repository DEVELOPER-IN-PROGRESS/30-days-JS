const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//prompt to select media stream  pass and play
async function  selectMediaStream(){
    try{
       const mediaStream = await navigator.mediaDevices.getDisplayMedia();
       videoElement.srcObject = mediaStream;
       videoElement.onloadedmetadata = () => {
           videoElement.play();
       }
    }
    catch (error){
        console.error('SEVERE ERROR OCCURED' ,error)
    }
}
button.addEventListener('click' , async () => {
    //disabled button
    button.disabled = true ;
    //Start Picture in Picture 
    await videoElement.requestPictureInPicture();
    button.disabled = false ;
})
//onload
selectMediaStream();