let express = require('express');
let app = express();
let data = require('./data/data.json');


app.set('appData', data);

app.use(express.static('public'));

app.use(require('./routes/index'));
app.use(require('./routes/puppies'))







app.listen(7000, () =>{
    console.log('listening port 7000');
})