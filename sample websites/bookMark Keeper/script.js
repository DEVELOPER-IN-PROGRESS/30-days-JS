const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEL =document.getElementById('website-name');;
const websiteUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');;

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
        alert('match');
    }
    if(!urlValue.match(regex)){
        alert('Enter valid web address');
        return false ; 
    }
    return true ; 
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
}


//Event  listener
bookmarkForm.addEventListener('submit' ,storeBookmark) ;