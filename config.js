const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  endpoint: process.env.GIT_TOKEN,  
  port: process.env.PORT
};