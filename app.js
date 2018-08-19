let express = require('express');
let app = express();
let data = require('./data/data.json');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('view engine', 'ejs');
app.set('appData', data);

app.use(express.static('public'));


app.get('/', (req, res) =>{

    let puppyArray = [];

    data.puppies.forEach(function(puppy){
        puppyArray = puppyArray.concat(puppy.imgURL)
    })

    console.log("puppy array" + puppyArray);

    res.render('layout',{
        pageTitle: 'Digital Crafts',
        pageID: 'Home',
        golden: data.puppies[0].imgURL[0],
        siberian: data.puppies[1].imgURL[0],
        german: data.puppies[2].imgURL[0],
        allPhoto: puppyArray
    })
});

app.get('/dogs/:id', (req, res) =>{
    res.render('layout',{
        pageTitle: 'Digital Crafts',
        pageID: 'Home',
        puppies: data.puppies[0].imgURL[0],
        dog: data.puppies[req.params.id].imgURL[1]
    })
});

app.get('/golden', (req, res) =>{
    res.render('golden',{
        pageTitle: 'Golden Retriever',
        golden: data.puppies[0].imgURL[0],
        summary: data.puppies[0].summary
    })
});

app.get('/siberian', (req, res) =>{
    res.render('siberian',{
        pageTitle: 'Siberian Husky',
        siberian: data.puppies[1].imgURL[0],
        summary: data.puppies[1].summary
    })
});

app.get('/german', (req, res) =>{
    res.render('german',{
        pageTitle: 'German Shepherd',
        german: data.puppies[2].imgURL[0],
        summary: data.puppies[2].summary
    })
});




app.get('/puppies', (req, res) =>{
    res.render('index',{
        
    })
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
  });
  


app.use(require('./routes/index'));
app.use(require('./routes/puppies'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
app.use(require('./routes/chat'));





http.listen(9000, () =>{
    console.log('listening port 9000');
});