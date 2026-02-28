const path = require("path");

// Current file path
console.log(__dirname);

// Current directory path
console.log(__dirname);

// Join paths safely
const filePath = path.join(__dirname, "folder", "file.txt");
console.log(filePath);