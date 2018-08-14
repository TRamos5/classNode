let express = require('express');
let router = express.Router();


router.get('/puppies', (req, res) => {

    let dataFile = req.app.get("appData");
    let myHTML;


    dataFile.puppies.forEach(function(item){
        myHTML += `
        <li>
            <h2>${item.name}</h2>
            <img src="/images/puppies/${item.shortname}_tn.jpeg" alt="">
            <p>${item.summary}</p>
        </li>
        `;

    })
    

    res.send(`
    <h1>Puppies</h1>
    <ul>
        ${myHTML}
    </ul>
    `)

})











module.exports = router;

//for each not working