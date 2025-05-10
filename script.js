// Fonction de navigation avec son
function navigate(page) {
    const audio = new Audio('click.mp3');
    audio.play();
    setTimeout(() => {
        window.location.href = page;
    }, 300);
}

// Animation de défilement sur les icônes de réseaux sociaux
document.querySelectorAll(".social-icons a").forEach(icon => {
    icon.addEventListener("mouseover", () => {
        icon.classList.add("animate__animated", "animate__pulse");
    });
    icon.addEventListener("animationend", () => {
        icon.classList.remove("animate__animated", "animate__pulse");
    });
});
