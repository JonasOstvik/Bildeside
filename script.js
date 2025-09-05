// Enkel JavaScript-funksjonalitet for bildesiden

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery img")

    for (let img in images) {
        img.addEventListener("click", function() {
            alert("klikket på " + img.alt)
        })
    }
});
