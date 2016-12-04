/* globals module require */

const express = require("express");
let Router = express.Router;

module.exports = function({ app, controllers }) {
    let controller = controllers.events;

    let router = new Router();

    router
        .get("/events", controller.getAddEvent)
        .post("/events", controller.createEvent);

    app.use("/", router);

    return router;
};
