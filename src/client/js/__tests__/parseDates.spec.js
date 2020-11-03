const { parseDates } = require('../parseDates');

test('Should return object with dates', () => {
    const input = parseDates('2020-11-11', '2020-11-12');
    const output = {dayjs: {startDate: "11.11.2020", endDate: "12.11.2020"}, startDate: "11. November 2020", endDate: "12. November 2020", countdown: "in 7 days"}
    expect(input).toEqual(output);
});