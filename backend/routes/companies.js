const express = require("express");
const PATH = "/api/v4/companies";
const api = require("../utils/api.js");

const router = express.Router();

router.post("/", (req, res, next) => {
  api
    .post(PATH, req.body, {
      headers: {
        Authorization: req.headers.authorisation,
        "x-domain": req.headers["x-domain"]
      },
    })
    .then(({ data }) => {
      const createIDs = []
      data._embedded.companies.forEach(company => createIDs.push(company.id) )
      return res.json(createIDs)
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
        "x-domain": req.headers["x-domain"]
      },
    })
    .then((data) => {
      const createIDs = []
      data._embedded.companies.forEach(lead => createIDs.push(lead.id) )
      return res.json(createIDs)
    })
    .catch((err) => {
      console.log(err);
      return next(err);
    });
});

module.exports = router;
