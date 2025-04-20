const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: process.env.PG_NAME,
    user: process.env.PG_USER,
    port: process.env.PG_PORT,
    password: process.env.PG_PASS,
    database: process.env.PG_DB
});

pool.connect()
    .then(() => console.log('Node and PostgreSQL have connected.'))
    .catch(err => console.error('Database connection error:', err));

module.exports = pool;
