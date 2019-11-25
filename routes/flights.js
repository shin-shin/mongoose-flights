const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights')

/* GET /flights... listing. */
router.get('/:id/tickets/new', flightsCtrl.newTicket);
router.post('/:id/tickets/', flightsCtrl.createTicket);
router.delete('/:id/tickets/:idt', flightsCtrl.deleteTicket);

router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
router.post('/:id', flightsCtrl.update)
router.post('/', flightsCtrl.create)

module.exports = router;
