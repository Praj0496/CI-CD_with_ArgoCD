const http = require('http');

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end('Hello, this is update for recording');
}

const server = http.createServer(requestListener);
server.listen(80);
