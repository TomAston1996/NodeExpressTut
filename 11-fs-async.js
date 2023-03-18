//ASYNCHRONOUS VERSION

const {readFile, writeFile} = require('fs'); //destructure the methods out of the fs module - this is opposed to doing fs.readFile for example
console.log('start')

readFile('./content/first.txt', 'utf8', (err, result) => {
    //if error
    if(err) { 
        console.log(err);
        return
    }
    //else get first result
    const first = result;
    
    //then read the secod file
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err) { 
            console.log(err);
            return
        }
        //else
        const second = result
        writeFile(
            './content/result-sync.txt', //new file and location
            `Here is the result: ${first}, ${second}`, // new content
            {flag: 'a'}, // a for append, don't need to include to make a new file/overwrite
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done with this task')
            })
    })
})

console.log('starting the next task')




