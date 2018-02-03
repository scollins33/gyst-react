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
    console.log(req.body);
    db.Event
        .findOneAndUpdate(
            {_id: req.params.eventId},
            {
                $set: {
                    name: req.body.name,
                    startTime: req.body.startTime,
                    endTime: req.body.endTime,
                    class: req.body.class,
                    repeat: req.body.repeat,
                    notes: req.body.notes
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
//Delete an event


/* ------------------------------------
            SOCIAL APIs
------------------------------------ */

// GET User's Social info
// populated with Contacts and Interactions
router.get('/getUserSocial/:userId', (req, res) => {

    db.User
        .findOne({_id: req.params.userId})
        .populate({
            path: 'contacts',
            populate: { path: 'interactions'}
        })
        .then((data) => res.status(200).send(data))
        .catch(err => res.status(500).json(err));
});

// POST to set Favorite status in DB
router.post('/setFavorite', (req, res) => {

    db.Contact
        .findOneAndUpdate(
            {_id: req.body.contact},
            {$set: { favorite: req.body.favorite }})
        .then(() => {
            res.status(200).send('Updated Favorite status');
        })
        .catch(err => res.status(500).json(err));
});

// DELETE to remove Interaction from DB
router.delete('/deleteInteraction', (req, res) => {

    // Step 1
    // pull the interaction from the Contact array
    db.Contact
        .findOneAndUpdate(
            {_id: req.body.contact},
            {$pull: {interactions: req.body.interaction}})
        .catch(err => res.status(500).json(err));

    // Step 2
    // remove the Interaction from the DB
    db.Interaction
        .remove({_id: req.body.interaction})
        .then(() => {
            res.status(200).send('Removed Interaction');
        })
        .catch(err => res.status(500).json(err));
});

// DELETE to remove Contact from User in DB
router.delete('/deleteContact', (req, res) => {

    // Step 1
    // pull the Contact from the User array
    db.User
        .findOneAndUpdate(
            {_id: req.body.user},
            {$pull: {contacts: req.body.contact}})
        .then(() => {

            // Step 2
            // remove all ref'd Interactions
            db.Contact
                .findOne({_id: req.body.contact})
                .then((contact) => {
                    // loop through interactions and remove them
                    contact.interactions.map((each) => {
                        db.Interaction
                            .remove({_id: each})
                            .catch(err => res.status(500).json(err));
                    });
                })
                .then(() => {

                    // Step 3
                    // remove Contact entry in DB
                    db.Contact
                        .remove({_id: req.body.contact})
                        .then(() => {
                            res.status(200).send('Removed Contact and supporting Interactions');
                        })
                        .catch(err => res.status(500).json(err));

                })
                .catch(err => res.status(500).json(err));

        })
        .catch(err => res.status(500).json(err));
});



/* ------------------------------------
            FINANCE APIs
------------------------------------ */


// POST new finances
router.post('/addFinances', (req, res) => {
    console.log(`Got a request to add new finances:`);
    let newFinances = req.body;
    console.log(newFinances);
    db.Finances
        .create(newFinances)
        .then(() => {
            console.log(`Created finances for ${newFinances.name}`);
            res.status(200).send('Created');
        })
        .catch(err => res.json(err));
});

// GET finances by user
router.get('/getFinances/:userId', (req, res) => {

    db.Finances
        .find({_id: req.params.userId})
        .populate('finances')
        .then((data) => res.status(200).send(data))
        .catch(err => res.status(422).json(err));
});


// UPDATE finances
router.post('/updateFinances/:financesId', (req, res) => {
    console.log(req.params.financesId);
    db.Finances
        .findOneAndUpdate(
            {_id: req.params.financesId},
            {
                $set: {
                    name: req.body.rent,
                    utilities: req.body.utilities,
                    transportation: req.body.transportation,

                }
            })
        .then((data) => res.status(200).send(data))
        .catch(err => res.status(422).json(err));
});


/*---------------*/

// Helper to DRY up Contact Update
function updateHelper (contactID, interactArray, pRes) {
    interactArray.map((each) => {
        if (each._id === null) {
            db.Interaction
                .create({
                    contact: contactID,
                    date: each.date,
                    method: each.method,
                    note: each.note,
                })
                .then((newInteract) => {
                    db.Contact.findOneAndUpdate(
                        {_id: newInteract.contact},
                        {$push: {interactions: newInteract._id}})
                        .catch(err => pRes.status(500).send(err));
                })
                .catch(err => pRes.status(500).send(err));

        } else {

            db.Interaction
                .findOneAndUpdate(
                    { _id: each._id},
                    {
                        date: each.date,
                        method: each.method,
                        note: each.note,
                    })
                .catch(err => pRes.status(500).send(err));
        }
    });
}

// POST to create or update a contact
router.post('/updateContact', (req, res) => {

    if (req.body.id === null) {

        db.Contact
            .create({
                user: req.body.user,
                name: req.body.name,
                favorite: false,
                relation: req.body.relation,
                birthday: req.body.birthday,
                methods: req.body.methods,
            })
            .then((newContact) => {

                db.User.findOneAndUpdate(
                    {_id: req.body.user},
                    {$push: {contacts: newContact._id}})
                    .catch(err => console.log(err));

                // use update helper to handle Interaction update/creation
                updateHelper(newContact._id, req.body.interactions, res);

            })
            // putting res send in separate "then" due to Map promises and async issues
            .then(() => res.status(200).send('Contact created / updated'))
            .catch(err => res.status(500).send(err));

    } else {

        db.Contact
            .findOneAndUpdate(
                { _id: req.body.id},
                {
                    user: req.body.user,
                    name: req.body.name,
                    relation: req.body.relation,
                    birthday: req.body.birthday,
                    methods: req.body.methods,
                })
            .then(() => {
                // use update helper to handle Interaction update/creation
                updateHelper(req.body.id, req.body.interactions, res);
            })
            // putting res send in separate "then" due to Map promises and async issues
            .then(() => res.status(200).send('Contact created / updated'))
            .catch(err => console.log(err));
    }

});



module.exports = router;