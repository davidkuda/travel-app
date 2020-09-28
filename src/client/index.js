// import CSS
import './styles/base.scss';

// import own modules
import {printName} from './js/printName';
import {handleSubmit} from './js/handleSubmit';

// import assets
 import homeIcon from "./images/menu-icon.png";
 import travelAlps from "./images/travel-alps.jpg";


printName();

console.log('this message will be in output: FENDER STRATOCASTER!');


// global Client exports
export {
    handleSubmit
}