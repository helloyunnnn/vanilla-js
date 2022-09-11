const city = document.querySelector("#time-weather__weather-city");
const temp = document.querySelector("#time-weather__weather-temp");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const apiId = "23281958f9f3005b1ae8b824e760ae19";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiId}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      temp.innerText = `${Math.round(data.main.temp)}°`;
    });
}

function onGeoError() {}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
