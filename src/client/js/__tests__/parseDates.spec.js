const { parseDates } = require('../parseDates');

test('Should return object with dates', () => {
    const input = parseDates('10.11.2020', '20.11.2020');
    const output = {dayjs: {endDate: "20.11.2020", startDate: "10.11.2020"}, startDate: "10. November 2020", endDate: "20. November 2020", countdown: "in 6 days", duration: 10}
    expect(input).toEqual(output);
});