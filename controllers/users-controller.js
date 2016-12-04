/* globals module console */

const mapper = require("../utils/mapper");

module.exports = function({ data }) {
    return {
        name: "users",
        getUserByName(req, res) {
            let username = req.params.username;
            data.getUserByName(username)
                .then(user => {
                    return res.render('../views/users/profile', user);
                });
        }
    };
};
