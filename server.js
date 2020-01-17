var express = require('express');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 8080;
var htmlRoute = require('./app/routing/htmlRoutes');
var apiRoute = require('./app/routing/apiRoutes');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

htmlRoute(app, path);
apiRoute(app);

app.listen(PORT, function () {
    console.log("App listening on http://localhost:" + PORT);
})