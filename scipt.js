/* =========================================================
   INTERACTIVE TERMINAL
   ========================================================= */

const terminalForm = document.getElementById("terminalForm");
const terminalInput = document.getElementById("terminalInput");
const terminalOutput = document.getElementById("terminalOutput");


function printTerminal(text, className = "") {

    const line = document.createElement("p");

    if (className) {
        line.classList.add(className);
    }

    line.textContent = text;

    terminalOutput.appendChild(line);

    terminalOutput.scrollTop =
        terminalOutput.scrollHeight;
}


terminalForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const command =
        terminalInput.value
            .trim()
            .toLowerCase();

    if (!command) return;


    printTerminal(
        `pete@portfolio:~$ ${command}`
    );


    if (terminalCommands[command]) {

        printTerminal(
            terminalCommands[command]
        );

    }

    else if (command === "clear") {

        terminalOutput.innerHTML = "";

    }

    else {

        printTerminal(
            `Command not found: ${command}`
        );

        printTerminal(
            "Type 'help' to see available commands."
        );

    }


    terminalInput.value = "";

});
