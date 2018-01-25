const express = require('express');
const mongoose = require('mongoose');

// require models for the DB
const db = require("../models");

const router = express.Router();

/* ------------------------------------
       API Routes for All Pages
------------------------------------ */

/* ------------------------------------
            User APIs
------------------------------------ */
// POST a new User
router.post('/addUser', (req, res) => {
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


/* ------------------------------------
            Event APIs
------------------------------------ */

// POST a new event
router.post('/addEvent', (req, res) => {
    console.log(`Got a request to add an event:`);
    console.log(req.body);

    db.Event
        .create(req.body)
        .then(() => {
            console.log(`Created event for ${req.body.name}`);
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
        .catch(err => res.json(err));
});


//Get events by user
router.get('/getEvents/:userId', (req, res) => {

    db.User
        .find({_id: req.params.userId})
        .populate('events')
        .then((data) => res.status(200).send(data))
        .catch(err => res.json(err));
});

//Get events by user and class
router.get('/getEvents/byClass/:userId', (req, res) => {
    const classType= "work";
    db.User
        .find({_id: req.params.userId, class: classType})
        .populate('events')
        .then((data) => res.status(200).send(data))
        .catch(err => res.json(err));
});
//Update an event

//Delete an event


/* ------------------------------------
            SOCIAL APIs
------------------------------------ */

// GET User Contacts
// populated with Interactions
router.get('/getContactsPopulated/:userId', (req, res) => {
    db.User
        .find({_id: req.params.userId})
        .populate('contacts')
        .then((data) => res.status(200).send(data))
        .catch(err => res.json(err));
});

router.post('/addContact', (req, res) => {
    console.log(`Got a request to add an event:`);
    console.log(req.body);

    db.Event
        .create(req.body)
        .then(() => {
            console.log(`Created event for ${req.body.name}`);
            res.status(200).send('Created');
        })
        .catch(err => res.json(err));
});


module.exports = router;