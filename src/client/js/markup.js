export const markupLoader = `
<svg class="loader" viewBox="0 0 24 24">
    <circle class="loader__value" cx="12" cy="12" r="10" />
    <circle class="loader__value" cx="12" cy="12" r="10" />
    <circle class="loader__value" cx="12" cy="12" r="10" />
    <circle class="loader__value" cx="12" cy="12" r="10" />
    <circle class="loader__value" cx="12" cy="12" r="10" />
    <circle class="loader__value" cx="12" cy="12" r="10" />
</svg>`;

export const markupResponse = (apiData = {}, dates = {}) => {

    const dayjs = require('dayjs');


    return `
    <h1>${apiData.geonames.geonames[0].name}, ${apiData.geonames.geonames[0].countryName}</h1>
    <h3>from ${dates.startDate} to ${dates.endDate}</h3>
    <h3>You will start your trip ${dates.countdown}!</h3>

    <h3>Weather in the next three days:</h3>
<div class="weather-box">
    <div class="day">
        <span class="date">${dayjs(apiData.weatherbit.data[0].datetime).format('MMM. D')}</span>
        <span class="temperature">${apiData.weatherbit.data[0].min_temp} to ${apiData.weatherbit.data[0].max_temp}°C</span>
        <span class="description">${apiData.weatherbit.data[0].weather.description}</span>
    </div>
    <div class="day">
        <span class="date">${dayjs(apiData.weatherbit.data[1].datetime).format('MMM. D')}</span>
        <span class="temperature">${apiData.weatherbit.data[1].min_temp} to ${apiData.weatherbit.data[0].max_temp}°C</span>
        <span class="description">${apiData.weatherbit.data[1].weather.description}</span>
    </div>
    <div class="day">
        <span class="date">${dayjs(apiData.weatherbit.data[2].datetime).format('MMM. D')}</span>
        <span class="temperature">${apiData.weatherbit.data[2].min_temp} to ${apiData.weatherbit.data[0].max_temp}°C</span>
        <span class="description">${apiData.weatherbit.data[2].weather.description}</span>
    </div>
</div>
    `;
};