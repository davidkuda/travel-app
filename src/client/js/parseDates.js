export const parseDates = (startDate, endDate) => {

    const dayjs = require('dayjs');
    const relativeTime = require('dayjs/plugin/relativeTime');
    dayjs.extend(relativeTime);

    const dayFormats = ['YYYY-MM-DD', 'DD.MM.YYYY', 'MM.DD.YYYY', 'DD/MM/YYYY', 'MM/DD/YYYY'];

     let parsedDates = {
        
        dayjs: {
            startDate: dayjs(userInput.startDate, dayFormats).format('DD.MM.YYYY'),
            endDate: dayjs(userInput.endDate, dayFormats).format('DD.MM.YYYY')
        },
        startDate: dayjs(userInput.startDate, dayFormats).format('DD. MMMM YYYY'),
        endDate: dayjs(userInput.endDate, dayFormats).format('DD. MMMM YYYY'),
        countdown: dayjs(userInput.startDate, dayFormats).fromNow()
    }

    return parsedDates
};