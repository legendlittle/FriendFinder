var data = require('../data/friends.js')
module.exports = function apiRoute(app) {
  app.get('/api/friends', function (req, res) {

    return res.json(data)
  })
  app.post('/api/friends', function (req, res) {
    newData = req.body;
    console.log(newData)
    data.push(newData);
    
    //This section is to compare the scores of the user's scores to the other scores in the database and determine the index of the friend they are closest to
    var isFirst = true;
    if(data.length > 1){
      isFirst = false;
      var diff = newData.scores
      var closest = 40;
      var index = 0;
      for (var i = 0; i < data.length -1; i++) {
        var friend = data[i].scores
        var close = 0;
        for(var j = 0; j < 10; j++){
          close += Math.abs(diff[j] - friend[j]);
        }
        if(close < closest){
          closest = close;
          index = i;
        }
      }
      console.log(closest, close, index)
      console.log(data[index]);
      //We will return the information of the friend who turned out to have the closest scores
      return res.json(data[index]);
    }
      


  })
}