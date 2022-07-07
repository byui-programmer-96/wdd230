const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=6289b54b514cc72eac43e624d0af5cc4&units=Fahrenheit(imperial)";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
  });
  const imagesrc = 'http://openweathermap.org/img/wn/10d@2x.png' + jsObject.weather[0].icon + '.png';  // note the concatenation
  const desc = jsObject.weather[0].description;  // note how we reference the weather array
  document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
  document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
  document.getElementById('icon').setAttribute('alt', desc);
 