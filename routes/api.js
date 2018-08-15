var express = require('exrpess');
var route = express.Route();

//feedback.json doesn't exist yet, for class presentation
var data = require('../data/feedback.json');

router.get('/api', (req, res) =>{
    res.json(data);
})


module.exports = route;