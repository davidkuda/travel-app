// import CSS
import './styles/base.scss';
import './styles/grid.scss';
import "./styles/form.scss";
import "./styles/loader.scss";

// import own modules
import {printName} from './js/printName';
import {formPreventDefault} from './js/formPreventDefault';
import {getUserInput} from './js/getUserInput';
import {markupLoader} from './js/markupLoader';
import {updateUi} from './js/updateUi';

// import assets
 import travelAlps from "./media/travel-alps.jpg";
 import iconLocation from "./media/icon-location.svg";


printName();

const userInputForm = document.getElementById('userInputForm');

userInputForm.addEventListener('submit', () => {
    console.log('Submit was fired!');
    let userInput = getUserInput();
    console.log(userInput);
    let formContainer = document.getElementById('form-container');
    updateUi(formContainer, markupLoader);
})

// global Client exports
export {
    formPreventDefault,
    getUserInput,
    markupLoader,
    updateUi
}