module.exports = function htmlRoute(app, path) {
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    })
    
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
    app.get('/:whatever', function (req, res) {
    
        res.sendFile(path.join(__dirname, "../public/home.html"));
    
    })
}

