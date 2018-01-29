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


// GET events by user
router.get('/getEvents/:userId', (req, res) => {

    db.User
        .find({_id: req.params.userId})
        .populate('events')
        .then((data) => res.status(200).send(data))
        .catch(err => res.json(err));
});

// GET events by user and class
router.get('/getEvents/byClass/:userId', (req, res) => {
    const classType= "work";
    db.User
        .find({_id: req.params.userId, class: classType})
        .populate('events')
        .then((data) => res.status(200).send(data))
        .catch(err => res.json(err));
});

// UPDATE an event
router.get('/getEvents/:userId', (req, res) => {

    db.User
        .findOneAndUpdate(
            {_id: req.param.userId},
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
        .catch(err => res.json(err));
});

//DELETE an event
router.post('/getEvents/remove/:userId', (req, res) => {
    db.User
        .findOneAndRemove({_id: req.params.userId})
        .then((data) => res.status(200).send(data))
        .catch(err => res.json(err));
});
//Delete an event


/* ------------------------------------
            SOCIAL APIs
------------------------------------ */

// Create new Contact for User
router.post('/addContact', (req, res) => {
    console.log(`Got a request to add a Contact:`);
    console.log(req.body);

    db.Contact
        .create(req.body)
        .then((contact) => {
            console.log(`Created contact for User ${req.body.user}`);

            db.User.findOneAndUpdate(
                {_id: req.body.user},
                {$push: {contacts: contact._id}})
                .then(() => {
                    res.status(200).send('Created and updated User');
                })
                .catch(err => res.json(err));
        })
        .catch(err => res.json(err));
});

// Create new Interaction for Contact
router.post('/addInteraction', (req, res) => {
    console.log(`Got a request to add an Interaction:`);
    console.log(req.body);

    db.Interaction
        .create(req.body)
        .then((interact) => {
            console.log(`Created interaction for Contact ${req.body.contact}`);

            db.Contact.findOneAndUpdate(
                {_id: req.body.contact},
                {$push: {interactions: interact._id}})
                .then(() => {
                    res.status(200).send('Created Interaction and updated Contact');
                })
                .catch(err => res.json(err));
        })
        .catch(err => res.json(err));
});

// GET User's Social info
// populated with Contacts and Interactions
router.get('/getUserSocial/:userId', (req, res) => {
    console.log(`Trying to fetch User Social for ${req.params.userId}`);

    db.User
        .findOne({_id: req.params.userId})
        .populate({
            path: 'contacts',
            populate: { path: 'interactions'}
        })
        .then((data) => res.status(200).send(data))
        .catch(err => res.json(err));
});

// POST updated Contact to User
router.post('/updateContact', (req, res) => {
    console.log('updating contact');
});

// POST to set Favorite status in DB
router.post('/setFavorite', (req, res) => {
    console.log('Trying to set Favorite status');

    db.Contact
        .findOneAndUpdate(
            {_id: req.body.contact},
            {$set: { favorite: req.body.favorite }})
        .then(() => {
            res.status(200).send('Updated Favorite status');
        })
        .catch(err => res.json(err));
});

// DELETE to remove Interaction from DB
router.delete('/deleteInteraction', (req, res) => {
    console.log('Trying to delete Interaction');

    db.Contact
        .update(
            {_id: req.body.contact},
            {$pull: { "interactions": {_id: req.body.interaction}}})
        .then(() => {
            db.Interaction
                .remove({_id: req.body.interaction})
                .then(() => {
                    res.status(200).send('Removed Interaction');
                })
                .catch(err => res.json(err));
        })
        .catch(err => res.json(err));
});

module.exports = router;