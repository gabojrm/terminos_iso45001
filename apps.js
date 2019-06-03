const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
var port = process.env.PORT || process.env.VCAP_APP_PORT || 3000
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.get('', function (req, res) {
    res.sendFile('index.html');
});
app.listen(port);
