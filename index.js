const sliderSwitch = document.getElementById("unitswitch");
const distanceText = document.getElementById("distance");
const speedText = document.getElementById("speed");
var newUnits = "imperial";

sliderSwitch.onclick = function(){
    if ( newUnits == "imperial"){
        distanceText.textContent = "23.4 Miles";
        speedText.textContent = "3.6 mph";
        newUnits = "metric";
    }
    else{
        distanceText.textContent = "37.66km";
        speedText.textContent = "5.8 km/h";
        newUnits = "imperial";
    }
}