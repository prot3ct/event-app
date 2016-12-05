/* globals module require Promise */

const dataUtils = require('./utils/data-utils'),
    mapper = require('../utils/mapper');

module.exports = function(models) {
    let {
        Location,
        Event,
        User
    } = models;

    return {
        createEvent(name, description, eventDate, imageUrl, locationName, organiser) {
            let location;
            return dataUtils.loadOrCreateLocation(Location, locationName)
                .then(dbLocation => {
                    location = dbLocation;

                    let newEvent = new Event({
                        name,
                        description,
                        eventDate,
                        imageUrl,
                        location: mapper.map(location, '_id', 'name'),
                        participants: [],
                        sponsors: [],
                        comments: [],
                        organiser: mapper.map(organiser, '_id', 'username')
                    });

                    return dataUtils.save(newEvent);
                });
        },
        getNewestEvents(count) {
            return new Promise((resolve, reject) => {
                Event.find({})
                    .sort({ createdAt: -1 })
                    .limit(count)
                    .exec((err, events) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(events);
                    });
            });
        },
        getMostPopularEvents(count) {
            return new Promise((resolve, reject) => {
                Event.find({})
                    .sort({ 'participants.length': -1 })
                    .limit(count)
                    .exec((err, events) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(events);
                    });
            });
        },
        getAllEvents() {
            return new Promise((resolve, reject) => {
                Event.find({})
                    .exec((err, events) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(events);
                    });
            });
        },
        getEventDetails(name) {
            return new Promise((resolve, reject) => {
                Event.find({ name })
                    .exec((err, event) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(event[0]);
                    });
            });
        },
        filterEvents(pattern) {
            return new Promise((resolve, reject) => {
                Event.find({})
                    .where(ev => {
                        ev.name.indexOf(pattern) > 0;
                    })
                    .exec((err, events) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(events);
                    });
            });
        },
        assignUserToEvent(userName, eventName) {
            return new Promise((resolve, reject) => {
                Event.findOne({ name: eventName }, (err, event) => {
                    if (err) {
                        return reject(err);
                    }

                    return dataUtils.loadUser(User, userName)
                        .then(user => {
                            let userToPush = mapper.map(user, '_id', 'username');
                            event.participants.push(userToPush);
                            dataUtils.save(event);
                            return resolve(event);
                        });
                });
            });
        }
    };
};