/* globals module require */

const express = require("express");
let Router = express.Router;

module.exports = function({ app, controllers }) {
    let controller = controllers.events;

    let router = new Router();

    router
        .get('/', controller.getAllEvents)
        .get('/create', controller.getAddEvent)
        .post('/create', controller.createEvent);

    app.use('/events', router);

    return router;
};
