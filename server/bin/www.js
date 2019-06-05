const { port } = require("../config");
const app = require("../app");

console.log(`listening on ${port}`)
app.listen(port);