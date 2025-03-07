

document.addEventListener("DOMContentLoaded", () => {
    let indicator = document.querySelector(".scroll-indicator .progress");

    // Vérifie que l'élément existe bien
    if (!indicator) {
        console.error("L'élément .scroll-indicator .progress n'existe pas !");
        return;
    }

    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    window.addEventListener("scroll", () => {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let scrolled = (scrollTop / scrollHeight) * 100;
        indicator.style.width = `${scrolled}%`;
        console.log(`Défilement : ${scrollTop}px, Progression : ${scrolled}%`);
    });
});