var express = require('express');
var router = express.Router();
const Trip = require('../models/trips');

/* GET trips. */
// router.get('/search', function(req, res, next) {
//   res.render('trips', { title: 'Express' });
// });

router.get('/search', (req, res) => {
    const { departure, arrival, date } = req.query;
    
    const searchQuery = {
        ...(departure && { departure }),
        ...(arrival && { arrival }),
        ...(date && { date }),
    };

    Trip.find(searchQuery)
    .then(trips => {
        res.json(trips);
    }).catch(() => {
        res.status(500).json({ error: 'Erreur lors de la recherche des trajets'});
    });
})

module.exports = router;


