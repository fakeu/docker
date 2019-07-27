const express = require("express");
const fs = require("fs");
const router = express.Router();

const jsonFileObject = JSON.parse(fs.readFileSync("./data/users.json"));

router
  .get("/", (req, res) => {
    res.json(jsonFileObject);
  })

  .get("/:login", (req, res) => {
    const user = jsonFileObject.find(user => user.login === req.params.login);

    res.json(user);
  })

  .post("/", (req, res) => {
    jsonFileObject.push(req.body);
    fs.writeFileSync("./data/users.json", JSON.stringify(jsonFileObject));
    res.json({ status: "added" });
  })

  .put("/", (req, res) => {
    jsonFileObject.forEach(user => {
      user.login === req.body.login ? Object.assign(msg, req.body) : false;
    });
    fs.writeFileSync("./data/users.json", JSON.stringify(jsonFileObject));
    res.json({ status: "updated" });
  })

  .delete("/:login", (req, res) => {
    const removeUser = jsonFileObject.filter(
      user => user.login !== req.params.login
    );

    fs.writeFileSync("./data/users.json", JSON.stringify(removeUser));
    res.json({ status: "deleted" });
  });

module.exports = router;
