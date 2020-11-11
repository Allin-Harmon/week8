// step 4
const os = require('os');
const path = require('path');
const fs = require('fs');

// - Write to the console all of your cpu information
console.log(os.cpus());

// - Write to the console your current operating system
console.log(os.platform());

// - Write to the console your CPU architecture
console.log(os.arch());

// - Write the total amount of memory on your server to the console
console.log(os.totalmem());

// - Write the total uptime on your machine to the console
console.log(os.uptime());

//   BONUS: Write your computer specs to a file called specs.txt Check out the attached image and mimic a similar format. HINT: You'll want the path & fs module for this

//add Bonus Question===============================================
fs.writeFile(
    'C://Users/Allin/Desktop/CBC10/week8/homework2/specs.txt',
    //add math later for total memory, and uptime
    `
Number of CPUs:     ${os.cpus().length}
Platform:           ${os.platform()}
Architecture:       ${os.arch()}
Total Memory:       ${os.totalmem()}
Uptime:             ${os.uptime()}
`,
    {}, 
    (err) => {
        if(err) {
            console.log(err);
        }
    }
)