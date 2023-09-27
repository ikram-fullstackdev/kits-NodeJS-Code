const express = require("express");
const kit = require("../controller/kit")
const kitRouter = express.Router();

kitRouter
  .route("/kit")
  .get(kit.getKit);

module.exports = kitRouter;
