document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");
  const API_KEY = "589dcbceec9d02b60b376891665553f4"; //env variables

  getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.ariaValueMax.trim();
    if (!city) return;

    // it may throw an error
    // server/database is always in another continent

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });

  async function fetchWeatherData(city) {
    // gets the data
  }

  function displayWeatherData(fetchWeatherData) {
    // display
  }

  function showError() {
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
});
