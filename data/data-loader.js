/* globals require module __dirname global */

const mongoose = require("mongoose");

const fs = require("fs"),
    path = require("path");

// mongoose.Promise = global.Promise;

module.exports = function(connectionString) {
    mongoose.connect(connectionString);
    mongoose.Promise = global.Promise;

    let Comment = require("../models/comment-model.js");
    let Event = require("../models/event-model.js");
    let Sponsor = require("../models/sponsor-model.js");
    let Location = require("../models/location-model.js");
    let User = require("../models/user-model.js");

    let models = { User, Event, Comment, Sponsor, Location };

    let data = {};

    fs.readdirSync(__dirname)
        .filter(file => file.includes("-data"))
        .forEach(file => {
            let modulePath = path.join(__dirname, file);
            let dataModule = require(modulePath)(models);
            Object.keys(dataModule)
                .forEach(key => {
                    data[key] = dataModule[key];
                });
        });
    return data;
};
