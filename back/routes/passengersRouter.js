const pgPool        = require('../dbs/postgres.js');
const express       = require('express');
const router        = express.Router();
const bodyParser    = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

router.use(bodyParser.json());

router.get('/', function(req, res) {
    /* 
        No supe como resolver esto rápido... agrupé en un nuevo campo (as packages), de tipo array, con todos los packages relacionados al pasajero.
        Originalmente, si no encontraba ni un solo package ( pass.id = pack.id_passenger ), no traía usuarios SIN packages. Como mi intención era
        ver a todos los usuarios, indiferentemente de cuantos packages relacionados tenga, tuve que rebuscarmelas para que los traiga de todos modos.
    */
    const query = 
    `
        SELECT 
            pass.id, 
            pass.name, 
            pass.lastname, 
            pass.flightnumber,
            jsonb_agg(jsonb_build_object('id', pack.id, 'description', pack.description, 'type', pack.type)) as packages
        FROM 
            passengers pass
        LEFT JOIN 
            packages pack
        ON 
            pass.id = pack.id_passenger
        GROUP BY 
            pass.id;
    `;
    pgPool.query(query, (err, result) => {
        if(result){
            res.send(result.rows);
        }else{
            console.log(err)
        }
    });
});

router.post('/', function(req, res) {

    const query = 
    `
        INSERT INTO passengers(name, lastname, flightnumber) 
        VALUES('${req.body.name}', '${req.body.lastname}', '${req.body.flightNumber}');
    `;

    pgPool.query(query, (err, result) => {
        if(result){
            res.send(true);
        }else{
            console.log(err)
        }
    });

});

router.delete('/:passengerId', function(req, res) {
    const query =
    `
        DELETE FROM 
            packages
        WHERE
            id_passenger = ${req.params.passengerId};
    `

    pgPool.query(query, (err, result) => {
        if(result){
            res.send(true);
        }else{
            console.log(err)
        }
    });
});

module.exports = router;