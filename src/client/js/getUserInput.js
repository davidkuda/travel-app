export function getUserInput() {

    // get user input and save it into variable
    let inputDate = document.getElementById("form-date").value;
    let inputDestination = document.getElementById("form-destination").value;

    let userInput = {
        destination: inputDestination,
        date: inputDate
    }

    return userInput
    // TODO: In future the app should post data to the backend
};