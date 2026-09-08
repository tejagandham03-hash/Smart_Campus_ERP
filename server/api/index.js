require('dotenv').config();

const app = require('../src/app');
const connectDB = require('../src/config/database');

let connectionPromise;

module.exports = async (req, res) => {
  if (connectionPromise === undefined) {
    connectionPromise = connectDB().catch((error) => {
      connectionPromise = undefined;
      throw error;
    });
  }

  await connectionPromise;
  return app(req, res);
};