const commandInput = document.getElementById('command-input');
const outputContainer = document.getElementById('output-container');

commandInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const command = commandInput.value;
        outputContainer.innerHTML += `<div>${command}</div>`;
        commandInput.value = '';

        switch (command) {
            case 'hello':
                outputContainer.innerHTML += '<div>Hello, world!</div>';
                break;
            case 'picture':
                outputContainer.innerHTML += '<div><img src="https://picsum.photos/200/300"></div>';
                break;
            default:
                outputContainer.innerHTML += '<div>Command not found</div>';
                break;
        }

        outputContainer.scrollTop = outputContainer.scrollHeight;
    }
});