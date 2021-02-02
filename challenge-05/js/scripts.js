const button = document.querySelector('#checkbox');
const bigCards = document.querySelectorAll('.cards');
const smallCards = document.querySelectorAll('.cards-overview');
const backgroundHtml = document.querySelector('html');
const backgroundHeader = document.querySelector('header');
const titleDivOverview = document.querySelector('#titleOverview')

function switchTheme () {

    bigCards.forEach( bigCard => {
        bigCard.classList.toggle("dark-theme-card");
        
    })

    smallCards.forEach( smallCard => {
        smallCard.classList.toggle("dark-theme-card");
    })
    backgroundHtml.classList.toggle("dark-theme-bg");
    backgroundHeader.classList.toggle("dark-theme-header");
    titleDivOverview.classList.toggle("dark-theme-title")

   
}
button.addEventListener('click', switchTheme);

