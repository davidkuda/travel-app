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
import {submitEventListener} from './js/submitEventListener';
import {changeBackground} from './js/changeBackground';

// import assets
 import travelAlps from "./media/travel-alps.jpg";
 import iconLocation from "./media/icon-location.svg";

// global Client exports
export {
    formPreventDefault,
    getUserInput,
    markupLoader,
    updateUi,
    apiCall,
    getGeonamesUrl,
    getWeatherbitUrl,
    getPixabayUrl,
    sampleResponse,
    submitEventListener,
    changeBackground
}