const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    create,
    new: newFlight,
    show,
    update, 
    newTicket,
    createTicket,
    deleteTicket
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
        res.redirect('/flights');
    });
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add a New Flight' });

}
function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
    console.log(flight);


    Ticket.find({flight: flight._id}, function(err, tickets) { 
            
        res.render('flights/show', {
            title: 'Flight Details',
            flight,
            tickets
        });

    }); 


    });
}

function update(req, res) {
    // console.table(req.body)

    Flight.findById(req.params.id, function (err, flight) {

        // console.log(flight)
        if (req.body['arrival-date'] && req.body['arrival-time'] && req.body['airport']) {
            let arrival = new Date(req.body['arrival-date'] + 'T' + req.body['arrival-time']);
            // req.body['destinations.arrival'] = arrival;

            updatedFlight = new Flight(flight);
            updatedFlight.destinations.push({
                arrival,
                airport: req.body.airport 
            })

            updatedFlight.save(function (err, flight) {

                if (err) {
                    res.send(err);
                } 
                else {
                    res.redirect(`${flight._id}`);
                }
            });
        }



    });
}

function newTicket(req, res){
    res.render('tickets/new', { 
        title: 'Add a New Ticket',
        flight: req.params.id
     });
}

function createTicket(req, res) {

    req.body['flight'] = req.params.id;

    let ticket = new Ticket(req.body);
    ticket.save(function (err) {
        res.redirect(`/flights/${req.params.id}`);
    });

}
function deleteTicket(req, res) {

    Ticket.deleteOne({_id: req.params.idt}, function (err, flight) {
        res.redirect(`/flights/${req.params.id}`)
    })

}