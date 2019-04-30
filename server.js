var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
var cl = (m) => {console.log(m);}

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, () => {
    cl("App listening on PORT: " + PORT);
});