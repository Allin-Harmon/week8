// - require in the assert module
const assert = require("assert");

// - require in your foo.js file HINT: remember this is a custom module, also it is outside of the directory we a requiring it into
const foo = require("../foo.js");

// - If you can try to look at the image attached below and re-create it without following these steps.

// - Next use the describe() function, the first parameter it should take is 'foo() should return "bar"', the second parameter should be a callback function. Inside the callback function...
describe("Testing foo() function", () => {
  // - call the it() function, the first parameter should be 'foo() should return "bar"', the second parameter should be a callback, Inside the callback function...
  it('foo() should return "bar"', () => {
    // - Using the assert module you required call the strictEqual() method pass in foo() and 'bar'
    assert.strictEqual(foo(), "bar");
  });

  // - call another it() function, the first parameter should be 'foo() should return "bat"' the second parameter should be a callback, inside the callback function...
  it('foo() should return "bar"', () => {
    // - Using the assert module you required call the strictEqual() method pass in foo() and 'bat'
    assert.strictEqual(foo(), "bat");
  });
});

// - run npm test in the console if you've done everything correctly you'll see the same results as the image attached below

//! Great work Allin!
