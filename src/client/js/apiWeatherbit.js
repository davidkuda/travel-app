export const getWeatherbitUrl = (lat, lon, startDate, endDate) => {
    const baseUrl = 'https://api.weatherbit.io/v2.0/history/daily?';
    const key = 'key=6a72ada44de7455c8c5617d8830c8aa8';
    let dates = `&start_date=${startDate}&end_date=${endDate}`;
    let latlng = `&lat=${lat}&lon=${lon}`;

    let weatherbitUrl = `${baseUrl}${key}${dates}${latlng}`;
    return weatherbitUrl
};


/*
const baseUrl = 'https://api.weatherbit.io/v2.0/history/daily?';
const key = 'key=6a72ada44de7455c8c5617d8830c8aa8';
const startDate = '&start_date=2020-09-25';
const endDate = '&end_date=2020-09-26';
const latLon = '&lat=38.123&lon=-78.543';

*/