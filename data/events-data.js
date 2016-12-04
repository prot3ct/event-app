/* globals module require Promise */

const dataUtils = require("./utils/data-utils"),
    mapper = require("../utils/mapper");

module.exports = function(models) {
    let {
        Location,
        Event
    } = models;

    return {
        createEvent(name, description, eventDate, imageUrl, locationName, organiser) {
            let location;
            return dataUtils.loadOrCreateLocation(Location, locationName)
                .then(dbLocation => {
                    location = dbLocation;

                    newEvent = new Event({
                        name,
                        description,
                        eventDate,
                        imageUrl,
                        location: mapper.map(location, "_id", "name"),
                        participants: [],
                        sponsors: [],
                        comments: [],
                        organiser: mapper.map(organiser, "_id", "username")
                    });

                    return dataUtils.save(newEvent);
                })
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
        }
    };
};
