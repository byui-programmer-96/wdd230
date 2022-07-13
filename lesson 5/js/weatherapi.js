fetch('https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=6289b54b514cc72eac43e624d0af5cc4&units=Fahrenheit&main.temp=Fahrenheit')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });