// Enkel JavaScript-funksjonalitet for bildesiden

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery img")

    for (let img of images) {
        img.addEventListener("click", function() {
            console.log("klikket på " + img.alt)
        })
    }
});
