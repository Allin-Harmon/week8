// - require in the readline module
const readline = require('readline');

// - Add this code in --> const rl = readline.createInterface({ input: process.stdin, output: process.stdout});
const rl = readline.createInterface({ input: process.stdin, output: process.stdout});

// - Write to the console "Hello what is your name?\n"
console.log('Hello what is your name? \n');

// - Add a listener on rl listening for the 'line' event. In the callback check if user input equals "exit" if so call rl.close() else write to the console "Nice to meet you (userInput)\n" then console.log("Hello what is your name?\n) again
rl.on('line', (response) => {
    if ( response === 'exit') {
        rl.close();
    } else {
        console.log(`Nice to meet you ${response} \n`);
        //console.log('Hello what is your name? \n')
        console.log('What is your name again? (or type "exit" to leave) \n')
    }
    
    // - Add another listener on rl, this time listening for the 'close' event, the callback should just write "goodbye!" to the console.
    rl.on('close', () => {
        console.log('goodbye!');
    });
    
});