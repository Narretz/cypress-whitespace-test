const express = require('express');
const app = express();

app.use('/static', express.static(__dirname + '/static'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

