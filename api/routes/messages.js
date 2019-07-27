const express = require("express");
const fs = require("fs");
const router = express.Router();

const jsonFileObject = JSON.parse(fs.readFileSync("./data/messages.json"));

router
  .get("/", (req, res) => {
    res.json(jsonFileObject);
  })

  .get("/:id", (req, res) => {
    const message = jsonFileObject.find(msg => msg.id === req.params.id);

    res.json(message);
  })

  .post("/", (req, res) => {
    jsonFileObject.unshift(req.body);
    fs.writeFileSync("./data/messages.json", JSON.stringify(jsonFileObject));
    res.json(jsonFileObject);
  })

  .put("/", (req, res) => {
    jsonFileObject.forEach(msg => {
      msg.id === req.body.id ? Object.assign(msg, req.body) : false;
    });
    fs.writeFileSync("./data/messages.json", JSON.stringify(jsonFileObject));
    res.json(jsonFileObject);
  })

  .delete("/:id", (req, res) => {
    const removeMessage = jsonFileObject.filter(msg => {
      return msg.id !== req.params.id;
    });

    fs.writeFileSync("./data/messages.json", JSON.stringify(removeMessage));
    res.json(removeMessage);
  });

module.exports = router;
