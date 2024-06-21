const http = require('http');

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end('Hello, update to check the final CI/CD');
}

const server = http.createServer(requestListener);
server.listen(80);
