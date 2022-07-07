const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=42.096291&lon=-111.876640&appid=6289b54b514cc72eac43e624d0af5cc";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });
  const imagesrc = 'http://openweathermap.org/img/wn/10d@2x.png' + jsObject.weather[0].icon + '.png';  // note the concatenation
  const desc = jsObject.weather[0].description;  // note how we reference the weather array
  document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
  document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
  document.getElementById('icon').setAttribute('alt', desc);
 