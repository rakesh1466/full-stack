const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");
const locationButton = document.getElementById("locationButton");
const weather = document.getElementById("weather");
const forecast = document.getElementById("forecast");

function getWeatherCondition(code) {
	if (code === 0) return "Clear Sky";
	if (code === 1 || code === 2) return "Partly Cloudy";
	if (code === 3) return "Overcast";
	if (code === 45 || code === 48) return "Fog";
	if (code >= 51 && code <= 57) return "Drizzle";
	if (code >= 61 && code <= 67) return "Rain";
	if (code >= 71 && code <= 77) return "Snow";
	if (code >= 80 && code <= 82) return "Rain Showers";
	if (code === 85 || code === 86) return "Snow Showers";
	if (code >= 95) return "Thunderstorm";
	return "Unknown";
}

function getWeatherIcon(code) {
	if (code === 0) return "☀️";
	if (code === 1 || code === 2) return "⛅";
	if (code === 3) return "☁️";
	if (code === 45 || code === 48) return "🌫️";
	if (code >= 51 && code <= 57) return "🌦️";
	if (code >= 61 && code <= 67) return "🌧️";
	if (code >= 71 && code <= 77) return "❄️";
	if (code >= 80 && code <= 82) return "🌦️";
	if (code === 85 || code === 86) return "🌨️";
	if (code >= 95) return "⛈️";
	return "🌡️";
}

function getDayName(date) {
	return new Date(date).toLocaleDateString("en-US", {
		weekday: "short"
	});
}

function displayWeather(data, city) {
	const current = data.current;
	const icon = getWeatherIcon(current.weather_code);
	const condition = getWeatherCondition(current.weather_code);
	weather.innerHTML = `
		<h2>${city}</h2>
		<div class="weather-main">
			<div class="weather-icon">${icon}</div>
			<p class="temperature">${current.temperature_2m}°C</p>
			<p class="condition">${condition}</p>
		</div>
		<div class="weather-details">
			<div class="weather-detail">
				<span>Humidity</span>
				<strong>${current.relative_humidity_2m}%</strong>
			</div>
			<div class="weather-detail">
				<span>Wind</span>
				<strong>${current.wind_speed_10m} km/h</strong>
			</div>
			<div class="weather-detail">
				<span>Feels Like</span>
				<strong>${current.apparent_temperature}°C</strong>
			</div>
		</div>
	`;
	displayForecast(data.daily);
}

function displayForecast(daily) {
	forecast.innerHTML = `
		<h2>5 Day Forecast</h2>
		<div class="forecast-list"></div>
	`;
	const forecastList = document.querySelector(".forecast-list");
	for (let i = 0; i < 5; i++) {
		const card = document.createElement("div");
		card.className = "forecast-card";
		card.innerHTML = `
			<h3>${getDayName(daily.time[i])}</h3>
			<div class="forecast-icon">${getWeatherIcon(daily.weather_code[i])}</div>
			<p class="forecast-max">${daily.temperature_2m_max[i]}°C</p>
			<p class="forecast-min">${daily.temperature_2m_min[i]}°C</p>
			<p>${getWeatherCondition(daily.weather_code[i])}</p>
		`;
		forecastList.appendChild(card);
	}
}

async function getWeather(latitude, longitude, city) {
	weather.innerHTML = "<p>Loading weather...</p>";
	forecast.innerHTML = "";
	try {
		const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,weather_code&temperature_unit=celsius&wind_speed_unit=kmh&timezone=auto`;
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error("Weather request failed");
		}
		const data = await response.json();
		displayWeather(data, city);
	} catch (error) {
		console.error(error);
		weather.innerHTML = "<p>Unable to fetch weather</p>";
		forecast.innerHTML = "";
	}
}

async function searchWeather() {
	const city = cityInput.value.trim();
	if (city === "") {
		return;
	}
	weather.innerHTML = "<p>Finding city...</p>";
	forecast.innerHTML = "";
	try {
		const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error("Location request failed");
		}
		const data = await response.json();
		if (!data.results || data.results.length === 0) {
			weather.innerHTML = "<p>City not found</p>";
			return;
		}
		const location = data.results[0];
		await getWeather(location.latitude, location.longitude, location.name);
	} catch (error) {
		console.error(error);
		weather.innerHTML = "<p>Unable to find city</p>";
		forecast.innerHTML = "";
	}
}

function getCurrentLocation() {
	if (!navigator.geolocation) {
		weather.innerHTML = "<p>Geolocation is not supported</p>";
		return;
	}
	weather.innerHTML = "<p>Getting your location...</p>";
	forecast.innerHTML = "";
	navigator.geolocation.getCurrentPosition(
		position => {
			getWeather(
				position.coords.latitude,
				position.coords.longitude,
				"Your Location"
			);
		},
		error => {
			console.error(error);
			weather.innerHTML = "<p>Unable to get your location</p>";
		}
	);
}

searchButton.addEventListener("click", searchWeather);
locationButton.addEventListener("click", getCurrentLocation);

cityInput.addEventListener("keydown", event => {
	if (event.key === "Enter") {
		searchWeather();
	}
});