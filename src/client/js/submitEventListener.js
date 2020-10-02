 // variables

 const userInputForm = document.getElementById('userInputForm');

 // event listeners

 userInputForm.addEventListener('submit', async () => {

     console.log('%c hello from module !', 'color: green');
     console.table({location: 'module'});
     const message = 'Origin is submitEventListener.js';
     console.log({message});

    let userInput = getUserInput();
    let formContainer = document.getElementById('form-container'); //TODO: Change name to 'update main content'
    updateUi(formContainer, markupLoader); //TODO: make markup class and get child loader

    let dates = {
        startDate: userInput.date,
        endDate: null //TODO: get endDate from user
    };

    let apiData = {
        geonames: await apiCall(await getGeonamesUrl(userInput.destination))
    };

    let pixabayData = await apiCall(await getPixabayUrl());
    apiData['pixabay'] = pixabayData;

    let latitude = apiData.geonames.geonames[0].lat;
    let longitude = apiData.geonames.geonames[0].lng;
    let startDate = '2019-10-20';
    let endDate = '2019-10-21';
    let weatherbit = await apiCall(await getWeatherbitUrl(latitude, longitude, startDate, endDate));
    apiData['weatherbit'] = weatherbit;


    console.log('geonames Data: ', apiData.geonames.geonames[0]);
    console.log('weatherbit Data: ', apiData.weatherbit);
    console.log('pixabay Data: ', apiData.pixabay.hits[0].webformatURL);
    console.log('apiData: ', apiData);

    let travelResponse = await sampleResponse(apiData, dates);
    updateUi(formContainer, travelResponse);

 })