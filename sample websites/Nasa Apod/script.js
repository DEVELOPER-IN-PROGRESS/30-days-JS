const resultsNav = document.getElementById('resultsNav');
const favouritesNav = document.getElementById('favouritesNav');
const imagesContainer = document.querySelector('.images-container');
const saveConfirmed = document.querySelector('.loader');


// nasa API
const count=10;
const apiKey = 'DEMO_KEY';  
const apiUrl =`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray =[] ;

function updateDOM() {
resultsArray.forEach( (result)=> { 
    // Card container 
    const card = document.createElement('div');
    card.classList.add('card');
    //link
    const link = document.createElement('a');
    link.href = result.hdurl;
    link.title = 'View full Image';
    link.target = '_blank' ;
    // Image
    const image = document.createElement('img');
    image.src = result.url ;
    image.alt = 'Nasa Picture of the day' ;
    image.loading = 'lazy' ;
    image.classList.add('card-img-top');   
    //Card Body
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
     // Card Title
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = result.title ;
    //Save Text
    const saveText = document.createElement('p');
    saveText.classList.add('clickable');
    saveText.textContent = 'Add to Favourites' ;
     // Card Text 
     const cardText = document.createElement('p');
     cardText.textContent = result.explanation ; 
     //footer Container ;
     const footer = document.createElement('small');
     footer.classList.add('text-muted');
     //Date
     const date = document.createElement('strong');
     date.textContent = result.date ;
     //Copyright
     const copyrightResult = result.copyright === undefined ? ' '  : result.copyright ; 
     const copyright = document.createElement('span');
     copyright.textContent = `${copyrightResult}` ;
     // Append
     footer.append( date , copyright);
     cardBody.append(cardTitle ,  saveText , cardText ,footer) ;
     link.appendChild(image);
     card.append(link , cardBody);
    imagesContainer.appendChild(card) ;
}) ;
}

//Get random 10 images
async function getNasaPictures(){
    try{
       const  response =  await fetch(apiUrl);
       resultsArray = await response.json();
       console.log(resultsArray);
        updateDOM();
       
    }
    catch(error){

    }
}



//onLoad
getNasaPictures();