import { Flight } from "../models/flight.js"

function index(req, res){
    Flight.find({})
    .then(flights => {
        res.render("flights/index", {
            flights: flights,
            title: "All Flights"
        })
    })
}

function newFlight(req, res){
    res.render('flights/new', {
        title: "Add Flight"
    })
}

export{
    newFlight as new,
    index
}