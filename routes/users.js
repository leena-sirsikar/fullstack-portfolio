const express = require('express');
const bodyParser = require('body-parser');
const User = require('../models/user');

const router = express.Router();

router.use(bodyParser.json());

router.route('/')
    .get((req, res) => {
        console.log("Users # 2 - Entering GET of basic route");
        res.end('Will send all the users to you');
    })
    .post((req, res) => {
        console.log("Users # 3 - Entering POST of basic route");
        res.end(`Will add the user with "${req.body.email}" email address.}`);
    });

router.route('/:userId')
    .get((req, res, next) => {
        res.end(`Will send details of the user with "${req.params.userId}" to you`);
    })
    .post((req, res, next) => {
        res.end(`POST operation not supported on /user/${req.params.userId}`);
    });

module.exports = router;