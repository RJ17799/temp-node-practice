const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {


    res.setHeader('Content-Type', 'text/html');
    if (req.url == '/') {
        res.statusCode = 200;
        res.end('<h1>The server is running</h1>');
    } else if (req.url == "/about") {
        res.statusCode = 200;
        res.end('<h1>The server is running2</h1>');
    } else {
        res.statusCode = 404;
        res.end('<h1>Page not found</h1>');
    }


});
server.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});