export const sampleResponse = (geonames, date) => {
    return `<p>You are travelling to ${geonames.geonames[0].name}, ${geonames.geonames[0].countryName}, on ${date} Congratulations.</p>`;
};