import { Flight } from "../models/flight.js"

function index(req, res){
    Flight.find({})
    .then(flights => {
        res.render("flights/index", {
            flights: flights,
            title: "All Flights"
        })
    })
    .catch(err => {
        console.log(error)
        res.redirect('/')
    })
}

function newFlight(req, res){
    res.render('flights/new', {
        title: "Add Flight"
    })
    .catch(err => {
        console.log(err)
        res.redirect('/')
    })
}

function create(req, res){
    Flight.create(req.body)
    .then(flight => {
        res.redirect(`/flights`)
    })
    .catch(err => {
        console.log(err)
        res.redirect('/')
    })
}

function deleteFlight(req, res){
    Flight.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect('/flights')
    })
    .catch(err => {
        console.log(err)
        res.redirect('/')
    })
}

function show(req, res){
    Flight.findById(req.params.id)
    .then(flight => {
        console.log(flight)
        res.render('flights/show', {
            title: "Flight Details",
            flight: flight
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/')
    })
}

function edit(req, res){
    Flight.findById(req.params.id)
    .then(flight => {
        res.render('flights/edit', {
            flight: flight,
            title: "Edit Flight"
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/')
    })
}

function update(req, res){
    Flight.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(flight => {
        res.redirect(`/flights/${flight._id}`)
    })
    .catch(err => {
        console.log(err)
        res.redirect('/')
    })
}

function createTicket(req, res){
    Flight.findById(req.params.id)
    .then(flight => {
        flight.tickets.push(req.body)
        flight.save()
        .then(() => {
            res.redirect(`/flights/${flight._id}`)
        })
    })
}

export{
    newFlight as new,
    index,
    create,
    deleteFlight as delete,
    show,
    edit,
    update,
    createTicket
}