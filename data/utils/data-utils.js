/* globals module */
module.exports = {
    loadOrCreateLocation(Location, name) {
        return new Promise((resolve, reject) => {
            Location.findOne({ name }, (err, dbLocation) => {
                let location = dbLocation;

                if (err) {
                    return reject(err);
                }

                if (location) {
                    return resolve(location);
                }

                location = new Location({ name });
                return this.save(location)
                    .then(resolve)
                    .catch(reject);
            });
        });
    },
    update(model) {
        return new Promise((resolve, reject) => {
            model.save(err => {
                if (err) {
                    return reject(err);
                }
                return resolve(model);
            });
        });
    },
    save(model) {
        return new Promise((resolve, reject) => {
            model.save(err => {
                if (err) {
                    return reject(err);
                }

                return resolve(model);
            });
        });
    }
};
