const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const passport = require("passport");
const bodyParser = require("body-parser");
const routes = require("./api/routes/index");
const cors = require("cors");

require("./passport.config");

app.use(passport.initialize());
app.use(bodyParser.json());
app.use(cors());

routes(app);

io.on("connection", socket => {});

server.listen(3000);
