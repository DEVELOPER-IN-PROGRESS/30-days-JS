const count = 5; 
const apiKey ="tT3XuOJisJX1tBSNnbMK8Doa4NVpfij5ZhspWJW1YzTk"
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}` ;
const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

const photosArray = [] ;

  //Helper function for set attributes 
  function setAttributes(element , attributes) {
     for ( const key in attributes){
         element.setAttribute(key , attributes[key]);
     }
  }    
 

// Create elements for displaying phot and its attributes 
 function displayPhotos(){
     // ForEach
      photosArray.forEach( (photo) => {
        //create <a>
        const item = document.createElement('a');
        //item.setAttribute('href' , photo.links.html);   item.setAttribute('target' ,'_blank');
        setAttributes(item ,{href:photo.links.html , target:'_blank' ,})  ;
        
        //Create <img> 
           const img =document.createElement('img');
        //img.setAttribute('src', photo.urls.regular); img.setAttribute('alt', photo.descripton.alt_description);   img.setAttribute('title' , photo.descripton.alt_description);
        setAttributes(img, {src:photo.urls.regular , alt:photo.descripton.alt_description , title:photo.descripton.alt_description ,}) ;
        
        // put image in image container
           imageContainer.appendChild

      })
 }

 async function getPhotos() {
     try {
        const response = await fetch(apiUrl) ;
        photosArray = response.json();
        displayPhotos();
     }
     catch(error) {
 console.error('You have exceeded your API request')
     }
 }

 //onLoad
 getPhotos();   