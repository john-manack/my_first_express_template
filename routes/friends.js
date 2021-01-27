'use strict';

const express = require("express"),
    router = express.Router();

const friendsArray = require('../db');

router.get('/', (req, res) => {
    res.render('friends', {
        locals: {
            friends: friendsArray
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
        res.render('friend', {
            locals: {
                friend: friend // the 2nd friend (to the right of the colon), equals the variable we defined on line 14
            }
        });
    } else {
        res.send(`No friends with tag ${handle}`)
    }
})

module.exports = router;