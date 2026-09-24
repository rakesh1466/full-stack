const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");
const weather = document.getElementById("weather");
async function searchWeather() {
	const city = cityInput.value.trim();
	if (city === "") {
		return;
	}
	weather.innerHTML = "<p>Loading...</p>";
	try {
		const locationResponse = await fetch(
			`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
		);
		if (!locationResponse.ok) {
			throw new Error("Location request failed");
		}
		const locationData = await locationResponse.json();
		if (!locationData.results || locationData.results.length === 0) {
			weather.innerHTML = "<p>City not found</p>";
			return;
		}
		const location = locationData.results[0];
		const weatherResponse = await fetch(
			`https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&temperature_unit=celsius&wind_speed_unit=kmh`
		);
		if (!weatherResponse.ok) {
			throw new Error("Weather request failed");
		}
		const weatherData = await weatherResponse.json();
		const current = weatherData.current;
		weather.innerHTML = `
			<h2>${location.name}</h2>
			<p>Temperature: ${current.temperature_2m}°C</p>
			<p>Weather Code: ${current.weather_code}</p>
			<p>Humidity: ${current.relative_humidity_2m}%</p>
			<p>Wind: ${current.wind_speed_10m} km/h</p>
			<p>Feels Like: ${current.apparent_temperature}°C</p>
		`;
	} catch (error) {
		console.error(error);
		weather.innerHTML = "<p>Unable to get weather data</p>";
	}
}
searchButton.addEventListener("click", searchWeather);
cityInput.addEventListener("keydown", event => {
	if (event.key === "Enter") {
		searchWeather();
	}
});