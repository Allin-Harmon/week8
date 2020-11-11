// step 6 
const url = require('url');


// - Create a variable request set it to the string "http://my-website.com/about/info?userid=1&page=3"
var myURL = "http://my-website.com/about/info?userid=1&page=3";


// - Create another variable named myURL set it equal to an object instantiated from the URL class. HINT: you do NOT need to require the URL module to call the URL constructor.
var myURL = new URL("http://my-website.com/about/info?userid=1&page=3");

// - Write using properties of the myURL object you just created "http://my-website.com/" to the console. HINT: href
console.log(myURL.href);

// - Write using properties of the myURL object you just created "my-website.com" to the console. HINT: host
console.log(myURL.host);

// - Write using properties of the myURL object you just created "/about/info" to the console. HINT: pathname
console.log(myURL.pathname);

// - Using the searchParams property of the myURL object call the get() method getting the userid query string parameter value HINT: the value that the get() method should return is 1
console.log(myURL.searchParams.get('userid'));

// - Using the searchParams property of the myURL object call the has() method to check if the query string contains a page parameter HINT: Should return true as our url does have a page
console.log(myURL.searchParams.has('page'));
