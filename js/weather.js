const API_KEY = "e31525b0763e43d0c8d4e91204938afd";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang={lang}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-Child");
      const temp = document.querySelector("#weather span:nth-Child(2)");
      const city = document.querySelector("#weather span:last-Child");
      city.innerText = data.name;
      temp.innerText = `${data.main.temp}`;
      weather.innerText = `${data.weather[0].main}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
