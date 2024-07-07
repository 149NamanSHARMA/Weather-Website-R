import React from 'react';

function WeatherInfo({ data }) {
  return (
    <div className="weather-info">
      <h2>Weather in {data.name}</h2>
      <p>The weather is currently {data.weather[0].description}.</p>
      <h3>Temperature: {data.main.temp}°C</h3>
      <p>Feels like: {data.main.feels_like}°C</p>
      <p>Min: {data.main.temp_min}°C, Max: {data.main.temp_max}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
      <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="Weather icon" />
    </div>
  );
}

export default WeatherInfo;
