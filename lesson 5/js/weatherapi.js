const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={fc604e0bab14243d24f022dc6e463c28}";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });