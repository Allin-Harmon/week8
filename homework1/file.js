// step 12
const path = require("path");
const fs = require("fs");

// step 13
// fs.mkdir(path.join(__dirname, 'myNewFolder'), {}, (err) => {
//     if (err) {
//         console.log(err);
//     }
// });

// step 14
fs.access(path.join(__dirname, "myNewFolder"), fs.constants.F_OK, (err) => {
  if (err) {
    fs.mkdir(path.join(__dirname, "myNewFolder"), {}, (err) => {
      if (err) {
        console.log(err);
      }
    });
  } else {
    console.log("folder already created");
  }
});

// step 15
fs.writeFile(
  path.join(__dirname, "myNewFolder", "hello.txt"),
  "hello world (or whatever you like I really don't care)",
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);

//! Great work!

// step 16
fs.readFile(
  path.join(__dirname, "myNewFolder", "hello.txt"),
  "utf-8",
  (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  }
);

//! Good job with your readFile!
