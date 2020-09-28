export const getGeonamesUrl = async (city) => {
    return `http://api.geonames.org/searchJSON?name=${city}&maxRows=10&username=davidkuda`;
};