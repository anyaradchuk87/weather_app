function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayIndex = date.getDay();
  let day = days[dayIndex];

  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = document.querySelector("#city");
  city.innerHTML = searchInput.value;
}

function setCelcium(event) {
  event.preventDefault();
  let temperatureC = document.querySelector("h1");
  temperatureC.innerHTML = "11";
}

function setFahrenheit(event) {
  event.preventDefault();
  let temperatureF = document.querySelector("h1");
  temperatureF.innerHTML = "51";
}

function findPosition(position) {
  let apiKey = "a8c22b5699a15a6f6db70d81d7aec97a";
  let lat = position.coords.latitude;
  let lon = position.coords.longtitude;
  let units = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(url).then(showWeather);
}

function showWeather(response) {
  let h1 = document.querySelector("h1");
  let temperature = Math.round(response.data.main.temp);
  h1.innerHTML = temperature;
}

let currentDate = new Date();
let h5 = document.querySelector("h5");
h5.innerHTML = formatDate(currentDate);

let searchForm = document.querySelector("#search");
searchForm.addEventListener("submit", searchCity);

let celcium = document.querySelector("#celcium");
celcium.addEventListener("click", setCelcium);

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", setFahrenheit);

navigator.geolocation.getCurrentPosition(findPosition);
