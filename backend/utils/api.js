const axios = require("axios");
const api = axios.create({
  baseURL: "https://",
  headers: {
    "content-type": "application/json",
  },
});

const checkTokenInterceptor = (config) => {
  console.log("from inter", config.headers);
  if (config.headers["x-domain"]) {
    config.baseURL += config.headers["x-domain"];
  }

  return config;
};

api.interceptors.request.use(checkTokenInterceptor);

module.exports = api;
