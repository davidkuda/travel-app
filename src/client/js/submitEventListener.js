 // variables
 const userInputForm = document.getElementById('userInputForm');

 userInputForm.addEventListener('submit', async (event) => {

    event.preventDefault();

    // Client.formPreventDefault();

    let userInput = Client.getUserInput();

    Client.updateUi(Client.markup.loader);

    // post data to backend

    await Client.postData('/post', userInput)

    // get Geonames API Data

    let apiData = {
        geonames: await Client.apiCall(await Client.getGeonamesUrl(userInput.destination))
    };

    // get Pixabay API Data

    let geonamesCity = apiData.geonames.geonames[0].name;
    let pixabayData = await Client.apiCall(await Client.getPixabayUrl(geonamesCity));
    apiData['pixabay'] = pixabayData;

    // get Weatherbit API Data

    let latitude = apiData.geonames.geonames[0].lat;
    let longitude = apiData.geonames.geonames[0].lng;
    let weatherbit = await Client.apiCall(await Client.getWeatherbitUrl(latitude, longitude));
    apiData['weatherbit'] = weatherbit;

    console.log(apiData)

    let travelResponse = await Client.markup.response(apiData, dates);
    // Client.changeBackground(apiData.pixabay.hits[0].webformatURL);
    Client.changeBackground(apiData.pixabay.hits[0].largeImageURL);
    Client.updateUi(travelResponse);

 })