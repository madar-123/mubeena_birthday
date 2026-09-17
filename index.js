
// Smooth scroll
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}
function openSurprise() {
    document.getElementById("imagePopup").style.display = "flex";
}

function closeSurprise() {
    document.getElementById("imagePopup").style.display = "none";
}

// Final birthday celebration
function celebrate() {

    const celebration = document.getElementById("celebration");

    const symbols = [
        "❤️",
        "💗",
        "💖",
        "✨",
        "🎉",
        "🩷",
        "🩺"
    ];

    for (let i = 0; i < 60; i++) {

        const item = document.createElement("div");

        item.classList.add("confetti");

        item.innerHTML =
            symbols[Math.floor(Math.random() * symbols.length)];

        item.style.left =
            Math.random() * 100 + "vw";

        item.style.animationDuration =
            2 + Math.random() * 3 + "s";

        item.style.animationDelay =
            Math.random() * 1.5 + "s";

        celebration.appendChild(item);

        setTimeout(() => {
            item.remove();
        }, 6000);
    }
}


// Reveal animation on scroll
const cards = document.querySelectorAll(
    ".memory-card, .wish-card, .prescription"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.8s ease";

    observer.observe(card);

});
