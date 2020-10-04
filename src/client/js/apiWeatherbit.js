export const getWeatherbitUrl = (lat, lon) => {
    const baseUrl = 'https://api.weatherbit.io/v2.0/forecast/daily?';
    const key = 'key=6a72ada44de7455c8c5617d8830c8aa8';
    let days = '&days=5';
    let latlng = `&lat=${lat}&lon=${lon}`;
    let weatherbitUrl = `${baseUrl}${key}${days}${latlng}`;
    return weatherbitUrl
};
'https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&key=API_KEY'