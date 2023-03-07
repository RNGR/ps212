const axios = require("axios");
//const path = require('path');

//require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const api = new axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

module.exports = api;
