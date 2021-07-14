

// nasa API
const count=10;
const apiKey = 'DEMO_KEY';  
const apiUrl =`https://api.nasa.gov/planetary/apod?API_KEY=${apiKey}&count=${count}`;

let resultsArray =[] ;

//Get random 10 images
async function getNasaPictures(){
    try{
       const  response =  await fetch(apiUrl);
       resultsArray = await response.json();
       console.log(resultsArray);
    }
    catch(error){

    }
}



//onLoad
getNasaPictures();