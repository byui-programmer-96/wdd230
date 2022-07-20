const d = new Date();
document.getElementById("currentDate").innerHTML = d;

let Day = new Date().getDay();

function weekDay (Day) {
    if (Day == 6){
        document.querySelector('#banner').style.display = "block";
    }
    
}

weekDay(Day);
