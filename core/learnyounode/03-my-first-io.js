var fs = require('fs'); // file system operation module

var filePath = process.argv[2]; // get file path from args

var fileContent = fs.readFileSync(filePath).toString(); // read file into string

var lineArray = fileContent.split('\n');

console.log(lineArray.length-1); // -1 to remove last line
