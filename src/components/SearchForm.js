import React, { useState } from 'react';

function SearchForm({ setWeatherData, setCityImage }) {
  const [city, setCity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const unsplashApiKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

    try {
      const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`);
      if (!weatherResponse.ok) {
        throw new Error('Weather data not found');
      }
      const weatherData = await weatherResponse.json();
      setWeatherData(weatherData);

      const imageResponse = await fetch(`https://api.unsplash.com/photos/random?query=${city}&client_id=${unsplashApiKey}`);
      if (!imageResponse.ok) {
        throw new Error('Image not found');
      }
      const imageData = await imageResponse.json();
      if (!imageData.urls || !imageData.urls.regular) {
        throw new Error('Image URL not found');
      }
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
