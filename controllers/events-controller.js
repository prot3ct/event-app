/* globals module console */

const url = require('url');

module.exports = function({ data }) {
    return {
        name: 'events',
        getAddEvent(req, res) {
            if (!req.isAuthenticated()) {
                return res.redirect('/auth/sign-in');
            }

            return res.render('../views/events/create');
        },
        createEvent(req, res) {
            let { name, description, imageUrl, locationName } = req.body;
            return data.createEvent(
                    name,
                    description,
                    new Date(),
                    imageUrl,
                    locationName,
                    req.user)
                .then(() => {
                    return res.redirect('/');
                })
                .catch(err => {
                    console.log(err);
                    res.status(400)
                        .send(err);
                });
        },
        getAllEvents(req, res) {
            data.getAllEvents()
                .then(events => {
                    return res.render('../views/events/all-events', { result: { events } });
                });
        },
        getEventDetails(req, res) {
            let name = req.params.name;
            data.getEventDetails(name)
                .then(event => {
                    return res.render('../views/events/event-details', event);
                });
        },
        assignUserToEvent(req, res) {
            let user = req.user.username;
            let { eventName } = req.body;

            data.assignUserToEvent(user, eventName)
                .then(() => {
                    return res.json(user);
                }
            );
        },
        filterEvents(req, res) {
            let query = url.parse(req.url, true).query;

            data.filterEvents(query.pattern)
                .then(events => {
                    return res.render('../views/_layout.pug', { result: { events } });
                });
        }
    };
};