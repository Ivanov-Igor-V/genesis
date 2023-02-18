const express = require("express");
const axios = require("axios");

const router = express.Router();

router.post("/", (req, res, next) => {
    console.info(req.headers, req.body);
  axios
    .get("https://test.gnzs.ru/oauth/get-token.php", {
      headers: {
        "content-type": "application/json",
        "X-Client-Id": req.body.id,
      },
    })
    .then(({data}) => {
      console.log(data);
      return res.json(data);
    })
    .catch((err) => {
      console.log('error', err);
      return next(err);
    });
});

module.exports = router;
