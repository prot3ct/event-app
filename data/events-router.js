/* globals module require */

const express = require('express');
let Router = express.Router;

module.exports = function({ app, controllers }) {
    let controller = controllers.superheroes;

    let router = new Router();

    router
        .get('/list', controller.getNewestSuperheroesAjax)

    app.use('/events', router);

    return router;
};