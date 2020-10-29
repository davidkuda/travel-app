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
import {markup} from './js/markup';
import {updateUi} from './js/updateUi';
import {apiCall} from './js/apiCall';
import {getGeonamesUrl} from './js/apiGeonames';
import {getWeatherbitUrl} from './js/apiWeatherbit';
import { getPixabayUrl } from './js/apiPixabay';
import {submitEventListener} from './js/submitEventListener';
import {changeBackground} from './js/changeBackground';
import {parseDates} from './js/parseDates';
import {postData} from './js/postData';

// import assets
 import travelAlps from "./media/travel-alps.jpg";
 import iconLocation from "./media/icon-location.svg";

// global Client exports
export {
    formPreventDefault,
    getUserInput,
    markup,
    updateUi,
    apiCall,
    getGeonamesUrl,
    getWeatherbitUrl,
    getPixabayUrl,
    submitEventListener,
    changeBackground,
    parseDates,
    postData
}