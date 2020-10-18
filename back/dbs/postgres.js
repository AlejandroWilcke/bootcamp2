const { Pool } = require('pg')

const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'bootcamp',
  password: 'aleale',
  port: 5432,
});

module.exports = pool;