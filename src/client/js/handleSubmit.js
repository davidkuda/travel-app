function handleSubmit(event) {
    // event.preventDefault();

    // get user input and save it into variable
    let inputDate = document.getElementById("form-date").value;
    let inputDestination = document.getElementById("form-destination").value;

    console.log(inputDate, inputDestination);

    return {destination: inputDestination, date: inputDate}
};

export {handleSubmit}