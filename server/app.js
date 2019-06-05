const Koa = require("koa");
const app = new Koa();

require("./middleware/bodyParser")(app);
require("./middleware/cors")(app);
require("./routes")(app);

module.exports = app;