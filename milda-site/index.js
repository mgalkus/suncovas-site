(function useImages() {
    container = document.querySelector(".container")
    const images = require(`./assets/img-*.jpg`);

    for (let i = 1; i < 63; i++) {
        img = document.createElement("img");
        // imgContainer.className = `img-container img-container--${i}`;
        // domString = `<img class="lazy img img--${i}" src="${images[i]}" data-src="${images[i]}" loading="lazy">`;
        // imgContainer.innerHTML = domString;
        img.className = `img img--${i}`;
        img.src = images[i];
        img.loading = "lazy";
        container.appendChild(img);
    }
})();