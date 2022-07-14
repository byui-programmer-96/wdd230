let headersList = {
  "Accept": "*/*",
  "User-Agent": "Thunder Client (https://www.thunderclient.com)"
 }
 
 fetch("https://api.openweathermap.org/data/2.5/weather?q=Preston, USA&callback=test&appid=6289b54b514cc72eac43e624d0af5cc4", { 
   method: "GET",
   headers: headersList
 }).then(function(response) {
   return response.text();
 }).then(function(data) {
   console.log(data);
 })