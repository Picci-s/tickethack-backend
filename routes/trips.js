var express = require('express');
const moment = require('moment');
var router = express.Router();
const Trip = require('../models/trips');

/* GET trips. */
// router.get('/search', function(req, res, next) {
//   res.render('trips', { title: 'Express' });
// });

router.post('/generatetrips', (req, res) => {
    const { departure, arrival, date } = req.body;

    if (!departure || !arrival || !date) {
        return res.status(400).json({ error: 'Tous les champs sont obligatoires' });
    }

    const startDate = moment(date).startOf('day').toISOString();
    const endDate = moment(date).endOf('day').toISOString();

    const query = {
        departure: { $regex: new RegExp(departure, 'i') },
        arrival: { $regex: new RegExp(arrival, 'i') },
        date: { $gte: startDate, $lt: endDate }
    };

    Trip.find(query)
    .then((trips) => {
        res.json({ trips });
    })
    .catch((error) => {
        console.error('Erreur lors de la récupération des voyages:', error);
        res.status(500).json({ error: 'Impossible de récupérer les voyages' });
    });
});




module.exports = router;


