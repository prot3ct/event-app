const constants = require('./config/constants');

let data = require('./data/routers-loader')(constants.connectionString);

const { server, app } = require('./config/application'); // ({ data })

server.listen(constants.port, () => console.log(`Superheroes running at :${constants.port}`));

// let controllers = require('./controllers')({ data });

require('./routers-loader')({ app, data, controllers });