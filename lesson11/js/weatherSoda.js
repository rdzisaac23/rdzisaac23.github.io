//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5607916&appid=e193587ff0f2ebc68b827b7bbec44563&units=imperial"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
    document.getElementById('temp').innerHTML= weatherInfo.main.temp_max;
    document.getElementById('low-temp').innerHTML=weatherInfo.main.temp_min;
    document.getElementById('wind-speed').innerHTML=weatherInfo.wind.speed;

    // const iconcode = weatherInfo.weather[0].icon;
    // console.log(iconcode);

    // const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    // console.log(icon_path);
    // document.getElementById('weather_icon').src = icon_path;

 }); //end of "then" fat arrow function