const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5600363&appid=189f1bf219cf90363ef486e5a9cdfd40";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let f = (jsObject.main.temp - 273.15) * 1.8 + 32;
    document.querySelector('#current-temp').textContent = f.toFixed(2);


    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;

  });

  