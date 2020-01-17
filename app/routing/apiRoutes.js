var data = require('../data/friends.js')
module.exports = function apiRoute(app) {
    app.get('/api/friends', function(req,res){
      
      return res.json(data)
    })
    app.post('/api/friends', function (req,res){
        newData = req.body;
        
        data.push(newData);
        res.json(newData);
        
        
    })
}