/* globals module console */

module.exports = function({ data }) {
    return {
        name: 'users',
        getUserByName(req, res) {
            let username = req.params.username;
            data.getUserByName(username)
                .then(users => {
                    let user = users[0];
                    return res.render('../views/users/profile', {
                        result: user
                    });
                });
        }
    };
};