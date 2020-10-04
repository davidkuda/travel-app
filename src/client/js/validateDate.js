export const validateDate = (userInput) => {

    var dayjs = require('dayjs');
    dayjs().format();

    let parsedDates = {
        dayjs: {
            startDate: dayjs(userInput.startDate, ['YYYY-MM-DD', 'DD.MM.YYYY']),
            endDate: dayjs(userInput.endDate, ['YYYY-MM-DD', 'DD.MM.YYYY'])
        },
        startDate: dayjs(userInput.startDate, ['YYYY-MM-DD', 'DD.MM.YYYY']).format('DD. MMMM YYYY'),
        endDate: dayjs(userInput.endDate, ['YYYY-MM-DD', 'DD.MM.YYYY']).format('DD. MMMM YYYY')
    }
    console.log('%c PARSED DATES:', 'color: green');
    console.log(parsedDates)

    return parsedDates
};