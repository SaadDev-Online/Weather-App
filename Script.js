const apiKey = "0c1c29d01bbd3da0e24c8760ac58accd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const city1 = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const input = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");
const title = document.querySelector("#title");

const checkWeather = async (city) => {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status === 404) {
        error.style.display = "block";
        weather.style.display = "none";
        title.style.display = "none";
    } else {
        let data = await response.json();
 
    city1.innerText = data.name;
    temp.innerText = Math.round(data.main.temp) + "°C";
    humidity.innerText = Math.round(data.main.humidity) + "%";
    wind.innerText = Math.round(data.wind.speed) + " km/h";
    if(data.weather[0].main === "Snow") {
        weatherIcon.src = "Images/snow.png"
    } else if(data.weather[0].main === "Clear") {
        weatherIcon.src = "Images/clear.png"
    } else if(data.weather[0].main === "Clouds") {
        weatherIcon.src = "Images/clouds.png"
    } else if(data.weather[0].main === "Drizzle") {
        weatherIcon.src = "Images/drizzle.png"
    } else if(data.weather[0].main === "Mist") {
        weatherIcon.src = "Images/mist.png"
    } else if(data.weather[0].main === "Rain") {
        weatherIcon.src = "Images/rain.png"
    }
    weather.style.display = "block";
    error.style.display = "none";
    title.style.display = "none";
    }
    
}

btn.addEventListener("click", () => {
    checkWeather(input.value);
})

