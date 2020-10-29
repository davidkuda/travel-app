const express = require("express");
// const { markup } = require("../client");
const app = express();

app.use(express.static('dist'))

const cors = require('cors');
app.use(cors())

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

// create callback for post request to /request

const getUserInput = (req, res) => {
  console.log('caught post request')
  console.log(req.body)
  // data.push(req.body)
}

// create an endpoint to receive input from front end
app.post('/request', getUserInput);

