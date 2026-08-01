/* ==========================================
   PETE JUNIOR PORTFOLIO
   script.js
========================================== */

// -------------------------
// TERMINAL COMMANDS
// -------------------------

const terminalCommands = {
  help: "Available commands: help, whoami, mission, motto, interests, status, clear",
  whoami: "Pete Junior — Tech enthusiast, creator, future software engineer.",
  mission: "Build technology that solves real problems and changes lives.",
  motto: "Explore. Dream. Discover.",
  interests: "Tech • Coding • Gaming • Music • Gadgets • Poetry",
  status: "Currently learning HTML & CSS and building amazing projects."
};

// -------------------------
// WAIT UNTIL PAGE LOADS
// -------------------------

document.addEventListener("DOMContentLoaded", () => {

  const terminalForm = document.getElementById("terminalForm");
  const terminalInput = document.getElementById("terminalInput");
  const terminalOutput = document.getElementById("terminalOutput");

  // Stop if terminal doesn't exist
  if (!terminalForm || !terminalInput || !terminalOutput) {
    console.error("Terminal elements not found.");
    return;
  }

  function printLine(text) {
    const p = document.createElement("p");
    p.textContent = text;
    terminalOutput.appendChild(p);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  terminalForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const command = terminalInput.value.trim().toLowerCase();

    if (command === "") return;

    printLine("pete@portfolio:~$ " + command);

    if (command === "clear") {
      terminalOutput.innerHTML = "";
    } else if (terminalCommands[command]) {
      printLine(terminalCommands[command]);
    } else {
      printLine("Command not found.");
      printLine("Type 'help' for available commands.");
    }

    terminalInput.value = "";
  });

  // -------------------------
  // SECRET MODE
  // -------------------------

  const secret = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight"
  ];

  let entered = [];

  document.addEventListener("keydown", function (e) {
    entered.push(e.key);

    if (entered.length > secret.length) {
      entered.shift();
    }

    if (JSON.stringify(entered) === JSON.stringify(secret)) {
      alert("🛠 Developer Mode Activated!");
      document.body.classList.toggle("secret-mode");
    }
  });

  console.log("Pete Junior Portfolio Loaded Successfully.");

});/* ==========================================
   PETE JUNIOR PORTFOLIO
   script.js
========================================== */

// -------------------------
// TERMINAL COMMANDS
// -------------------------

const terminalCommands = {
  help: "Available commands: help, whoami, mission, motto, interests, status, clear",
  whoami: "Pete Junior — Tech enthusiast, creator, future software engineer.",
  mission: "Build technology that solves real problems and changes lives.",
  motto: "Explore. Dream. Discover.",
  interests: "Tech • Coding • Gaming • Music • Gadgets • Poetry",
  status: "Currently learning HTML & CSS and building amazing projects."
};

// -------------------------
// WAIT UNTIL PAGE LOADS
// -------------------------

document.addEventListener("DOMContentLoaded", () => {

  const terminalForm = document.getElementById("terminalForm");
  const terminalInput = document.getElementById("terminalInput");
  const terminalOutput = document.getElementById("terminalOutput");

  // Stop if terminal doesn't exist
  if (!terminalForm || !terminalInput || !terminalOutput) {
    console.error("Terminal elements not found.");
    return;
  }

  function printLine(text) {
    const p = document.createElement("p");
    p.textContent = text;
    terminalOutput.appendChild(p);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  terminalForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const command = terminalInput.value.trim().toLowerCase();

    if (command === "") return;

    printLine("pete@portfolio:~$ " + command);

    if (command === "clear") {
      terminalOutput.innerHTML = "";
    } else if (terminalCommands[command]) {
      printLine(terminalCommands[command]);
    } else {
      printLine("Command not found.");
      printLine("Type 'help' for available commands.");
    }

    terminalInput.value = "";
  });

  // -------------------------
  // SECRET MODE
  // -------------------------

  const secret = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight"
  ];

  let entered = [];

  document.addEventListener("keydown", function (e) {
    entered.push(e.key);

    if (entered.length > secret.length) {
      entered.shift();
    }

    if (JSON.stringify(entered) === JSON.stringify(secret)) {
      alert("🛠 Developer Mode Activated!");
      document.body.classList.toggle("secret-mode");
    }
  });

  console.log("Pete Junior Portfolio Loaded Successfully.");

});
