const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");
const weather = document.getElementById("weather");
function searchWeather() {
	const city = cityInput.value.trim();
	if (city === "") {
		return;
	}
	weather.innerHTML = `
		<h2>${city}</h2>
		<p>Temperature: 29°C</p>
		<p>Condition: Clear Sky</p>
		<p>Humidity: 72%</p>
		<p>Wind: 12 km/h</p>
	`;
}
searchButton.addEventListener("click", searchWeather);