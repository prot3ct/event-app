/* globals require module */

const modelRegistrator = require('./utils/registrator');

module.exports = modelRegistrator.register('Event', {
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    participants: [],
    location: {
        type: String,
        required: true
    }
});

// TO DO: Custom validator that checks if registered date is before current date