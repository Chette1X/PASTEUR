document.addEventListener("DOMContentLoaded", () => {
    const audioItems = document.querySelectorAll(".audio-item");
    audioItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });

    const videoContainer = document.querySelector(".video-container");
    videoContainer.addEventListener("mouseenter", () => {
        videoContainer.style.transform = "scale(1.02)";
    });

    videoContainer.addEventListener("mouseleave", () => {
        videoContainer.style.transform = "scale(1)";
    });
});
