const terminalCommands = {
    whoami: "Pete Junior — Tech enthusiast, creator, future engineer.",
    mission: "Build technology that solves real problems.",
    motto: "Explore. Dream. Discover.",
    interests: "Tech · Coding · Gaming · Music · Gadgets · Poetry",
    status: "Curious. Learning. Building.",
    help: "Commands: whoami, mission, motto, interests, status, clear"
};

const terminalForm = document.getElementById("terminalForm");
const terminalInput = document.getElementById("terminalInput");
const terminalOutput = document.getElementById("terminalOutput");

function printTerminal(text) {
    const line = document.createElement("p");
    line.textContent = text;
    terminalOutput.appendChild(line);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

terminalForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const command = terminalInput.value.trim().toLowerCase();

    if (command === "") return;

    printTerminal("pete@portfolio:~$ " + command);

    if (command === "clear") {
        terminalOutput.innerHTML = "";
    } 
    else if (terminalCommands[command]) {
        printTerminal(terminalCommands[command]);
    } 
    else {
        printTerminal("Command not found: " + command);
        printTerminal("Type 'help' to see available commands.");
    }

    terminalInput.value = "";
});
