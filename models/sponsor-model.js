const modelRegistrator = require("./utils/model-registrator");

module.exports = modelRegistrator.register("Sponsor", {
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
});
