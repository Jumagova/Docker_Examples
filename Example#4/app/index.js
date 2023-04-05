const http = require('http');
const hostname = '0.0.0.0';
const port = 8000;

const server = http.createServer((req, res) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.end('<html><body><h1>Hello, Juanma!</h1></body></html>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});