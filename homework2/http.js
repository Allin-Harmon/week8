// - Require in the http module
const http = require("http");
// - Instruct the server to listen on port 3000.
const PORT = 3000; // || process.env.port;

// - create a variable named server and set it equal the http module calling the createServer() method
const server = http.createServer((req, res) => {
  //   - the callback passed into createServer() should have two parameters request & response. For every request made to the server the server should respond with "<h1>Hello World</h1>"
  res.end("<h1>Hello World</h1>");
});

//! Good job here, but it would be better to accout for the request by simply placing an if statement: if (req.url) { res.end ('<h1>Hello World</h1>)'}

// - Check your work, http://localhost:3000 should have a single h1 with hello world inside, any path specified should also return this. i.e. http://localhost:3000/about should also return an h1 with hello world inside
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT})...`);
});

//! Nice!
