 // variables
 const userInputForm = document.getElementById('userInputForm');

 userInputForm.addEventListener('submit', async (event) => {

    event.preventDefault();

    // Client.formPreventDefault();

    let userInput = Client.getUserInput();

    Client.updateUi(Client.markup.loader);

    // get Geonames API Data

    let apiData = {
        geonames: await Client.apiCall(await Client.getGeonamesUrl(userInput.destination))
    };

    let {name, lat, lng} = apiData.geonames.geonames[0];

    // get Pixabay API Data

    let pixabayData = await Client.apiCall(await Client.getPixabayUrl(name));
    apiData['pixabay'] = pixabayData;

    // get Weatherbit API Data

    let weatherbit = await Client.apiCall(await Client.getWeatherbitUrl(lat, lng));
    apiData['weatherbit'] = weatherbit;

    let travelResponse = await Client.markup.response(apiData, userInput);
    // Client.changeBackground(apiData.pixabay.hits[0].webformatURL);
    Client.changeBackground(apiData.pixabay.hits[0].largeImageURL);
    Client.updateUi(travelResponse);

 })