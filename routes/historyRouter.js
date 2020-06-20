const express = require('express');
const bodyParser = require('body-parser');
const History = require('../models/history');

const historyRouter = express.Router();

historyRouter.use(bodyParser.json());

historyRouter.route('/')
    .get((req, res, next) => {
        History.find()
        .then(history => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(history);
        })
        .catch(err => next(err));
        // res.end('We will send you the complete history');
    })
    .post((req, res, next) => {
        console.log("POST body:", req.body);
        History.create(req.body)
        .then(history => {
            console.log('History created ', history);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(history);
        })
        .catch(err => next(err));
        // res.end('We will add these details to the history');
    });

// historyRouter.route('/:userId')
//     .get((req, res) => {
//         res.end(`We will send you the complete history for user with "${req.body.amt}" email address.`);
//     })
//     .post((req, res) => {
//         res.end(`We will add these details to the history for user with "${req.body.amt}" email address.`);
//     });

module.exports = historyRouter;