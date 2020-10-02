export const updateUi = (newElement) => {
    const mainContainer = document.getElementById('main-container')
    mainContainer.innerHTML = newElement;
    console.log('UI updated ...')
};