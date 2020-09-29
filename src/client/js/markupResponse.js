export const sampleResponse = (apiData = {}, dates = {}) => {
    return `
    <p>You are travelling to ${apiData.geonames.geonames[0].name}, ${apiData.geonames.geonames[0].countryName}, on ${dates.startDate}</p>
    <img src="${apiData.pixabay.hits[0].webformatURL}" alt="picture of ${apiData.geonames.geonames[0].name}" class="city-pic" />`;
};