let temp = Number(document.querySelector('.temp').textContent);
console.log(temp);
let windSpeed = Number(document.querySelector('.wind').textContent);
console.log(windSpeed);


if(temp <= 50 & windSpeed > 3.0){
    chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275*temp*Math.pow(windSpeed,0.16)));
    document.querySelectorAll('chill').textContent = chill;
    console.log(chill);
} else{
    document.querySelectorAll('chill').textContent = chill;
}