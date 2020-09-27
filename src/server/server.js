const express = require("express");
const app = express();

app.use(express.static('dist'))

app.get("/", function (req, res) {
  res.send('dist/index.html');
});

app.listen(3000, function() {
    console.log("app listening on port 3000!");
});
