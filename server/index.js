// Require express and create an instance of it
var express = require('express');
const path = require('path');
var app = express();
const cors = require('cors');
const corsOptions ={
    origin:'*', 
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// start the server in the port 3000 !
app.listen(3000, function () {
    console.log('Example app listening on port 3000.');
});
