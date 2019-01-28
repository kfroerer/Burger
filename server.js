var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static("public"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({type: "application/*+json"}));
app.use(bodyParser.raw({type: 'application/vnd.custom-type'}));
app.use(bodyParser.text({type: 'text/html'}))
 
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});