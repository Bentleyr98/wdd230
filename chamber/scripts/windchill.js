let temp = Number(document.querySelector('.temp').textContent);
let windSpeed = Number(document.querySelector('.wind').textContent);


if(temp <= 50 & windSpeed > 3.0){
    chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275*temp*Math.pow(windSpeed,0.16)));
    document.querySelector('.chill').textContent = chill;
} else{
    document.querySelector('.chill').textContent = chill;
}