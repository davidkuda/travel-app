 // variables
 const userInputForm = document.getElementById('userInputForm');

 userInputForm.addEventListener('submit', async () => {

    let userInput = Client.getUserInput();
    console.table({userInput: userInput});
    let dates = {
        startDate: userInput.startDate,
        endDate: userInput.endDate
    } // TODO: change date format

    Client.updateUi(Client.markupLoader); //TODO: make markup class and get child loader

    // get Geonames API Data

    let apiData = {
        geonames: await Client.apiCall(await Client.getGeonamesUrl(userInput.destination))
    };

    // get Pixabay API Data

    let geonamesCity = apiData.geonames.geonames[0].name;
    let pixabayData = await Client.apiCall(await Client.getPixabayUrl(geonamesCity));
    apiData['pixabay'] = pixabayData;

    // get Weatherbit API Data

    /*

    let latitude = apiData.geonames.geonames[0].lat;
    let longitude = apiData.geonames.geonames[0].lng;
    let startDate = userInput.startDate;
    let endDate = userInput.endDate;
    let weatherbit = await Client.apiCall(await Client.getWeatherbitUrl(latitude, longitude, startDate, endDate));
    apiData['weatherbit'] = weatherbit;

    */

    console.log(apiData)

    let travelResponse = await Client.sampleResponse(apiData, dates);
    Client.changeBackground(apiData.pixabay.hits[0].webformatURL);
    // Client.changeBackground(apiData.pixabay.hits[0].largeImageURL);
    Client.updateUi(travelResponse);

 })