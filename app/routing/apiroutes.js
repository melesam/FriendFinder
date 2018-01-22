
var path = require('path');
var Friends = require('../data/friends.js');


module.exports = function(app) {
// should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
app.get('/api/friends', function(req, res) {
	res.json(Friends);
});

// A POST routes /api/friends. This will be used to handle incoming survey results. 
app.post('/api/friends', function(req, res) {

})
// This route will also be used to handle the compatibility logic.

}