const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEL =document.getElementById('website-name');;
const websiteUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');;

let bookmarks = []; 

// Show modal focus on input    
function showModal() {
    modal.classList.add('show-modal');
    websiteNameEL.focus();
}

modalShow.addEventListener('click', showModal);
modalClose.addEventListener('click' ,()=> {
    modal.classList.remove('show-modal');
});

window.addEventListener('click' ,(e)=> (e.target === modal ? modal.classList.remove('show-modal') : false));

//Validate form 
function validate(nameValue , urlValue){
    const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g; 
    const regex =new RegExp(expression);
    if(!nameValue || !urlValue){
        alert('enter Valid values for both fields');
        return false ;
    }
    if(urlValue.match(regex)){
        
    }
    if(!urlValue.match(regex)){
        alert('Enter valid web address');
        return false ; 
    }
    return true ; 
}

function buildBookmarks(){
    //Remove all bookmarks in beginnig 
    bookmarksContainer.textContent= '' ;
    // Build Items 
    bookmarks.forEach( (bookmark)=>{
        const { name ,url } = bookmark ;
        const item = document.createElement('div');
        item.classList.add('item');
        //Close Icon 
        const closeIcon  = document.createElement('i');
        closeIcon.classList.add('fas' , 'fa-times');
        closeIcon.setAttribute('title' ,'Delete Bookmark');
        closeIcon.setAttribute('onclick' ,`deleteBookmark('${url}')`);
        //Favicon /Link 
        const linkInfo = document.createElement('div');
        linkInfo.classList.add('name');
        const favicon  = document.createElement('img' );
        favicon.setAttribute('src' , `https://s2.googleusercontent.com/s2/favicons?
        domains=${url}`) ;
        favicon.setAttribute('alt' ,'favicon');
        // Link 
        const link = document.createElement('a');
        link.setAttribute('href' ,`${url}`);
        link.setAttribute('target','_blank'); 
        link.textContent =name ;
        // Append to bookmark container 
        linkInfo.append(favicon, link);
        item.append(closeIcon ,linkInfo);
        bookmarksContainer .appendChild(item);   
   });
}

//Fetch Bookmarks 
function fetchBookmarks(){
 //gEt bookmarks from local storage if it is present
 if (localStorage.getItem('bookmarks')){
     bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
 }else{
   bookmarks = [
       {
           name: 'duck go' ,
           url : 'https://www.duckduckgo.com',
       } ,
   ];
   localStorage.setItem('bookmarks' ,JSON.stringify(bookmarks));
 }
 buildBookmarks();
}

//Delete bookmarks 
function deleteBookmark(url){
    bookmarks.forEach (  (bookmark,i)=> {
       if(bookmark.url === url ){
           bookmarks.splice(i, 1 );
       }
    }) ;
    //UPdate local storage for changes
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    fetchBookmarks();
}




//handle data from form 
function storeBookmark(e){
    e.preventDefault();  
const nameValue  = websiteNameEL.value;
let urlValue = websiteUrlEl.value ;
if(!urlValue.includes('http://','https://')){
    urlValue =`https://${urlValue}`;
}

// check regex for URL 
if(!validate(nameValue , urlValue)){
    return false;
}

 const bookmark = {
     name: nameValue ,
     url: urlValue ,
 }
 bookmarks.push(bookmark);
 localStorage.setItem('bookmarks' , JSON.stringify(bookmarks));
 fetchBookmarks() ;
 bookmarkForm.reset();
 websiteNameEL.focus();
}


//Event  listener
bookmarkForm.addEventListener('submit' ,storeBookmark) ;

fetchBookmarks();