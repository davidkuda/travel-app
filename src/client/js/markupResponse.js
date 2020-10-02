export const sampleResponse = (apiData = {}, dates = {}) => {
    return `
    <h1>${apiData.geonames.geonames[0].name}, ${apiData.geonames.geonames[0].countryName}</h1>
    <p/>${dates.startDate}</p>
    `;
};