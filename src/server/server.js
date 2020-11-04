// Requires
// const apiRequests = require('apiRequests')
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

app.get('/response', (req, res) => {
  res.send('THIS IS SPARTA!')
})