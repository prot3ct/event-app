const modelRegistrator = require("./utils/model-registrator");

module.exports = modelRegistrator.register("Location", {
    name: {
        type: String,
        required: true,
        unique: true
    },
    xCoord: {
        type: Number,
        require: true
    },
    yCoord: {
        type: Number,
        require: true
    },
    zCoord: {
        type: Number,
        required: true
    }
});
