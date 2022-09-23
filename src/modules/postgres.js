const { Pool } = require('pg');

const { DB_HOST } = require('../../config');
const { DB_PORT } = require('../../config');
const { DB_USER } = require('../../config');
const { DB_PASSWORD } = require('../../config');
const { DB_NAME } = require('../../config');

const pool = new Pool({
    user: DB_USER,
    host: DB_HOST,
    database: DB_NAME,
    password: DB_PASSWORD,
    port: DB_PORT,
});

module.exports = pool;
