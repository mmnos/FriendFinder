const express = require("express");
const path = require("path");

// Tells node that we are creating an "express" server
const app = express();

app.use(express.static('./app/static'));

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log(`App listening on PORT: + ${PORT}`);
});