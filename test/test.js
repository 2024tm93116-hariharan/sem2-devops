const http = require('http');
const assert = require('assert');

// Give the server a few seconds to start.
setTimeout(() => {
  http.get('http://localhost:3000', (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      try {
        assert.strictEqual(data, "Hello, World!");
        console.log("Test passed.");
        process.exit(0);
      } catch (error) {
        console.error("Test failed.", error);
        process.exit(1);
      }
    });
  }).on('error', (err) => {
    console.error("Test failed.", err);
    process.exit(1);
  });
}, 3000);
