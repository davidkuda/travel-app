export const parseDates = (startDate, endDate) => {

    const dayjs = require('dayjs');
    const relativeTime = require('dayjs/plugin/relativeTime');
    dayjs.extend(relativeTime);
    const customParseFormat = require('dayjs/plugin/customParseFormat')
    dayjs.extend(customParseFormat)

    const dayFormats = ['YYYY-MM-DD', 'DD.MM.YYYY', 'MM.DD.YYYY', 'DD/MM/YYYY', 'MM/DD/YYYY'];

     let parsedDates = {
        
        dayjs: {
            startDate: dayjs(startDate, dayFormats).format('DD.MM.YYYY'),
            endDate: dayjs(endDate, dayFormats).format('DD.MM.YYYY')
        },
        startDate: dayjs(startDate, dayFormats).format('DD. MMMM YYYY'),
        endDate: dayjs(endDate, dayFormats).format('DD. MMMM YYYY'),
        countdown: dayjs(startDate, dayFormats).fromNow()
    }

    return parsedDates
};