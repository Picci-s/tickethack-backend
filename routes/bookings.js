var express = require('express');
const moment = require('moment');
var router = express.Router();
const Trip = require('../models/trips');

router.delete('/deleteTrips/:id', (req, res) => {
    const tripsId = req.params.id;

    Trip.deleteOne({_id: tripsId})
    .then((result) => {
        if(result.deletedCount === 0) {
            return res.status(404).json({ message: 'Trajet non trouvé' });
        }
        res.json({ message: 'Trajet supprimé avec succes !'})
    })
    .catch((error) => {
        console.error('Erreur lors de la suppression du trajet:', error);
        res.status(500).json({ error: 'Impossible de supprimer le trajet' });
    });

})

module.exports = router;