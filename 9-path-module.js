const path = require('path'); //import path module


const filePath = path.join('/content', '/subfolder', 'test.txt'); // get normalise path to .txt file
console.log(filePath); 


const base = path.basename(filePath); 
console.log(base);


const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute)