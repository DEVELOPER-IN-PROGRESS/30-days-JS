const form = document.querySelector(".top-banner form");
const select = document.querySelector(".top-banner select");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");

//place your API key HERE
const apiKey = "7c1c545a5e3dcb14a9666ed9c564ac28";

function submitAction(e){
 
  let inputVal = select.value;

  //check if there's already a city
  const listItems = list.querySelectorAll(".ajax-section .city");
  const listItemsArray = Array.from(listItems);

  //ajax
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json()    )
    
    .then(data => {
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
      }.svg`;
      

      const li = document.querySelector("li");
      li.classList.add("city");
      
      const markup = `
        <h2 class="city-name" data-name="${name},${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${ Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
          <img class="city-icon" src="${icon}" alt="${
        weather[0]["description"]
      }">
          <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
      `;
     
      li.innerHTML = markup;
      list.appendChild(li);
    })
    .catch(  () => {
      msg.textContent = "Please search for a valid city";
    }  );

  msg.textContent = "";
  form.reset();
  select.focus();

  e.preventDefault();
}

form.addEventListener("submit", submitAction);
