const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5600363&appid=189f1bf219cf90363ef486e5a9cdfd40";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let f = (jsObject.main.temp - 273.15) * 1.8 + 32;
    document.querySelector('#current-temp').textContent = f.toFixed(2);


    
    let desc = jsObject.weather[0].description;
    // document.querySelector('#icon-src').textContent = iconsrc;
    
    document.querySelector('.condition').textContent = desc;

    if (desc == 'clear sky'){
      let iconsrc = 'images/clearSky.png';
      document.querySelector('#weathericon').setAttribute('src', iconsrc);
    } else if (desc = 'few clouds'){
      let iconsrc = "images/fewClouds.png";
      document.querySelector('#weathericon').setAttribute('src', iconsrc);
    } else if (desc = 'scattered clouds'){
      let iconsrc = 'images/scatteredCloudy.png';
      document.querySelector('#weathericon').setAttribute('src', iconsrc);
    } else if (desc = 'broken clouds'){
      let iconsrc = 'images/brokenClouds.png';    
      document.querySelector('#weathericon').setAttribute('src', iconsrc);
    } else if (desc = 'shower rain'){
      let iconsrc = 'images/showerRain.png';    
      document.querySelector('#weathericon').setAttribute('src', iconsrc);
    } else if (desc = 'rain'){
      let iconsrc = 'images/rain.png';    
      document.querySelector('#weathericon').setAttribute('src', iconsrc);
    } else if (desc = 'thunderstorm'){
      let iconsrc = 'images/thunderstorm.png';    
      document.querySelector('#weathericon').setAttribute('src', iconsrc);
    } else if (desc = 'snow'){
      let iconsrc = 'images/snow.png';    
      document.querySelector('#weathericon').setAttribute('src', iconsrc);
    } else if (desc = 'mist'){
      let iconsrc = 'images/mist.png';    
      document.querySelector('#weathericon').setAttribute('src', iconsrc);
    } else{
      let iconsrc = 'images/fewClouds.png';    
      document.querySelector('#weathericon').setAttribute('src', iconsrc);
    }

    document.querySelector('#weathericon').setAttribute('alt', desc);
    
    // document.querySelector('#weathericon').setAttribute('src', iconsrc);

    let speed = jsObject.wind.speed;
    console.log(speed);
    document.querySelector(".wind").textContent = speed;

  });


  





let temp = Number(document.querySelector('#current-temp').textContent);
let windSpeed = Number(document.querySelector('.wind').textContent);


if(temp <= 50 & windSpeed > 3.0){
    chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275*temp*Math.pow(windSpeed,0.16)));
    document.querySelector('.chill').textContent = chill;
} else{
    document.querySelector('.chill').textContent = 'N/A';
}