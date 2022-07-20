var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?lat=20.510600&lon=-86.947350&appid=6289b54b514cc72eac43e624d0af5cc4&units=Imperial&main.humidity=Humidity, %&main.feels_like=Imperial'+input.value+'&appid=6289b54b514cc72eac43e624d0af5cc4')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var humidityValue = data['humidity'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  humidity.innerHTML = "humidity - "+humidityValue;
  

})

.catch(() => alert("Wrong city name!"));
})