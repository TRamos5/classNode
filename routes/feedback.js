var express = require('exrpess');
var route = express.Route();

router.get('', function(req, res){
    res.render('feedback', {
        pageTitle: 'feedback',
        pageID: 'feedback'
    })
})


module.exports = route;