const http = require('http');
const home = require('./pages/home');
const calculator = require('./pages/cal');
const add = require('./modules/add');


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        return home(req, res);
    } else if (req.url === '/calculator') {
        return calculator(req, res);
    } else if (req.url === '/add' && req.method === 'POST') {
        return add(req, res);
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>404 Not Found</h1>');
    return res.end();
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});