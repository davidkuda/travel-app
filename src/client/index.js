// import CSS
import './styles/base.scss';
import './styles/grid.scss';
import "./styles/form.scss";

// import own modules
import {printName} from './js/printName';
import {handleSubmit} from './js/handleSubmit';

// import assets
 import travelAlps from "./media/travel-alps.jpg";
 import iconLocation from "./media/icon-location.svg";


printName();

console.log('this message will be in output: FENDER STRATOCASTER!');


// global Client exports
export {
    handleSubmit
}