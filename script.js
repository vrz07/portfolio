const words = [
    "Full Stack Developer",
    "Frontend Developer",
    "UI Designer",
    "Programmer"
];

const themeBtn = document.getElementById("theme-btn");

function updateThemeButton() {
    const isDark = document.body.classList.contains("dark-mode");

    themeBtn.textContent = isDark ? "☀️" : "🌙";
    themeBtn.setAttribute(
        "aria-label",
        isDark ? "Enable light mode" : "Enable dark mode"
    );
}

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

updateThemeButton();

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateThemeButton();
});

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        document.getElementById("typing").textContent =
            currentWord.substring(0, charIndex++);
    } else {
        document.getElementById("typing").textContent =
            currentWord.substring(0, charIndex--);
    }

    if (charIndex > currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
    }

    if (charIndex < 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        charIndex = 0;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 120);
}

typeEffect();

const hiddenElements =
    document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.getElementById("main-menu");

menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
    );
});

const navLinks = document.querySelectorAll("nav ul a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open menu");
    });
});





























































































