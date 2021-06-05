
const students = [{name:'alex' , branch:'ECE'} ,  { name:'Joel' , branch:'CSE'} , {name:'susan' , branch:'ECE'}] ; 

function  clickGreen(){
    const p = document.querySelector('p');
    p.style.color = 'green' ;
    p.style.fontSize= '50px'; 
}


// regular console
console.log('Hey console')

//interpolated 
console.log('Hey i am a  %s string' ,'+po')
console.log(`hey i am ${students[1].name} studiying in  ${students[1].branch}` );

//styled console
console.log(`%c hey i am   ${students[1].name} studiying in  ${students[1].branch}` , 'font-size:60px;text-shadow: 10px 10px 0  grey ');

//console warning 
console.warn('MAYDAY MAYDAY !!!');


//Error 
console.error('Not an actual error !!');

//info 
console.info('FYI:: I am a budding developer');

//Testing   it will fore off only on false condition
const p = document.querySelector('p');
console.assert(1==2 , 'THis is wrong')
console.assert(p.classList.contains('down') ,'Class not found') ;

//clean up console
//console.clear();

//DOM node elements
console.log(p);
console.dir(p);

//log lists out elements whereas  dir list out propertiese of that node element

//Grouping together  we can use group or groupCollapsed
students.forEach(
    student=>{
        console.groupCollapsed(`${student.name}`);
        console.log(`Hi there , I am ${student.name}  I am in ${student.branch} Branch`);
        console.groupEnd(`${student.name}`);
    }
    )


    //counting occurences of text in console

console.count('hi');


//TIME 
console.time('loading data ...');
fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });

      console.table(students);
      