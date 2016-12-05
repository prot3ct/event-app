const modelRegistrator = require("./utils/model-registrator");

module.exports = modelRegistrator.register("Event", {
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    },
    imageUrl: {
        type: String
    },
    location: {},
    participants: [{}],
    sponsors: [{}],
    comments: [{}],
    organiser: {}
});
