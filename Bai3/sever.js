const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const filePath = path.join(__dirname, 'index.html');
    const fileStream = fs.createReadStream(filePath);
    res.writeHead(200, {'Content-Type': 'text/html'});
    fileStream.pipe(res);
  }
}).listen(3000)