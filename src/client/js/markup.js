export const markupLoader = `
<svg class="loader" viewBox="0 0 24 24">
    <circle class="loader__value" cx="12" cy="12" r="10" />
    <circle class="loader__value" cx="12" cy="12" r="10" />
    <circle class="loader__value" cx="12" cy="12" r="10" />
    <circle class="loader__value" cx="12" cy="12" r="10" />
    <circle class="loader__value" cx="12" cy="12" r="10" />
    <circle class="loader__value" cx="12" cy="12" r="10" />
</svg>`;

export const markupResponse = (apiData = {}, dates = {}) => {
    return `
    <h1>${apiData.geonames.geonames[0].name}, ${apiData.geonames.geonames[0].countryName}</h1>
    <p/>from ${dates.startDate} to ${dates.endDate}</p>
    `;
};