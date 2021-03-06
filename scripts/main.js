const hamburger = document.querySelector('header .wr-hamburger');

hamburger.addEventListener('click', () => {
    const nav = document.querySelector('header nav');
    nav.classList.toggle('active');
});

document.addEventListener('click', e => {
    // checking wheather menu is active and if so closing on clicking outside of it
    if (document.documentElement.clientWidth <= 769 && document.querySelector('header nav').classList.contains('active')) {

        // get the bubbled elements to check wheather menu element among them
        const elements = e.composedPath();
        let isMenuActive = false;

        // here the 'elements.length - 2' is for ignoring last two element (document and window) 
        for (let index = 0; index < elements.length - 2; index++) {
            if (elements[index].id === 'nav' || elements[index].classList.contains('wr-hamburger')) {
                isMenuActive = true;
                break;
            }
        }
        if (!isMenuActive) {
            document.querySelector('header nav').classList.remove('active');
        }
    }
});