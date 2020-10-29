export function getUserInput() {

    // get user input and save it into variable
    let inputDestination = document.getElementById("form-destination").value;
    let inputStartDate = document.getElementById("form-start-date").value;
    let inputEndDate = document.getElementById("form-end-date").value;

    let parsedDates = Client.parseDates(inputStartDate, inputEndDate);

    let userInput = {
        destination: inputDestination,
        startDate: parsedDates.startDate,
        endDate: parsedDates.endDate,
        countdown: parsedDates.countdown
    }

    return userInput
};