// Create web server
// 1.1. Import module http
const http = require('http');
// 1.2. Create server
const server = http.createServer();
// 1.3. Listen port
server.listen(3000);
// 1.4. Handle request
server.on('request', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end('<h1>Hello world</h1>');
});
// 1.5. Log message
console.log('Server running on port 3000');
// 1.6. Open browser and go to http://localhost:3000
// 1.7. Check log message

// 2.1. Import module http
const http = require('http');
// 2.2. Create server
const server = http.createServer();
// 2.3. Listen port
server.listen(3000);
// 2.4. Handle request
server.on('request', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end('<h1>Hello world</h1>');
});
// 2.5. Log message
console.log('Server running on port 3000');
// 2.6. Open browser and go to http://localhost:3000
// 2.7. Check log message

// 3.1. Import module http
const http = require('http');
// 3.2. Create server
const server = http.createServer();
// 3.3. Listen port
server.listen(3000);
// 3.4. Handle request
server.on('request', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end('<h1>Hello world</h1>');
});
// 3.5. Log message
console.log('Server running on port 3000');
// 3.6. Open browser and go to http://localhost:3000
// 3.7. Check log message

// 4.1. Import module http
const http = require('http');
// 4.2. Create server
const server = http.createServer();
// 4.3. Listen port
server.listen(3000);
// 4.4. Handle request
server.on