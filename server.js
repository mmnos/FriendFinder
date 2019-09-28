const express = require("express");
const path = require("path");

const app = express();

app.use(express.static('./app/static'));

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log(`App listening on PORT: + ${PORT}`);
});