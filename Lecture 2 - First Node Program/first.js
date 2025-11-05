console.log("hello from first.js");

const fs = require('fs');

// writeFile(filename, data, callback)
fs.writeFile("output.txt", "Writing File", (err) => {
    if (err) {
        console.log("Error occurred");
    } else {
        console.log("File written successfully");
    }
});