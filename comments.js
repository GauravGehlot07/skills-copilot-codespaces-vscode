//Create web server
const express = require('express');
const app = express();
const port = 3000;

//Create a router
const commentsRouter = express.Router();

//Create a route for GET requests
commentsRouter.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

//Create a route for POST requests
commentsRouter.post('/', (req, res) => {
  res.send('POST request to the homepage');
});

//Create a route for PUT requests
commentsRouter.put('/', (req, res) => {
  res.send('PUT request to the homepage');
});

//Create a route for DELETE requests
commentsRouter.delete('/', (req, res) => {
  res.send('DELETE request to the homepage');
});

//Mount the router
app.use('/comments', commentsRouter);

//Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});