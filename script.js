const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.onclick = () => {
    navLinks.style.display =
        navLinks.style.display === "flex" ? "none" : "flex";
};

const typingText = document.getElementById("typing");
const roles = ["Web Developer", "Designer", "Programmer"];
let index = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    let current = roles[index];

    if (!deleting) {
        typingText.textContent = current.substring(0, charIndex++);
        if (charIndex > current.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typingText.textContent = current.substring(0, charIndex--);
        if (charIndex === 0) {
            deleting = false;
            index = (index + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, deleting ? 80 : 120);
}
typeEffect();
