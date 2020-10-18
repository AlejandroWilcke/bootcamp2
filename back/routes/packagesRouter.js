const pgPool        = require('../dbs/postgres.js');
const express       = require('express');
const router        = express.Router();
const bodyParser    = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/', function(req, res) {

    const query = 
    `
        INSERT INTO packages(description, type, id_passenger)
        VALUES('${req.body.desc}', '${req.body.type}', '${req.body.id_passenger}');
    `;

    pgPool.query(query, (err, result) => {
        if(result){
            res.send(true);
        }else{
            console.log(err)
        }
    });

});

module.exports = router;