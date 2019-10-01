const qs = document.querySelector.bind(document);
const qsAll = document.querySelectorAll.bind(document);
const fadingtime = 200;

(function randomLandingImage() {
    window.addEventListener('load', () => {
        qs('.landing-screen').classList.add('fading-in');
        const photoPaths = ["landing-1.9f4c7fad.jpg", "landing-2.306b48f1.jpg", "landing-3.31a9aa55.jpg", "landing-4.cbe8f9d2.jpg", "landing-5.968336aa.jpg"];
        let randomNr = Math.floor(Math.random() * Math.floor(5));
        qs('.landing-img').src = photoPaths[randomNr];
    })
})();

(function enterMainScreen() {
    qs('.enter-button').addEventListener('click', () => {
        qs('.landing-screen').classList.add('fading-out');
        setTimeout(() => {
            qs('.landing-screen').style.display = 'none';
        }, fadingtime);

        setTimeout(() => {
            qs('.main-screen').style.display = 'block';
        }, fadingtime);

        setTimeout(() => {
            qs('.main-screen').classList.add('fading-in');
        }, fadingtime + 10);
    })
})()