const {readFileSync, writeFileSync, read} = require('fs'); //destructure the methods out of the fs module - this is opposed to doing fs.readFileSync for example
const path = require('path');
console.log('start')

const path1 = './content/first.txt'
const path2 = './content/second.txt';

const first = readFileSync(path1, 'utf8');
const second = readFileSync(path2, 'utf8');

//console.log(first, second); 

writeFileSync(
    './content/result-sync.txt', //new file and location
    `Here is the result: ${first}, ${second}`, // new content
    {flag: 'a'} // a for append, don't need to include to make a new file/overwrite
    )

console.log('done with this task')
console.log('starting the next task')



