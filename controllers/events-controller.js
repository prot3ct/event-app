/* globals module console */

const mapper = require("../utils/mapper");

module.exports = function({ data }) {
    return {
        name: "events",
        getAddEvent(req, res) {
            if (!req.isAuthenticated()) {
                return res.redirect('/auth/sign-in');
            }

            return res.render("../views/events/create");
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
                .then(event => {
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
                    return res.render('../views/home/home.pug', events);
                });
        }
    };
};
