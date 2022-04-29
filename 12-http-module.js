const http = require('http');
const server = http.createServer((req, res) => {
    // console.log(req);
    if (req.url === '/') {
        res.end('Welcome to home page');
    }
    if (req.url === '/about') {
        res.end('Welcome to the about page');
    }
    res.end(`
    <h1>Oops </h1>
    <p>Can;t seem to find the page</p>
    <a href="/">Home page</a>
    `);
})
server.listen(5000);