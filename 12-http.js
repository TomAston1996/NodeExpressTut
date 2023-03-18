const http = require('http')

const server = http.createServer((req,res) => {
    //if user tries to access home page
    if (req.url === '/') {
        res.end('Home page'); 
    }
    //if user tries to access /about page
    else if (req.url === '/about') {
        res.end('About page');
    } 
    //if user tries to access a page that doesn't exist -> default
    else res.end(
        `
        <h1>Oops! Page doesn't exist</h1>
        <p>We can't seem to find what you're looking for</p>
        <a href='/'>Home</a>
        `
    )
    
})

server.listen(5000); //setup server on port 5000 localhost