const messages = require("./messages");
const users = require("./users");
const login = require("./login");

module.exports = app => {
  app.use("/api/message", messages);
  app.use("/api/user", users);
  app.use("/auth/", login);
};
