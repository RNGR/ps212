const axios = require("axios");
//const path = require('path');

//require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const api = new axios.create({
  baseURL: "https://ps212.directus.app/",
});

module.exports = api;
