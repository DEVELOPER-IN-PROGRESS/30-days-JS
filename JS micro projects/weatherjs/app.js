const weather = new Weather('Boston' , 'MA') ;
const ui = new UI ();

weather.changeLocation('Miami' ,'FL')

document.addEventListener('DOMContentLoaded' ,getWeather)


function getWeather(){
 
weather.getWeather()
  .then(result =>{
      ui.paint(result)
  })
  .catch(err=> console.log(err))

}