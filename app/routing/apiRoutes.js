let friends = require("../data/friends");
let getMatch = require("../../logic");

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/survey", function(req, res) {
    res.json(friends);
  });

  app.post("/api/survey", (req, res) => {

    let match = getMatch(friends, req.body);

  });

};