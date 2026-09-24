const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");
const locationButton = document.getElementById("locationButton");
const weather = document.getElementById("weather");

function getWeatherCondition(code) {
	if (code === 0) {
		return "Clear Sky";
	}
	if (code === 1 || code === 2) {
		return "Partly Cloudy";
	}
	if (code === 3) {
		return "Overcast";
	}
	if (code === 45 || code === 48) {
		return "Fog";
	}
	if (code >= 51 && code <= 57) {
		return "Drizzle";
	}
	if (code >= 61 && code <= 67) {
		return "Rain";
	}
	if (code >= 71 && code <= 77) {
		return "Snow";
	}
	if (code >= 80 && code <= 82) {
		return "Rain Showers";
	}
	if (code === 85 || code === 86) {
		return "Snow Showers";
	}
	if (code === 95 || code === 96 || code === 99) {
		return "Thunderstorm";
	}
	return "Unknown";
}

async function getWeather(latitude, longitude, city) {
	weather.innerHTML = "<p>Loading...</p>";
	try {
		const response = await fetch(
			`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&temperature_unit=celsius&wind_speed_unit=kmh`
		);
		if (!response.ok) {
			throw new Error("Weather request failed");
		}
		const data = await response.json();
		const current = data.current;
		const condition = getWeatherCondition(current.weather_code);
		weather.innerHTML = `
			<h2>${city}</h2>
			<p>Temperature: ${current.temperature_2m}°C</p>
			<p>Condition: ${condition}</p>
			<p>Humidity: ${current.relative_humidity_2m}%</p>
			<p>Wind: ${current.wind_speed_10m} km/h</p>
			<p>Feels Like: ${current.apparent_temperature}°C</p>
		`;
	} catch (error) {
		console.error(error);
		weather.innerHTML = "<p>Unable to get weather data</p>";
	}
}

async function searchWeather() {
	const city = cityInput.value.trim();
	if (city === "") {
		return;
	}
	weather.innerHTML = "<p>Loading...</p>";
	try {
		const response = await fetch(
			`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
		);
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
	}
}

function getCurrentLocation() {
	if (!navigator.geolocation) {
		weather.innerHTML = "<p>Geolocation is not supported by your browser</p>";
		return;
	}
	weather.innerHTML = "<p>Getting your location...</p>";
	navigator.geolocation.getCurrentPosition(
		position => {
			const latitude = position.coords.latitude;
			const longitude = position.coords.longitude;
			getWeather(latitude, longitude, "Your Location");
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