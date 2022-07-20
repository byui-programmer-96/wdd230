const d = new Date();
document.getElementById("currentDate").innerHTML = d;

let Day = new Date().getDay();

function weekDay (Day) {
    if (Day == 6){
        document.querySelector('#banner').style.display = "block";
    }
    
}

weekDay(Day);
let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)"
   }
   
   fetch("https://api.openweathermap.org/data/2.5/weather?lat=20.510600&lon=-86.947350&appid=6289b54b514cc72eac43e624d0af5cc4&units=imperial", { 
     method: "GET",
     headers: headersList
   }).then(function(response) {
     return response.text();
   }).then(function(data) {
     console.log(data);
   })