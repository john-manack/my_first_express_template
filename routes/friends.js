'use strict';

const express = require("express"),
    router = express.Router();

const friendsArray = require('../db');

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            friends: friendsArray
        },
        partials: {
            body: "partials/friend-list"
        }
    });
});

router.get('/:handle', (req, res) => {
    const { handle } = req.params; // this is called DESTRUCTURING
    const friend = friendsArray.find((friend) => {
        if (friend.handle === handle) {
            return friend;
        }
    });
    if (friend) {
        res.render('template', {
            locals: {
                friend: friend // the 2nd friend (to the right of the colon), equals the variable we defined on line 14
            },
            partials: {
                body: "partials/friend-details"
            }
        });
    } else {
        res.status(404).send(`No friends with tag ${handle}`)
    }
})

module.exports = router;