/* globals require module */

const modelRegistrator = require('./utils/model-registrator');

module.exports = modelRegistrator.register('User', {
    username: {
        type: String,
        min: 6,
        max: 24,
        required: true,
        unique: true
    },
    password: {
        type: String,
        min: 6,
        max: 24,
        required: true
    },
    firstName: {
        type: String,
        min: 6,
        max: 24
    },
    lastName: {
        type: String,
        min: 6,
        max: 24
    },
    description: {
        type: String,
        min: 6,
        max: 24
    }
});