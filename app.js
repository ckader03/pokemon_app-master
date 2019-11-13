const express = require("express");
const mustacheExpress = require("mustache-express");
const pgp = require("pg-promise")();

const app = express();
const PORT = process.env.PORT || 8000;

// normal setup for express & mustache (if we want to go there)
app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded());
app.use(express.json());

// connect router
app.use(require("./router"));

app.listen(PORT, () => console.log("Server is listening on port", PORT));
