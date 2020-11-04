export const apiCall = async (apiUrl) => {
    let response = await fetch(apiUrl);
    let data = await response.json();
    return data;
};

export const getGeonamesUrl = async (city) => {
    return `http://api.geonames.org/searchJSON?name=${city}&maxRows=10&username=davidkuda`;
};

export const getPixabayUrl = (geonamesCity) => {
    const baseUrl = 'https://pixabay.com/api/';
    const key = '?key=18504235-b5f67f1c60c6a4f6cf2f7d060';
    const city = '&q=' + geonamesCity;
    const imgtype = '&image_type=photo';
    const orientation = '&orientation=horizontal';
    const pixabayUrl = `${baseUrl}${key}${city}${imgtype}${orientation}`;

    return pixabayUrl;
};

export const getWeatherbitUrl = (lat, lon) => {
    const baseUrl = 'https://api.weatherbit.io/v2.0/forecast/daily?';
    const key = 'key=6a72ada44de7455c8c5617d8830c8aa8';
    let days = '&days=5';
    let latlng = `&lat=${lat}&lon=${lon}`;
    let weatherbitUrl = `${baseUrl}${key}${days}${latlng}`;
    return weatherbitUrl
};