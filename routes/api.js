const express = require('express');

// require models for the DB
const db = require("../models");

const router = express.Router();

/*
    ROUTES
 */

//////////////////////////////////USER API/////////////////////////////////

// POST a new User
router.post('/addUser', function(req, res) {
    console.log(`Got a request to add:`);
    console.log(req.body);

    db.User
        .create(req.body)
        .then(() => {
            console.log(`Created entry for ${req.body}`);
            res.status(200).send('Created');
        })
        .catch(err => res.json(err));
});

// GET all users
// used for testing
router.get('/getUsers', (req, res) => {
    db.User
        .find({})
        .then((user) => res.status(200).send(user))
        .catch(err => res.json(err));
});

//////////////////////////////////EVENT API/////////////////////////////////
// POST a new event
router.post('/addEvent', (req, res) => {
    console.log(`Got a request to add an event:`);
    let newEvent = req.body;
    // newEvent.startTime = moment(req.body.startTime).format("LT");
    // newEvent.endTime = moment(req.body.endTime).format("LT");
    console.log(newEvent);
    db.Event
        .create(newEvent)
        .then(() => {
            console.log(`Created event for ${newEvent.name}`);
            res.status(200).send('Created');
        })
        .catch(err => res.json(err));
});

// GET all events
// used for testing
router.get('/getEvents', (req, res) => {

    db.Event
        .find({})
        .then((data) => res.status(200).send(data))
        .catch(err => res.status(422).json(err));
});


// GET events by user
router.get('/getEvents/:userId', (req, res) => {

    db.User
        .find({_id: req.params.userId})
        .populate('events')
        .then((data) => res.status(200).send(data))
        .catch(err => res.status(422).json(err));
});

// GET events by user and class
router.get('/getEvents/byClass/:userId', (req, res) => {
    const classType= "work";
    db.User
        .find({_id: req.params.userId, class: classType})
        .populate('events')
        .then((data) => res.status(200).send(data))
        .catch(err => res.status(422).json(err));
});

// UPDATE an event
router.post('/updateEvent/:eventId', (req, res) => {
    console.log(req.params.eventId);
    db.Event
        .findOneAndUpdate(
            {_id: req.params.eventId},
            {
                $set: {
                    name: req.body.name,
                    startTime: req.body.startTime,
                    endTime: req.body.endTime,
                    class: req.body.class,
                    repeat: req.body.repeat
                }
            })
        .then((data) => res.status(200).send(data))
        .catch(err => res.status(422).json(err));
});

//DELETE an event
router.post('/getEvents/remove/:userId', (req, res) => {

    db.User
        .findOneAndRemove({_id: req.params.userId})
        .then((data) => res.status(200).send(data))
        .catch(err => res.status(422).json(err));
});

//DELETE an event by querying the id
router.post('/deleteEvent/:eventId?', (req, res) => {
    console.log("Deleting event #: ");
    console.log(req.params.eventId);
    db.Event
        .findOneAndRemove({_id: req.params.eventId})
        .then(data => res.status(200).send(data))
        .catch(err => res.status(422).json(err));
});
module.exports = router;