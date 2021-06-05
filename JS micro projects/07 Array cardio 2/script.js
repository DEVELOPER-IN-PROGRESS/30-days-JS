const people = [
    { name: 'Han', year: 1988 },
    { name: 'Ben', year: 1986 },
    { name: 'Leia', year: 1970 },
    { name: 'Luke', year: 2015 }
  ];



const comments = [
{ text: 'Superb' , id:12345},
{  text: 'Out of  this world' , id :25235} ,
{ text: 'You are light years ahead', id: 2039842 },
{ text: 'I am  inevitable', id: 123523 },
{ text: 'Cinemax went out days ago', id: 542328 }
];

//Some and every check 
  // Array.prototype.some()  

   const isAdult = people.some (  function (person){
       const currentYear = ( new Date()).getFullYear();
       if ( currentYear - person.year >= 19) {
            return true ;
       }
    });

  // This code below is another implementaion of above isAdult variable 

  const isAdult1 = people.some ( person =>(  ( new Date()).getFullYear()  ) - person.year >= 19 ) ;
    

     console.log({isAdult}); 

     console.log({isAdult1}) ; 

     // Array.prototype.every ()

     const allAdults = people.every ( person =>(  ( new Date()).getFullYear()  ) - person.year >= 19 ) ;
        console.log( {allAdults}) ;

        //Array.prototype .find()  finds a subset like object  just the one object you are looking for 
// fid comment with index :

const comment = comments.find( function(comment){
    if( comment.id === 123523 ){
         return true ;
    }
}) ;
console.log (comment) ; 

// Arrow function method 
 const comment1  = comments.find( comment => comment.id=== 123523  ) ;

 console.log (comment1);


 //Array findIndex ()
   //find comment with particular id 
     
   const index = comments.findIndex( comment => comment.id === 2039842 ); 
   console.log(index) ;

  comments.splice (index , 1 ) ;

   const newComments =[
    ...comments.splice(0 , index) ,
    comments.splice (index+ 1 ) 
   ] ;