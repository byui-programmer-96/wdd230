fetch('https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=6289b54b514cc72eac43e624d0af5cc4&units=Imperial: Fahrenheit&main.temp=Imperial: Fahrenheit&main.humidity=Humidity, %&wind.speed=Imperial: miles/hour')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });