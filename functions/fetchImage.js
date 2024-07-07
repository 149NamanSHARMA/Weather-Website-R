exports.handler = async function(event, context) {
  const fetch = (await import('node-fetch')).default;
  const API_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
  const city = event.queryStringParameters.city;

  const url = `https://api.unsplash.com/photos/random?query=${city}&client_id=${API_KEY}`;

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
      body: JSON.stringify({ error: 'Failed to fetch image data' })
    };
  }
};
