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

const writeOutput = (text) => {
    term.write('\r\n' + text);
};

const writeError = (text) => {
    term.write('\r\n[\x1b[38;5;196mError\x1b[0m]' + text);
};

term.write('Welcome to the terminal for EMIA2020 personal reflection!');
writeOutput('You can start by entering "profile primary"');
writeOutput('Type "help" to see all available commands.');
writeOutput('(Ignore the strange dimension, I\'m a newbie to web.)😐');
writeOutput('$ ');

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
    { name: 'echo', description: 'Print the given string to the terminal' },
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
            writeOutput('I had a lot of project experience starting from primary school,');
            writeOutput('as different subjects like to ask us to form groups to give presentations');
            writeOutput('in different forms.');
            writeOutput('');
            writeOutput('The most memorable one is the worst one in P6 which there are 8 people');
            writeOutput('in the group and all members apart from me are free riders.');
            // ascii art
            writeOutput("\x1b[31m _______ ");
            writeOutput("\x1b[31m/       \\ ");
            writeOutput("\x1b[31m|  ̿̿ | ̿̿  |");
            writeOutput("\x1b[31m\\___^___/ \x1b[0m");
            writeOutput('');
            writeOutput('\x1b[35m~ Vivian ~\x1b[0m');
            //
            writeOutput('');
            writeOutput('Next: profile secondary');
        } else if (input === 'secondary') {
            writeOutput('My secondary school actually offered us project learning course in F2. \r\nThough I don\'t seem to learn anything at all as the teacher only gives out tasks\r\nbut not techniques.');
            writeOutput('');
            writeOutput('In higher form, everyone need to do a thing called IES, that is a one person, \r\nkind of like research, project that needs primary and secondary researches. \r\nI only conducted questionnaires at that time but not interviews. \r\nI did a topic on e-learning (before covid even started) which in the end having great score.👍');
            writeOutput('');
            writeOutput('\x1b[35m~ Vivian ~\x1b[0m');
            //
            writeOutput('');
            writeOutput('Next: profile now');
        } else if (input === 'now') {
            writeOutput('I am a CS year 2 student and a Robotics Team member. \r\nMy daily activity is to undergo projects. \r\nThis semester, I am actually taking COMP3111 Software Engineering that has a \r\nsmall scale project of 3 people.');
            writeOutput('');
            writeOutput('\x1b[35m~ Vivian ~\x1b[0m');
            //
            writeOutput('');
            writeOutput('Next: activity intro');
        } else {
            if (input !== 'help') {
                writeError('Insufficient argument.');
                writeOutput('profile <area>');
            }
            profiles.forEach((profiles) => {
                writeOutput(profiles.name.padEnd(25, ' ') + '- ' + profiles.description);
            });
        }
    } else if (cmd === 'activity') {
        // Handle "profile" command
        const input = args[1];
        if (input === 'intro') {
            writeOutput('I have learnt about the steps in a project.');
            writeOutput('1. Interview');
            writeOutput('2. Design');
            writeOutput('3. Craft');
            writeOutput('4. Feedback');
            writeOutput('Progress: |█████--------------------------------------------| 10.0% Complete');
            //
            writeOutput('');
            writeOutput('Next: activity field');
        } else if (input === 'field') {
            writeOutput('I never knew wellbeing can be a topic of sustainability.');
            writeOutput('Mindful walking is new to me but seems not useful for me.');
            writeOutput('Until this day I found out there are many data dangling about our campus');
            writeOutput('without us noticing.');
            writeOutput('Also, we need to keep in mind about user\'s feelings');
            writeOutput('It\'s a pity that I am not able to join the other section of the campus tour.😢');
            writeOutput('Progress: |██████████---------------------------------------| 20.0% Complete');
            //
            writeOutput('');
            writeOutput('Next: activity empathy');
        } else if (input === 'empathy') {
            writeOutput('I understand that failure and uncertainty is usual in daily life.');
            writeOutput('This greatly affect how I treat my project and decisions in the future.');
            writeOutput('This course emphasizes primary research which I lack experience to');
            writeOutput('do so in the past projects.');
            writeOutput('I also learn that empathy is different from sympathy.');
            writeOutput('Empathy is a lot better as it means getting into other people\'s shoes, ');
            writeOutput('while sympathy is just looking from the high ground at other\'s pain.');
            writeOutput('I can still remember that video shown in class haha🤣.');
            writeOutput('Progress: |███████████████----------------------------------| 30.0% Complete');
            //
            writeOutput('');
            writeOutput('Next: activity interview');
        } else if (input === 'interview') {
            writeOutput('I learnt about different types of interview in the previous class');
            writeOutput('and used semi-structural ones that is more suitable.');
            writeOutput('At first, I have difficulty in getting a long interview.😫');
            writeOutput('Besides, asking follow up question is hard.');
            writeOutput('Gradually, I learn to ask why and have an hour long interview');
            writeOutput('with the student counsellors as the stakeholder of my project.');
            writeOutput('Progress: |████████████████████-----------------------------| 40.0% Complete');
            //
            writeOutput('');
            writeOutput('Next: activity problem');
        } else if (input === 'problem') {
            writeOutput('Remembering the bridge example, when we are finding a solution,');
            writeOutput('think of what is needed instead of wanted.');
            writeOutput('And again, asking whyyyyyyyy!');
            writeOutput('Net of opportunity is quite useful actually to brainstorm.');
            writeOutput('I am a bit reluctant to using miro at first but now totally adapted :).');
            writeOutput('Progress: |█████████████████████████------------------------| 50.0% Complete');
            //
            writeOutput('');
            writeOutput('Next: activity brainstorm');
        } else if (input === 'brainstorm') {
            writeOutput('Diverging and converging thinking is really useful.');
            writeOutput('Though sometimes I just stuck at diverging so');
            writeOutput('excessively that I cannot really converge lol.😂');
            writeOutput('Using stimulating question is fun but maybe due to lack of skills, ');
            writeOutput('all those fun ideas are not feasible.');
            writeOutput('Also, visualizing of ideas really help when there are plenty!');
            writeOutput('Progress: |██████████████████████████████-------------------| 60.0% Complete');
            //
            writeOutput('');
            writeOutput('Next: activity prototype');
        } else if (input === 'prototype') {
            writeOutput('As in robotics team, we also do prototype but I tend to only call the usable');
            writeOutput('ones as prototype. Now I know that there are concept and POC prototype too!');
            writeOutput('Also, testing is important and during which, conductor should not defend their');
            writeOutput('own product. Reproducing the necessary environment is also necessary for good results.');
            writeOutput('Progress: |███████████████████████████████████--------------| 70.0% Complete');
            //
            writeOutput('');
            writeOutput('Next: activity management');
        } else if (input === 'management') {
            writeOutput('Some overlap with COMP3111 including documentation, gantt chart and minutes.');
            writeOutput('In COMP3111, there are burndown chart as well.');
            writeOutput('Progress: |████████████████████████████████████████---------| 80.0% Complete');
            //
            writeOutput('');
            writeOutput('Next: activity story');
        } else if (input === 'story') {
            writeOutput('Watching different types of story telling in class,');
            writeOutput('seems like most include humour and catchphrase.');
            writeOutput('It is hard to think of that as a more "scientific" person.');
            writeOutput('Progress: |█████████████████████████████████████████████----| 90.0% Complete');
            //
            writeOutput('');
            writeOutput('Next: activity project');
        } else if (input === 'project') {
            writeOutput('We actually have struggled the longest time in converging of each step as');
            writeOutput('most of us are having choice difficulties (not because we have conflict haha).😏');
            writeOutput('In most cases, all of us don\'t have specific preferences');
            writeOutput('and get more and more and MORE and MORE and ... MORE ideas.');
            writeOutput('Progress: |█████████████████████████████████████████████████| 100.0% COMPLETE');
            //
            writeOutput('');
            writeOutput('Next: suggestion feedback');
        } else {
            if (input !== 'help') {
                writeError('Insufficient argument.');
                writeOutput('activity <area>');
            }
            activities.forEach((activities) => {
                writeOutput('' + activities.name.padEnd(25, ' ') + '- ' + activities.description);
            });
        }
    } else if (cmd === 'suggestion') {
        // Handle "profile" command
        const input = args[1];
        if (input === 'feedback') {
            writeOutput('I would love to have feedback in text as well.');
            //
            writeOutput('');
            writeOutput('Next: suggestion materials');
        } else if (input === 'materials') {
            writeOutput('Actually if all the assignment can be released in one go or earlier than the');
            writeOutput('way it is now, I will be able to plan ahead when I have less things to do.');
            writeOutput('That may cause less deadline fighting, (though not necessarily...)');
            //
            writeOutput('');
            writeOutput('Next: suggestion length');
        } else if (input === 'length') {
            writeOutput('I feel like the powerpoint part is still too long.');
            writeOutput('Even more activities will be better!😆');
            //
            writeOutput('');
            writeOutput('Next: share feelings');
        } else {
            if (input !== 'help') {
                writeError('Insufficient argument.');
                writeOutput('suggestion <area>');
            }
            suggestions.forEach((suggestions) => {
                writeOutput('' + suggestions.name.padEnd(25, ' ') + '- ' + suggestions.description);
            });
        }
    } else if (cmd === 'share') {
        // Handle "profile" command
        const input = args[1];
        if (input === 'feelings') {
            writeOutput('I am actually loving and hating the course at the same time.');
            writeOutput('It is useful and fun, choosing our own topic is interesting, but');
            writeOutput('when I saw the time I spent on it and the time I spent for revising');
            writeOutput('other courses, it is a pain as those courses has much less time spent');
            writeOutput('than normally should. While I am also in robotics team which requires');
            writeOutput('work most of the time when there is no lectures. It is quite hard for me');
            writeOutput('to balance the time while not handing in garbage to this course.');
            writeOutput('Quoted from a lab mate that does not study AI extended major, he said,');
            writeOutput('"How to deal with lack of sleep problem(early POV of our team) is to');
            writeOutput('not study EMIA2020 or late drop robotics team." Just a fun note.');
            writeOutput('Though I am not regretting to take this as I really learn something.');
            //
            writeOutput('');
            writeOutput('Next: share new');
        } else if (input === 'new') {
            writeOutput('This course actually push me to learn new things (== web development)');
            writeOutput('and this terminal actually is a part of the learning.:)');
            writeOutput('(Not-fun fact: I never did web development before, so');
            writeOutput('thanks to my teammate for carrying through the prototyping process.)');
            writeOutput('');
            writeOutput('Here are all the tryouts I did ... (right click to copy due to tech issue)');
            writeOutput('1. ball bouncing in canvas:\r\nhttps://vivianchan-th.github.io/Journey-of-EMIA2020/test_animation/try.html');
            writeOutput('');
            writeOutput('2. train moving to the right:\r\nhttps://vivianchan-th.github.io/Journey-of-EMIA2020/test_animation/more_try.html');
            writeOutput('');
            writeOutput('3. embeding hamster interactive page:\r\nhttps://vivianchan-th.github.io/Journey-of-EMIA2020/test_animation/embed.html');
            writeOutput('');
            writeOutput('4. strange dimension cat:\r\nhttps://vivianchan-th.github.io/Journey-of-EMIA2020/test_animation/cat.html');
            //
            writeOutput('');
            writeOutput('Next: <secret> command, clue: Always ask ???.');
        } else {
            if (input !== 'help') {
                writeError('Insufficient argument.');
                writeOutput('share <area>');
            }
            shares.forEach((shares) => {
                writeOutput('' + shares.name.padEnd(25, ' ') + '- ' + shares.description);
            });
        }
    } else if (cmd === 'echo') {
        // Handle "echo" command
        const output = args.slice(1).join(' ');
        writeOutput('' + output);
    } else if (cmd === 'date') {
        // Handle "date" command
        const date = new Date();
        writeOutput('' + date.toString());
    } else if (cmd === 'clear') {
        // Handle "clear" command
        term.clear();
    } else if (cmd === 'help') {
        // Handle "help" command
        writeOutput('Available commands:');
        commands.forEach((command) => {
            writeOutput('' + command.name.padEnd(25, ' ') + '- ' + command.description);
        });
    } else if (cmd === 'why') {
        // Handle "help" command
        writeOutput('Always ask ...');

        // ascii art
        writeOutput("\x1b[31m                         ,--,             ");
        writeOutput("\x1b[31m            .---.      ,--.'|             ");
        writeOutput("\x1b[31m           /. ./|   ,--,  | :       ,---, ");
        writeOutput("\x1b[31m       .--'.  ' ;,---.'|  : '      /_ ./| ");
        writeOutput("\x1b[31m      /__./ \\ : ||   | : _' |,---, |  ' : ");
        writeOutput("\x1b[31m  .--'.  '   \\' .:   : |.'  /___/ \\.  : | ");
        writeOutput("\x1b[31m /___/ \\ |    ' '|   ' '  ; :.  \\  \\ ,' ' ");
        writeOutput("\x1b[31m ;   \\  \\;      :'   |  .'. | \\  ;  `  ,' ");
        writeOutput("\x1b[31m \\   ;  `       ||   | :  | '  \\  \\    '  ");
        writeOutput("\x1b[31m  .   \\     .\\  ;'   : |  : ;   '  \\   |  ");
        writeOutput("\x1b[31m    \\   \\   ' \\ ||   | '  ,/     \\  ;  ; ");
        writeOutput("\x1b[31m     :   '  |--\" ;   : ;--'       :  \\  \\ ");
        writeOutput("\x1b[31m      \\   \\ ;    |   ,/            \\  ' ; ");
        writeOutput("\x1b[31m       '---\"     '---'              `--`  \x1b[0m");
        writeOutput('Stay curious!');
        writeOutput('(If you are curious, doing this assignment in the form of terminal is for me to learn a little more about web development and most importantly for fun!)');
    } else {
        // Handle unknown command
        writeError('Unknown command: ' + cmd + '. Type "help" to see all available commands.');
    }

    // Write the prompt and clear the command buffer
    writeOutput('$ ');
    cmdBuffer = '';
}