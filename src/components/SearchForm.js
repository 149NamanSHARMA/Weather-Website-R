import React, { useState } from 'react';

function SearchForm({ setWeatherData, setCityImage }) {
  const [city, setCity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const weatherResponse = await fetch(`/.netlify/functions/fetchWeather?city=${city}`);
      const weatherData = await weatherResponse.json();
      setWeatherData(weatherData);

      const imageResponse = await fetch(`/.netlify/functions/fetchImage?city=${city}`);
      const imageData = await imageResponse.json();
      setCityImage(imageData.urls.regular);
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Error fetching data. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        required
      />
      <button type="submit">Get Weather</button>
    </form>
  );
}

export default SearchForm;
