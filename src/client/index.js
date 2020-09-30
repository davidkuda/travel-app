// import CSS
import './styles/base.scss';
import './styles/grid.scss';
import "./styles/form.scss";
import "./styles/loader.scss";
import "./styles/travel-information.scss";
import "./styles/footer.scss";

// import own modules
import {formPreventDefault} from './js/formPreventDefault';
import {getUserInput} from './js/getUserInput';
import {markupLoader} from './js/markupLoader';
import {updateUi} from './js/updateUi';
import {apiCall} from './js/apiCall';
import {getGeonamesUrl} from './js/apiGeonames';
import {getWeatherbitUrl} from './js/apiWeatherbit';
import { getPixabayUrl } from './js/apiPixabay';
import {sampleResponse} from './js/markupResponse';

// import assets
 import travelAlps from "./media/travel-alps.jpg";
 import iconLocation from "./media/icon-location.svg";

 // app code

 // variables

const userInputForm = document.getElementById('userInputForm');

// event listeners

userInputForm.addEventListener('submit', async () => {

    console.log('Submit was fired!');
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

// global Client exports
export {
    formPreventDefault,
    getUserInput,
    markupLoader,
    updateUi
}