/* =========================================================
   PETE JUNIOR — INTERACTIVE PORTFOLIO
   ========================================================= */


/* =========================
   TERMINAL
   ========================= */

const terminalCommands = {
    whoami: "Pete Junior — Tech enthusiast, creator, future engineer.",
    mission: "Build technology that solves real problems.",
    motto: "Explore. Dream. Discover.",
    interests: "Tech · Coding · Gaming · Music · Gadgets · Poetry",
    status: "Curious. Learning. Building.",
    help: "Try: whoami, mission, motto, interests, status"
};


/* =========================
   EASTER EGG
   ========================= */

let secretSequence = [];

const secretCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight"
];

document.addEventListener("keydown", (event) => {

    secretSequence.push(event.key);

    if (secretSequence.length > secretCode.length) {
        secretSequence.shift();
    }

    if (
        JSON.stringify(secretSequence) ===
        JSON.stringify(secretCode)
    ) {
        activateSecretMode();
    }

});


function activateSecretMode() {

    document.body.classList.toggle("secret-mode");

    console.log(
        "%c PETE JUNIOR // DEVELOPER MODE ACTIVATED ",
        "color: red; font-size: 18px; font-weight: bold;"
    );

}


/* =========================
   SMOOTH REVEAL ANIMATIONS
   ========================= */

const revealElements = document.querySelectorAll(
    ".section, .skill-card, .project-card, .future-projects > div"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =========================
   CONSOLE MESSAGE
   ========================= */

console.log(
    "%cPETE JUNIOR // SYSTEM ONLINE",
    "color: #ff1e1e; font-size: 20px; font-weight: bold;"
);

console.log(
    "%cExplore. Dream. Discover.",
    "color: #888; font-size: 14px;"
);
