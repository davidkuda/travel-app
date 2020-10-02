export const apiCall = async (apiUrl) => {
    let response = await fetch(apiUrl);
    let data = await response.json();
    return data;
};