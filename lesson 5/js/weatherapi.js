function weatherData(cityNumber){
  // Lodas weather statistics for the supplied town
  const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityNumber + "&units=imperial&appid=c586379ded6a7698afec8afa0d841a8a";
  fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      const currentWeather = jsObject.list[0].weather[0].main;
      const windSpeed = jsObject.list[0].wind.speed;
      const humidity = jsObject.list[0].main.humidity;
      const temp = jsObject.list[0].main.temp;
      const tags = document.getElementsByClassName("dayOfWeek");
      const labeltags = document.getElementsByClassName("forecast-label");
      document.getElementById("currently").innerHTML = currentWeather;
      document.getElementById("temperature").textContent = temp + " ℉";
      document.getElementById("humidity").textContent = humidity+"%";
      document.getElementById("windspeed").textContent = windSpeed + " Mph";

      data = jsObject.list;
      let day = 0;
      data.map(entry => {
        if (entry.dt_txt.includes("18:00:00")){
          dayIcon = "https://openweathermap.org/img/wn/" + entry.weather[0].icon + "@2x.png";
          tags[day].setAttribute('src', dayIcon);
          labeltags[day].innerHTML = entry.weather[0].main;
          day += 1;
        }
      });

      showWindChill();    
    });
  }
  function toggleMenu() {
    // Controls the menu button on the small view of the site
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function toggleButton() {
    // toggles the icon on the small version of the site from an open umbrella to a closed umbrella and back
    currentHTML = document.querySelector('#menuButton').innerHTML;
    if (currentHTML.includes("🌂 Menu")) {
        document.querySelector('#menuButton a').innerHTML = "&#9730; Menu";
    } else {
        document.querySelector('#menuButton a').innerHTML = "&#127746; Menu";
    }
}

function displayBanner() {
    // Displays the alert-banner on relevent pages ONLY when the day is Saturday
    dayOfWeek = new Date().getDay();
    if (dayOfWeek == 6) {
        document.querySelector('#alert-banner').style.display = "block";
    }
}

function activeLink() {
    // Changes the background color of a link if the link references the active page
    let page = 0;
    for (var i = 0; i < document.links.length; i++) {
        if (document.links[i].href === document.URL) {
            page = i;
        }
    }
    document.links[page].className = 'activeLink';
}

function updateSlider(){
    // displays a numeric value beneath the slide value on teh storm center page form
    tagName = document.querySelector("output");
    value = document.querySelector("#storm_severity").value;
    console.log("tag:" + tagName + ' - value: ' + value);
    tagName.innerHTML = value;
}