var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');

//feedback.json doesn't exist yet, for class presentation
var data = require('../data/feedback.json');

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
router.use(bodyParser.json());

router.get('/api', (req, res) =>{
    res.json(data);
});

router.post('/api', function(req, res){
    data.unshift(req.body);

    fs.writeFile('data/feedback.json', JSON.stringify(data), 'utf8',
    function(err){
        if(err){
            console.log(err);
        }
    });
    res.json(data);
});

router.delete('/api/:id', function(req, res){
    data.splice(req.params.id, 1);

    fs.writeFile('data/feedback.json', JSON.stringify(data), 'utf8',
    function(err){
        if(err){
            console.log(err);
        }
    })
    
    res.json(data);
})


module.exports = router;