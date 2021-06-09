// we Star with String numbers  ,booleans
 let age = 22 ; 
 let age2 = age; 
 console.log(age , age2) ;
 age = 200 ; 
 console.log(age , age2) ;

 // modifyiying  original wont update the  copy 

 const meme = [ 'Me' , 'and' , 'the' , 'boys' ]  ;

 const memeNew = meme;
 console.log(memeNew , meme) ;

 const meme2 = meme.slice();   // method 1 

 const meme4 = [].concat(meme);  //method 2 
 
 meme[3] = 'girls' 

 console.log(memeNew);

 // modification of original  array updates the references too 
// This is way different from string and  boolean modification 

//This can be avoided by using slice 

