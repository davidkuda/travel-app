export function getUserInput(event) {
    event.preventDefault();

    // get user input and save it into variable
    let inputDate = document.getElementById("form-date").value;
    let inputDestination = document.getElementById("form-destination").value;

    let userInput = {
        destination: inputDestination,
        date: inputDate
    }

    return userInput
};