require('dotenv').config({ path: './server/.env' });

const app = require('../server/src/app');
const connectDB = require('../server/src/config/database');

let connectionPromise;

module.exports = async (req, res) => {
  if (connectionPromise === undefined) {
    connectionPromise = connectDB().catch((error) => {
      connectionPromise = undefined;
      throw error;
    });
  }

  await connectionPromise;
  if (req.url !== '/' && !req.url.startsWith('/api/')) {
    req.url = `/api${req.url}`;
  }
  return app(req, res);
};