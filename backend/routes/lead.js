const express = require("express");
const axios = require("axios");
const PATH = '/api/v4/leads';
const api = require("../utils/api.js");

const router = express.Router();

router.post("/", (req, res, next) => {
  api
    .post(`${req.headers.domain}${PATH}`, {
      body: {
        name: req.body.name,
      },
    })
    .then(({data}) => {
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
    .get(`${req.headers.domain}${PATH}`, {
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
