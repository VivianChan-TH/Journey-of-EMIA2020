const term = new Terminal(
    {
        theme: {
            background: '#000000', // set the background color
            foreground: '#ffffff', // set the default text color
            cursor: '#c5c8c6', // set the cursor color
            selection: '#4d4d4d', // set the selection color
            black: '#000000', // set the color for black text
            red: '#cc6666', // set the color for red text
            green: '#b5bd68', // set the color for green text
            yellow: '#f0c674', // set the color for yellow text
            blue: '#81a2be', // set the color for blue text
            magenta: '#b294bb', // set the color for magenta text
            cyan: '#8abeb7', // set the color for cyan text
            white: '#ffffff' // set the color for white text
        }
    }
);
const container = document.getElementById('terminal-container');

// Set initial size of terminal container
container.style.height = `${window.innerHeight}px`;
container.style.width = `${window.innerWidth}px`;
term.open(container);


term.write('Welcome to the terminal for EMIA2020 personal reflection! Type "help" to see all available commands.\r\n$ ');

let cmdBuffer = '';

// Handle window resize events
window.addEventListener('resize', () => {
    container.style.height = `${window.innerHeight}px`;
    container.style.width = `${window.innerWidth}px`;
});

const writeInput = (text) => {
    term.write('\x1b[33m' + text + '\x1b[0m');
    // term.write('\x1b[38;5;196m' + text + '\x1b[0m');
};

term.onKey((e) => {
    const printable = !e.domEvent.altKey && !e.domEvent.altGraphKey && !e.domEvent.ctrlKey && !e.domEvent.metaKey;

    if (e.domEvent.keyCode === 13) {
        handleCommand();
    }
    else if (e.domEvent.keyCode === 8) {
        // Handle Backspace key
        if (cmdBuffer.length > 0) {
            term.write('\b \b');
            cmdBuffer = cmdBuffer.slice(0, -1);
        }
    }
    else if (printable) {
        writeInput(e.key);
        cmdBuffer += e.key;
    }
});

const commands = [
    { name: 'profile', description: 'Display information about my profile' },
    { name: 'echo', description: 'Print the given string to the terminal' },
    { name: 'date', description: 'Print the current date and time' },
    { name: 'clear', description: 'Clear the terminal screen' },
    { name: 'help', description: 'Display a list of available commands' }
];
const profiles = [
    { name: 'profile skills', description: 'Print the given string to the terminal' },
    { name: 'profile experience', description: 'Print the current date and time' },
    { name: 'profile projects', description: 'Clear the terminal screen' },
    { name: 'profile help', description: 'Display a list of available commands' }
];

function handleCommand() {
    console.log(cmdBuffer);
    // Split the command buffer into an array of arguments
    const args = cmdBuffer.trim().split(/\s+/);

    // Get the command name from the first argument
    const cmd = args[0];

    // Check which command was entered and execute the appropriate code
    if (cmd === 'profile') {
        // Handle "profile" command
        const input = args[1];
        if (input === 'skills') {
            term.write('\r\nMy skills include web development using HTML, CSS, and JavaScript, as well as experience with React, Node.js, and MongoDB.');
        } else if (input === 'experience') {
            term.write('\r\nI have worked on several web development projects, including a full-stack web application. I am a quick learner and enjoy working on challenging projects.');
        } else if (input === 'projects') {
            term.write('\r\nHere are some of my completed projects:\r\n');
            term.write('- Project 1: A React-based weather app that displays current conditions and forecasts for any location\r\n');
            term.write('- Project 2: A Node.js and MongoDB-based task manager app that allows users to create, update, and delete tasks');
        } else {
            if (input !== 'help') {
                term.write('\r\n[Error] Insufficient argument. \r\nprofile <area>');
            }
            profiles.forEach((profiles) => {
                term.write('\r\n' + profiles.name.padEnd(25, ' ') + '- ' + profiles.description);
            });
        }
    } else if (cmd === 'echo') {
        // Handle "echo" command
        const output = args.slice(1).join(' ');
        term.write('\r\n' + output);
    } else if (cmd === 'date') {
        // Handle "date" command
        const date = new Date();
        term.write('\r\n' + date.toString());
    } else if (cmd === 'clear') {
        // Handle "clear" command
        term.clear();
    } else if (cmd === 'help') {
        // Handle "help" command
        term.write('\r\nAvailable commands:');
        commands.forEach((command) => {
            term.write('\r\n' + command.name.padEnd(25, ' ') + '- ' + command.description);
        });
    } else {
        // Handle unknown command
        term.write('\r\n[Error] Unknown command: ' + cmd + '. Type "help" to see all available commands.');
    }

    // Write the prompt and clear the command buffer
    term.write('\r\n$ ');
    cmdBuffer = '';
}