// /* globals require console*/
const config = require("./config");

let data = require("./data")(config.connectionString);

const { server, app } = require("./config/application")({ data });

server.listen(config.port, () => console.log(`Events system running on port: ${config.port}`));

let controllers = require("./controllers")({ data });

require("./routers")({ app, data, controllers });