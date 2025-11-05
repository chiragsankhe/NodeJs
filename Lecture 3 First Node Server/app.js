const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
});
// 3000 is the port number
const port = 3000;
server.listen(port, () => {
    console.log(`Server is listening on address http://localhost:${port}`);
});