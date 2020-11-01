export function getUserInput() {

    // get user input and save it into variable
    let inputDestination = document.getElementById("form-destination").value;
    let inputStartDate = document.getElementById("form-start-date").value;
    let inputEndDate = document.getElementById("form-end-date").value;

    let parsedDates = Client.parseDates(inputStartDate, inputEndDate);

    let userInput = {
        destination: inputDestination,
        startDateText: parsedDates.startDate,
        endDateText: parsedDates.endDate,
        countdown: parsedDates.countdown,
        dayjs: parsedDates.dayjs
    }

    return userInput
};