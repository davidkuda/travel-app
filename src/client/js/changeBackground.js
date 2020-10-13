export const changeBackground = source => {
    console.log({source})
    document.body.style.background = `url(${source}) center`;
    // document.body.style.background = `url(${source}) bottom`;
    document.body.style.backgroundSize = `cover`;
};