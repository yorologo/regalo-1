const express = require("express");
var exphbs = require("express-handlebars");
const path = require("path");

let port = 3000;
let app = express();
const router = express.Router();

app.use(router);
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use("/app", express.static("./public/static"));

// GET method route
app.get("/", function (req, res) {
  res.render("index", {
    cancion: Math.floor(Math.random() * Math.floor(3)) + 1,
  });
});

app.listen(port);
console.log(`La aplicacion esta escuchando en http://localhost:${port}`);
