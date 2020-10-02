export function getUserInput() {

    // get user input and save it into variable
    let inputDestination = document.getElementById("form-destination").value;
    let inputStartDate = document.getElementById("form-start-date").value;
    let inputEndDate = document.getElementById("form-end-date").value;

    let userInput = {
        destination: inputDestination,
        startDate: inputStartDate,
        endDate: inputEndDate
    }

    return userInput
    // TODO: In future the app should post data to the backend
};