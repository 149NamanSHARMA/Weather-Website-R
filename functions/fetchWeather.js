exports.handler = async function(event, context) {
  const fetch = (await import('node-fetch')).default;
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const city = event.queryStringParameters.city;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch weather data' })
    };
  }
};
