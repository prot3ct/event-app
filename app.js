const constants = require("./config/constants");

let data = require("./data")(config.connectionString);

const { server, app } = require("./config/application")({ data });

server.listen(constants.port, () => console.log(`Superheroes running at :${config.port}`));

// let controllers = require("./controllers")({ data, io });

// require("./routers")({ app, data, controllers });