export const validateDate = (userInput) => {
    let dates = {
        startDate: userInput.startDate,
        endDate: userInput.endDate
    }
    console.log('hello from validateDate!');
    console.table({
        dates: dates
    })

    
}