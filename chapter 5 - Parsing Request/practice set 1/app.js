const http = require('http');
const requestHandler = require('../../../chapter 6 -/practice set 1/user');

const server = http.createServer(requestHandler);

// 3000 is the port number
const port = 3000;
server.listen(port, () => {
    console.log(`Server is listening on address http://localhost:${port}`);
});