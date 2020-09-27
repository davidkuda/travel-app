// import CSS
import './styles/base.scss';

// import own modules
import {printName} from './js/printName';
import {handleSubmit} from './js/handleSubmit';

// import assets
 import img from './img/travel-alps.jpg';

 // functions playground
function component() {
    const element = document.createElement('div');
    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = img;
    element.appendChild(myIcon);
    return element;
}

document.body.appendChild(component());

printName();

console.log('this message will be in output: FENDER STRATOCASTER!');

// global Client exports
export {
    handleSubmit
}