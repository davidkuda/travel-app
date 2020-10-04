export const parseDates = (userInput) => {

    const dayjs = require('dayjs');
    const relativeTime = require('dayjs/plugin/relativeTime');
    dayjs.extend(relativeTime);


    let parsedDates = {
        dayjs: {
            startDate: dayjs(userInput.startDate, ['YYYY-MM-DD', 'DD.MM.YYYY']),
            endDate: dayjs(userInput.endDate, ['YYYY-MM-DD', 'DD.MM.YYYY'])
        },
        startDate: dayjs(userInput.startDate, ['YYYY-MM-DD', 'DD.MM.YYYY']).format('DD. MMMM YYYY'),
        endDate: dayjs(userInput.endDate, ['YYYY-MM-DD', 'DD.MM.YYYY']).format('DD. MMMM YYYY'),
        countdown: dayjs(userInput.startDate, ['YYYY-MM-DD', 'DD.MM.YYYY']).fromNow()
    }
    
    console.log('%c PARSED DATES:', 'color: green');
    console.log(parsedDates)

    return parsedDates
};