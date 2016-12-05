const modelRegistrator = require('./utils/model-registrator');

module.exports = modelRegistrator.register('Event', {
    name: {
        type: String,
        unique: true,
        min: 5,
        max: 60,
        required: true
    },
    description: {
        type: String,
        min: 5,
        max: 1000,
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    },
    imageUrl: {
        type: String,
        max: 1000
    },
    location: {},
    participants: [{}],
    sponsors: [{}],
    comments: [{}],
    organiser: {}
});