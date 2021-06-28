// GEt quotes from API
let apiQuotes = [] ;
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const twitterBtn = document.getElementById('twitter');
const loader = document.getElementById('loader');

//show loader 
function loading(){
    loader.hidden = false ; 
    quoteContainer.hidden = true ;

}

function complete(){
    quoteContainer.hidden = false ; 
    loader.hidden = true ; 
}



//Show new quotes
function newQuote(){
    loading();
    //pick random quote
    const quote  = apiQuotes[Math.floor(Math.random() * apiQuotes.length)] ;
    //check if author field blank 
       if(!quote.author){
           authorText.textContent = 'unknown' ;
       }
       else {
        authorText.textContent = quote.author ;
       }

       if (quote.text.length > 120){
       quoteText.classList.add('long-quote');
       }
       else {
           quoteText.classList.remove('long-quote');
       }
    
    quoteText.textContent = quote.text ; 
    complete();

}

async function getQuotes(){
    loading();
    const apiUrl = 'https://type.fit/api/quotes' ;

    try{
        const  response = await fetch(apiUrl) ;
        apiQuotes = await response.json();
        newQuote();
    } catch(error){


    }
}
//Tweet Quote 
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}` ;
    window.open(twitterUrl, '_blank');
}
//Event listeners
newQuoteBtn.addEventListener('click', newQuote); 
twitterBtn.addEventListener('click' , tweetQuote) ;

// on Load
getQuotes();
