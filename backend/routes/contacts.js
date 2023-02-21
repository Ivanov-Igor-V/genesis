const express = require("express");
const PATH = "/api/v4/contacts";
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
      console.log(data);
      const createIDs = []
      data._embedded.contacts.forEach(contact => createIDs.push(contact.id) )
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
      return res.json(data.data);
    })
    .catch((err) => {
      return next(err);
    });
});

module.exports = router;
