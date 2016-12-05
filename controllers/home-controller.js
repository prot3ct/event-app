/* globals module */

const mapper = require('../utils/mapper');

const MOST_POPULAR_EVENTS_COUNT = 3,
    NEWEST_EVENTS_COUNT = 3;

module.exports = function({ data }) {
    return {
        name: 'home',
        getNewestEventsAjax(req, res) {
            data.getNewestEvents(NEWEST_EVENTS_COUNT)
                .then(events => {
                    res.send({
                        result: events.map(event => mapper.map(event, '_id', 'name', 'description', 'eventDate', 'imageUrl'))
                    });
                });
        },
        getMostPopularEventsAjax(req, res) {
            data.getMostPopularEvents(MOST_POPULAR_EVENTS_COUNT)
                .then(events => {
                    res.send({
                        result: events.map(event => mapper.map(event, '_id', 'name', 'description', 'eventDate', 'imageUrl'))
                    });
                });
        },
        home(req, res) {
            data.getNewestEvents(NEWEST_EVENTS_COUNT)
                .then(newestEvents => {
                    data.getMostPopularEvents(MOST_POPULAR_EVENTS_COUNT)
                        .then(mostPopularEvents => {
                            return res.render('home/home', {
                                user: req.user,
                                newestEvents,
                                mostPopularEvents
                            });
                        });
                });
        }
    };
};