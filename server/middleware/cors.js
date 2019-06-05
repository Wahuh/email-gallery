const cors = require("@koa/cors");

const options = {
    origin: "http://localhost"
};

module.exports = function(app) {
    app.use(cors(options));
}