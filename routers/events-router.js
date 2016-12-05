/* globals module require */

const express = require('express');
let Router = express.Router;

module.exports = function({ app, controllers }) {
    let controller = controllers.events;

    let router = new Router();

    router
        .get('/', controller.getAllEvents)
        .get('/create', controller.getAddEvent)
        .get('/search', controller.filterEvents)
        .post('/create', controller.createEvent)
        .post('/join', controller.assignUserToEvent)
        .get('/:name', controller.getEventDetails);

    app.use('/events', router);

    return router;
};