/* globals module require */

const express = require('express');
let Router = express.Router;

module.exports = function({ app, controllers }) {
    let controller = controllers.users;

    let router = new Router();

    router
        .get('/:username', controller.getUserByName);

    app.use('/users', router);

    return router;
};