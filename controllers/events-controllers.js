/* globals module */

module.exports = function({ data, io }) {
    return {
        name: 'superheroes',
        getSuperheroes(req, res) {
            return data.getAllEvents()
                .then(fractions => {
                    res.render('events/list', {
                        model: fractions,
                        user: req.user
                    });
                })
                .catch(err => {
                    res.status(404)
                        .send(err);
                });
        }
        // getSuperheroDetails(req, res) 
        // getCreateSuperheroForm(req, res) 
        // createSuperhero(req, res)          
        // updateSuperhero(req, res) 
    };
};