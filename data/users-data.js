/* globals module require Promise */

module.exports = function(models) {
    let {
        User
    } = models;

    return {
        createUser(username, password) {
            let user = new User({ username, password });
            return new Promise((resolve, reject) => {
                user.save(err => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(user);
                });
            });
        },
        getUserByName(name) {
            return new Promise((resolve, reject) => {
                User.find({ username: name })
                    .limit(1)
                    .exec((err, user) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(user);
                    });
            });
        }
    };
};