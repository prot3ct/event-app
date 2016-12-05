const modelRegistrator = require("./utils/model-registrator");

module.exports = modelRegistrator.register("Location", {
    name: {
        type: String,
        required: true,
        unique: true
    },
    xCoord: Number,
    yCoord: Number
});
