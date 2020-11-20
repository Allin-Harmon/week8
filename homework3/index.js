// 10. require in express
const express = require("express");

// 11. Initialize express to the variable app
const app = express();

// 12. require in the path module
const path = require("path");

// 13. Set a variable port to 3000
const PORT = process.env.port || 3000;

// 14. Add in this line of middleware right below: app.use(express.urlencoded({ extended: true })); TIP: this will allow us to pull in form data
app.use(express.urlencoded({ extended: true }));

// 15. Create an endpoint for a GET request on "/" this should send the provided login.html file HINT: you'll want to use the res.sendFile() method
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/login.html"), (err) => {
    if (err) {
      console.log(err);
    }
  });
});

//! Good Job!

// 16. Create an endpoint for a GET request to "/:page", this should check if the parameter is equal to 1, 2, or 3. If req.params.page is 1 then you should load the provided page_1.html file, if req.params.page is 2 then you should load the page_2.html file, etc.
app.get("/:page", (req, res) => {
  if (req.params.page == 1) {
    res.sendFile(path.join(__dirname, `views/page_1.html`));
  } else if (req.params.page == 2) {
    res.sendFile(path.join(__dirname, `views/page_2.html`));
  } else if (req.params.page == 3) {
    res.sendFile(path.join(__dirname, `views/page_3.html`));
  }
});

//! Works perfectly!

// 17. Create an endpoint for a POST request to "/", using the response object call the end() method and pass in "<h1>This is (username they typed in on the login page)'s page</h1>"
app.post("/", (req, res) => {
  res.end(`<h1>This is ${req.body.username}'s page</h1>`);
});

// 18. Finally listen on the PORT you defined above. Optionally pass in a callback to write to the console what port the server is listening on.
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});

//! Good work here Allin, it all works great!
