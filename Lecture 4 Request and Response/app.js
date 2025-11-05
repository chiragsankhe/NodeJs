const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>home </title></head>');
        res.write('<body><h1> welcome to home page </h1></body>');
        res.write('</html>');
        return res.end();

    } else if (req.url === '/product') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>check out hte product </h1></body>');
        res.write('</html>');
        return res.end();

    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>opoos sorry you are on wrong page</h1></body>');
    res.write('</html>');
});
// 3000 is the port number
const port = 3000;
server.listen(port, () => {
    console.log(`Server is listening on address http://localhost:${port}`);
});