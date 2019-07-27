const express = require("express");
const router = express.Router();
const users = require("../../data/users.json");
const jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {
  const userFromReq = req.body;
  const userInDB = users.find(user => user.login === userFromReq.login);

  if (userInDB && userInDB.password === userFromReq.password) {
    const token = jwt.sign(userFromReq, "someSecret", { expiresIn: "1000h" });

    res.status(200).json({
      auth: true,
      token: "JWT " + token,
      id: userInDB.id,
      user: userInDB.user,
      login: userInDB.login,
      avatar: userInDB.avatar,
      admin: userInDB.admin
    });
  } else {
    res.status(401).json({ auth: false });
  }
});

module.exports = router;
