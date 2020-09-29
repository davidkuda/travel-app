// import CSS
import './styles/base.scss';
import './styles/grid.scss';
import "./styles/form.scss";
import "./styles/loader.scss";

// import own modules
import {formPreventDefault} from './js/formPreventDefault';
import {getUserInput} from './js/getUserInput';
import {markupLoader} from './js/markupLoader';
import {updateUi} from './js/updateUi';
import {apiCall} from './js/apiCall';
import {getGeonamesUrl} from './js/apiGeonames';
import {getWeatherbitUrl} from './js/apiWeatherbit';
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
    console.log('User Input: ', userInput);
    let formContainer = document.getElementById('form-container');
    updateUi(formContainer, markupLoader);
    let geonames = await apiCall(await getGeonamesUrl(userInput.destination));
    console.log('Geonames: ', geonames.geonames[0]);
    let geoResponse = await sampleResponse(geonames, userInput.date);
    console.log('Stadt Info: ', geoResponse);

    let latBerlin = 52.52437;
    let lngBerlin = 13.41053;
    let startDate = '2019-10-20';
    let endDate = '2019-10-21';
    let weatherbitUrl = await getWeatherbitUrl(latBerlin, lngBerlin, startDate, endDate);
    weatherData = await apiCall(weatherbitUrl);
    console.log('weather Data: ', weatherData)

    updateUi(formContainer, geoResponse);
})

// global Client exports
export {
    formPreventDefault,
    getUserInput,
    markupLoader,
    updateUi
}