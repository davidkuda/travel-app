export const parseDates = (startDate, endDate) => {

    const dayjs = require('dayjs');
    const relativeTime = require('dayjs/plugin/relativeTime');
    dayjs.extend(relativeTime);

    let parsedDates = {
        dayjs: {
            startDate: dayjs(startDate, ['YYYY-MM-DD', 'DD.MM.YYYY']),
            endDate: dayjs(endDate, ['YYYY-MM-DD', 'DD.MM.YYYY'])
        },
        startDate: dayjs(startDate, ['YYYY-MM-DD', 'DD.MM.YYYY']).format('DD. MMMM YYYY'),
        endDate: dayjs(endDate, ['YYYY-MM-DD', 'DD.MM.YYYY']).format('DD. MMMM YYYY'),
        countdown: dayjs(startDate, ['YYYY-MM-DD', 'DD.MM.YYYY']).fromNow()
    }

    return parsedDates
};