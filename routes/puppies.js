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
            <p>${item.description}</p>
        </li>
        `;

    })
    

    res.send(`
    <h1>Puppies</h1>
    <ul>
        ${myHTML}
    </ul>
    <link rel='stylesheet' href='./styles/style.css'>
    `)

})

router.get('/puppies/:puppyID', (req, res) => {

    let dataFile = req.app.get("appData");
    let myHTML;

    let puppy = dataFile.puppies[req.params.puppyID];

    res.send(`
    
        <h2>${puppy.name}</h2>
        <img src="/images/puppies/${puppy.shortname}_tn.jpeg" alt="">
        <p>${puppy.description}</p>
    `)

    

})











module.exports = router;

//for each not working