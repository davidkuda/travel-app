export function handleSubmit(event) {
    event.preventDefault();

    // get user input and save it into a variable
    let formInput = document.getElementById("name").value;

    console.log(formInput);

};