const http = require('http');
const url = require('url');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Parse the request URL
  const parsedUrl = url.parse(req.url, true);

  // Check if the request is for the '/api/v1/ping' endpoint
  if (parsedUrl.pathname === '/api/v1/ping' && req.method === 'GET') {
    // Set the response headers
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // Send the response with the 'Hello' message
    res.end(JSON.stringify({ message: 'Hello' }));
  } else {
    // Handle other requests with a 404 Not Found response
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

// Specify the port to listen on
const port = 3000;

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
