export const changeBackground = source => {
    console.log('hello from changeBackground.js!')
    console.log({source})
    document.body.style.background = `url(${source})`;
};