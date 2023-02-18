const axios = require("axios");
const api = axios.create({
  baseURL: 'https://',
  headers: {
    "content-type": "application/json",
  },
});


const checkTokenInterceptor = (config) => {

  // if (config.headers.Authorization) {
  //   config.headers.authorization = `Bearer ${token}`;
  //  }

  return config;
};

api.interceptors.request.use(checkTokenInterceptor);




module.exports = api;
