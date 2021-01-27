'use strict';

const express = require("express"),
    router = express.Router();

const friendsArray = require('../db')

// When you're in a route file, the ROOT points to itself. That's why we use a '/' below instead of '/friends'.
router.get('/', (req, res) => {
    let htmlData = `<ul>`;
    friendsArray.map((friend) => {
        htmlData += `<li><a href="./friends/${friend.handle}">${friend.name}</a></li>`
    })
    htmlData += `</ul> `;
    res.send(htmlData);
});

// The colon below in the first argument of the function denotes a parameter, and makes 'handle' available as a variable to call with 'req.params.handle'.
router.get('/:handle', (req, res) => {
    const { handle } = req.params;
    const friend = friendsArray.find((friend) => {
        if (friend.handle === handle) {
            return friend;
        }
    });
    if (friend) {
        res.send(`<h1>Hi ${friend.name}!</h1>`)
    } else {
        res.send(`No friend with the handle, ${handle}, was found :(`)
    }
})

module.exports = router;