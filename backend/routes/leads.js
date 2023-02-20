const express = require("express");
const PATH = "/api/v4/leads";
const api = require("../utils/api.js");

const router = express.Router();

router.post("/", (req, res, next) => {
  api
    .post(PATH, req.body, {
      headers: {
        Authorization: req.headers.authorisation,
      },
    })
    .then(({ data }) => {
      console.log(data);
      return res.json(data);
    })
    .catch((err) => {
      console.log(err);
      return next(err);
    });
});

router.get("/", (req, res, next) => {
  api
    .get(PATH, {
      headers: {
        Authorization: req.headers.authorisation,
      },
    })
    .then((data) => {
      return res.json(data.data);
    })
    .catch((err) => {
      console.log(err);
      return next(err);
    });
});

module.exports = router;