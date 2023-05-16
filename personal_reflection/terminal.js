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


term.write('Welcome to the terminal for EMIA2020 personal reflection! \r\nType "help" to see all available commands.\r\n$ ');

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

const writeError = (text) => {
    term.write('\r\n[\x1b[38;5;196mError\x1b[0m]' + text);
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
    { name: 'profile', description: 'Display information about me' },
    { name: 'activity', description: 'Reflection on each activity' },
    { name: 'suggestion', description: 'Small suggestions to the course' },
    { name: 'share', description: 'Things to share about the course' },
    { name: 'date', description: 'Print the current date and time' },
    { name: 'clear', description: 'Clear the terminal screen' },
    { name: 'help', description: 'Display a list of available commands' },
    { name: '<secret>', description: 'Always ask ???' }
];
const profiles = [
    { name: 'profile primary', description: 'Project experience in primary school' },
    { name: 'profile secondary', description: 'Project experience in secondary school' },
    { name: 'profile now', description: 'Project experience in HKUST' },
    { name: 'profile help', description: 'List all the available profile commands' }
];
const activities = [
    { name: 'activity intro', description: 'Reflection of Week 1' },
    { name: 'activity field', description: 'Reflection of Week 2' },
    { name: 'activity empathy', description: 'Reflection of Week 3' },
    { name: 'activity interview', description: 'Reflection of Week 4' },
    { name: 'activity problem', description: 'Reflection of Week 5-6' },
    { name: 'activity brainstorm', description: 'Reflection of Week 7-8' },
    { name: 'activity prototype', description: 'Reflection of Week 9-11' },
    { name: 'activity management', description: 'Reflection of Week 9 management' },
    { name: 'activity story', description: 'Reflection of Week 12' },
    { name: 'activity project', description: 'Reflection of our team project' },
    { name: 'activity help', description: 'List all the available activity commands' }
];
const suggestions = [
    { name: 'suggestion feedback', description: 'Suggestion on feedback process' },
    { name: 'suggestion materials', description: 'Suggestion on material given' },
    { name: 'suggestion length', description: 'Suggestion on length of parts' },
    { name: 'suggestion help', description: 'List all the available suggestion commands' }
];
const shares = [
    { name: 'share feelings', description: 'Sharing of my feelings towards the course' },
    { name: 'share new', description: 'Sharing of learning new things' },
    { name: 'share help', description: 'List all the available share commands' }
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
        if (input === 'primary') {
            term.write('\r\nI had a lot of project experience starting from primary school, \r\nas different subjects like to ask us to form groups to give presentations \r\nin different forms.');
            term.write('\r\n');
            term.write('\r\nThe most memorable one is the worst one in P6 which there are 8 people \r\nin the group and all members apart from me are free riders.');
            // ascii art
            term.write("\r\n\x1b[31m _______ ");
            term.write("\r\n\x1b[31m/       \\ ");
            term.write("\r\n\x1b[31m|  ̿̿ | ̿̿  |");
            term.write("\r\n\x1b[31m\\___^___/ \x1b[0m");
        } else if (input === 'secondary') {
            term.write('\r\nMy secondary school actually offered us project learning course in F2. \r\nThough I don\'t seem to learn anything at all as the teacher only gives out tasks\r\nbut not techniques.');
            term.write('\r\n');
            term.write('\r\nIn higher form, everyone need to do a thing called IES, that is a one person, \r\nkind of like research, project that needs primary and secondary researches. \r\nI only conducted questionnaires at that time but not interviews. \r\nI did a topic on e-learning (before covid even started) which in the end having great score.👍');
        } else if (input === 'now') {
            term.write('\r\nI am a CS year 2 student and a Robotics Team member. \r\nMy daily activity is to undergo projects. \r\nThis semester, I am actually taking COMP3111 Software Engineering that has a \r\nsmall scale project of 3 people.');
        } else {
            if (input !== 'help') {
                writeError('Insufficient argument.');
                term.write('\r\nprofile <area>');
            }
            profiles.forEach((profiles) => {
                term.write('\r\n' + profiles.name.padEnd(25, ' ') + '- ' + profiles.description);
            });
        }
    } else if (cmd === 'activity') {
        // Handle "profile" command
        const input = args[1];
        if (input === 'intro') {
            term.write('\r\n...');
            term.write('\r\nProgress: |██████-------------------------------------------| 10.0% Complete');
        } else if (input === 'field') {
            term.write('\r\n...');
        } else if (input === 'empathy') {
            term.write('\r\n...');
        } else if (input === 'interview') {
            term.write('\r\n...');
        } else if (input === 'problem') {
            term.write('\r\n...');
        } else if (input === 'brainstorm') {
            term.write('\r\n...');
        } else if (input === 'prototype') {
            term.write('\r\n...');
        } else if (input === 'management') {
            term.write('\r\n...');
        } else if (input === 'story') {
            term.write('\r\n...');
        } else if (input === 'project') {
            term.write('\r\n...');
        } else {
            if (input !== 'help') {
                writeError('Insufficient argument.');
                term.write('\r\nactivity <area>');
            }
            activities.forEach((activities) => {
                term.write('\r\n' + activities.name.padEnd(25, ' ') + '- ' + activities.description);
            });
        }
    } else if (cmd === 'suggestion') {
        // Handle "profile" command
        const input = args[1];
        if (input === 'feedback') {
            term.write('\r\n...');
        } else if (input === 'materials') {
            term.write('\r\n...');
        } else if (input === 'length') {
            term.write('\r\n...');
        } else {
            if (input !== 'help') {
                writeError('Insufficient argument.');
                term.write('\r\nsuggestion <area>');
            }
            suggestions.forEach((suggestions) => {
                term.write('\r\n' + suggestions.name.padEnd(25, ' ') + '- ' + suggestions.description);
            });
        }
    } else if (cmd === 'share') {
        // Handle "profile" command
        const input = args[1];
        if (input === 'feelings') {
            term.write('\r\n...');
        } else if (input === 'new') {
            term.write('\r\n...');
        } else {
            if (input !== 'help') {
                writeError('Insufficient argument.');
                term.write('\r\nshare <area>');
            }
            shares.forEach((shares) => {
                term.write('\r\n' + shares.name.padEnd(25, ' ') + '- ' + shares.description);
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
    } else if (cmd === 'why') {
        // Handle "help" command
        term.write('\r\nAlways ask ...');

        // ascii art
        term.write("\r\n\x1b[31m                         ,--,             ");
        term.write("\r\n\x1b[31m            .---.      ,--.'|             ");
        term.write("\r\n\x1b[31m           /. ./|   ,--,  | :       ,---, ");
        term.write("\r\n\x1b[31m       .--'.  ' ;,---.'|  : '      /_ ./| ");
        term.write("\r\n\x1b[31m      /__./ \\ : ||   | : _' |,---, |  ' : ");
        term.write("\r\n\x1b[31m  .--'.  '   \\' .:   : |.'  /___/ \\.  : | ");
        term.write("\r\n\x1b[31m /___/ \\ |    ' '|   ' '  ; :.  \\  \\ ,' ' ");
        term.write("\r\n\x1b[31m ;   \\  \\;      :'   |  .'. | \\  ;  `  ,' ");
        term.write("\r\n\x1b[31m \\   ;  `       ||   | :  | '  \\  \\    '  ");
        term.write("\r\n\x1b[31m  .   \\     .\\  ;'   : |  : ;   '  \\   |  ");
        term.write("\r\n\x1b[31m    \\   \\   ' \\ ||   | '  ,/     \\  ;  ; ");
        term.write("\r\n\x1b[31m     :   '  |--\" ;   : ;--'       :  \\  \\ ");
        term.write("\r\n\x1b[31m      \\   \\ ;    |   ,/            \\  ' ; ");
        term.write("\r\n\x1b[31m       '---\"     '---'              `--`  \x1b[0m");
        term.write('\r\nStay curious!');
        term.write('\r\n(If you are curious, doing this assignment in the form of terminal is for me to learn a little more about web development and most importantly for fun!)');
    } else {
        // Handle unknown command
        writeError('Unknown command: ' + cmd + '. Type "help" to see all available commands.');
    }

    // Write the prompt and clear the command buffer
    term.write('\r\n$ ');
    cmdBuffer = '';
}