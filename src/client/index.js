// import CSS
import './styles/base.scss';
import './styles/grid.scss';
import "./styles/form.scss";

// import own modules
import {printName} from './js/printName';
import {formPreventDefault} from './js/formPreventDefault';
import {getUserInput} from './js/getUserInput';

// import assets
 import travelAlps from "./media/travel-alps.jpg";
 import iconLocation from "./media/icon-location.svg";


printName();

console.log('hello from index.js!');

const userInputForm = document.getElementById('userInputForm');
userInputForm.addEventListener('submit', () => {
    console.log('Submit was fired!');
    let userInput = getUserInput();
    console.log(userInput);
})

// global Client exports
export {
    formPreventDefault,
    getUserInput
}