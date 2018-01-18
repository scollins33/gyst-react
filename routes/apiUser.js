const express = require('express');
const mongoose = require('mongoose');

// require models for the DB
const db = require("../models");

const router = express.Router();

/*
    ROUTES
 */

// POST a new User
router.post('/addUser', (req, res) => {
    console.log(`Got a request to add:`);
    console.log(req.body);

    db.User
        .create(req.body)
        .then(() => {
            console.log(`Created entry for ${req.body.name}`);
            res.status(200).send('Created');
        })
        .catch(err => res.json(err));
});

// GET all users
// used for testing
router.get('/getUsers', (req, res) => {
    db.User
        .find({})
        .then((data) => res.status(200).send(data))
        .catch(err => res.json(err));
});



module.exports = router;