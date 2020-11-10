// step 8 & 9
const path = require('path');

// step 10
var myPath = path.join(__dirname, 'some_folder', 'hello.txt');

// step 11
var pathObject = path.parse(myPath);
console.log(pathObject);
