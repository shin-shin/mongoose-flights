const Flight = require('../models/flight');

module.exports = {
    index,
    create,
    new: newFlight,
    show
}

function index(req, res) {
    Flight.find({}, function (err, flights) {
        res.render('flights/index', { flights, title: 'List of Flights' })
    })
}

function create(req, res) {
    let departs = new Date(req.body['departs-date'] + 'T' + req.body['departs-time']);
    req.body['departs'] = departs;

    let flight = new Flight(req.body);
    flight.save(function (err) {
        console.log(flight);
        res.redirect('/flights');
    });

}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add a New Flight' });

}
function show(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        res.render('flights/show', {title: 'Flight Details', flight});
    });

}