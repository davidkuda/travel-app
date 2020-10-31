// Requires
const apiRequests = require('apiRequests')
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

// Express
const app = express();
app.use(express.static('dist'));
app.use(cors());
app.use(bodyParser.json())

// Routes
app.get("/", function (req, res) {
  res.send('dist/index.html');
});

app.listen(3000, function() {
    console.log("app listening on port 3000!");
});

// create an object to store all data that is available to front end 
const data = {};

// Deliver data to front end through endpoint
app.get('/response', (req, res) => {
  res.send(data)
});

// create an endpoint to receive input from front end
app.post('/d', async (req, res) => {
  let data = req.body;
  console.log('caught post request')
  console.log(data)
  console.log(res.body)
});