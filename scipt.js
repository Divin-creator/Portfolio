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
/* =========================================================
   TERMINAL
   ========================================================= */

.terminal-section {
    padding: 130px 7%;
    border-bottom: 1px solid #1a1a1a;
}

.terminal-heading {
    margin-bottom: 50px;
}

.terminal-heading h2 {
    margin-top: 20px;

    font-size: clamp(2.8rem, 6vw, 6rem);

    line-height: 0.95;

    letter-spacing: -3px;
}

.terminal-heading h2 span {
    color: #ff1e1e;
}


/* TERMINAL WINDOW */

.terminal-window {
    width: 100%;
    max-width: 1000px;

    margin: 0 auto;

    background: #080808;

    border: 1px solid #242424;

    box-shadow:
        0 30px 100px rgba(0, 0, 0, 0.5),
        0 0 40px rgba(255, 0, 0, 0.04);

    font-family: 'Space Mono', monospace;

    transition: 0.4s ease;
}

.terminal-window:hover {
    border-color: rgba(255, 30, 30, 0.4);
}


/* TERMINAL TOP BAR */

.terminal-bar {
    height: 45px;

    padding: 0 18px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    border-bottom: 1px solid #202020;

    background: #0c0c0c;
}

.terminal-bar p {
    font-size: 0.65rem;

    color: #666;

    letter-spacing: 1px;
}

.terminal-dots {
    display: flex;

    gap: 6px;
}

.terminal-dots span {
    width: 8px;
    height: 8px;

    border-radius: 50%;

    background: #333;
}

.terminal-dots span:first-child {
    background: #ff1e1e;

    box-shadow: 0 0 10px rgba(255, 30, 30, 0.4);
}

.terminal-status {
    color: #555;

    font-size: 0.55rem;
}


/* TERMINAL OUTPUT */

.terminal-output {
    min-height: 260px;

    padding: 25px;

    overflow-y: auto;

    color: #777;

    font-size: 0.75rem;
}

.terminal-output p {
    margin-bottom: 12px;
}

.terminal-green {
    color: #ff1e1e;
}

.terminal-command {
    color: #ddd;
}


/* TERMINAL INPUT */

.terminal-input-area {
    display: flex;

    align-items: center;

    gap: 10px;

    padding: 18px 25px;

    border-top: 1px solid #1b1b1b;
}

.terminal-prompt {
    color: #ff1e1e;

    font-size: 0.7rem;

    white-space: nowrap;
}

#terminalInput {
    flex: 1;

    border: none;

    outline: none;

    background: transparent;

    color: #eee;

    font-family: 'Space Mono', monospace;

    font-size: 0.75rem;
}

#terminalInput::selection {
    background: #ff1e1e;

    color: #050505;
}


/* TERMINAL MOBILE */

@media (max-width: 600px) {

    .terminal-section {
        padding: 100px 5%;
    }

    .terminal-heading h2 {
        font-size: clamp(2.5rem, 13vw, 4rem);
    }

    .terminal-output {
        min-height: 220px;

        padding: 20px;

        font-size: 0.65rem;
    }

    .terminal-input-area {
        padding: 16px;

        align-items: flex-start;

        flex-direction: column;

        gap: 8px;
    }

    #terminalInput {
        width: 100%;
    }

}
