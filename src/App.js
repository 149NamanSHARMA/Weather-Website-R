import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import WeatherInfo from './components/WeatherInfo';
import CityImage from './components/CityImage';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [cityImage, setCityImage] = useState(null);

  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchForm setWeatherData={setWeatherData} setCityImage={setCityImage} />
      {weatherData && cityImage && (
        <div className="container">
          <WeatherInfo data={weatherData} />
          <CityImage imageUrl={cityImage} />
        </div>
      )}
    </div>
  );
}

export default App;
