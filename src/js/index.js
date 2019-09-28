const qs = document.querySelector.bind(document);
const qsAll = document.querySelectorAll.bind(document);

(function randomLandingImage() {
    window.addEventListener('load', () => {
        const photoPaths = ["1.2e53255b.jpg", "2.8eb0a0ee.jpg", "3.70a9ef25.jpg"];
        let randomNr = Math.floor(Math.random() * Math.floor(3));
        qs('.landing-img').src = photoPaths[randomNr];
    })
})();

(function enterMainScreen() {
    qs('.enter-button').addEventListener('click', () => {
        qs('.landing-screen').style.display = 'none';
        qs('.main-screen').style.display = 'block';

        setTimeout(() => {
            qs('.main-screen').style.opacity = '1';
        }, 10);

    })
})()