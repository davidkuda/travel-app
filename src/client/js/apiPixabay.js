export const getPixabayUrl = (geonamesCity) => {
    const baseUrl = 'https://pixabay.com/api/';
    const key = '?key=18504235-b5f67f1c60c6a4f6cf2f7d060';
    const city = '&q=' + geonamesCity;
    const imgtype = '&image_type=photo';
    const orientation = '&orientation=horizontal';
    const pixabayUrl = `${baseUrl}${key}${city}${imgtype}${orientation}`;

    return pixabayUrl;
};