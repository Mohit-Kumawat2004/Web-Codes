const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  // Parse the request URL
  const parsedUrl = url.parse(req.url, true);

  // Check if the request is for the '/api/v1/ping' endpoint
  if (parsedUrl.pathname === '/api/v1/ping' && req.method === 'GET') {
    // Set the response headers
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // Send the 'Hello' message in the response
    const responseMessage = JSON.stringify({ message: 'Hello' });
    res.end(responseMessage);
  } else {
    // For other endpoints, respond with a 404 Not Found error
    res.writeHead(404, { 'Content-Type': 'application/json' });
    const errorMessage = JSON.stringify({ error: 'Not Found' });
    res.end(errorMessage);
  }
});

// Set the port number for the server to listen on
const port = 3000;

// Start the server and listen for incoming requests
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
