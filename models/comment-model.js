const modelRegistrator = require("./utils/model-registrator");

module.exports = modelRegistrator.register("Comment", {
    description: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        required: true
    },
    author: {}
});
