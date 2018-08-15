let express = require('express');
let app = express();
let data = require('./data/data.json');

app.set('view engine', 'ejs');
app.set('appData', data);

app.use(express.static('public'));


app.get('/', (req, res) =>{
    res.render('layout',{
        pageTitle: 'Digital Crafts',
        pageID: 'Home',
        puppies: data.puppies
    })
});

app.get('/index', (req, res) =>{
    res.render('index',{
        
    })
});

app.get('/puppies', (req, res) =>{
    res.render('index',{
        
    })
});


app.use(require('./routes/index'));
app.use(require('./routes/puppies'));




app.listen(9000, () =>{
    console.log('listening port 9000');
});