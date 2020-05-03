const { Client } = require('pg');
const dotenv = require('dotenv');

let sqlClient = null;

class SqlClient {    
    constructor(connectionString) {
        if (!sqlClient) {
            sqlClient = new Client({
                user: process.env.PGUSER,
                host: process.env.PGHOST,
                database: process.env.PGDATABASE,
                password: process.env.PGPASSWORD,
                port: process.env.PGPORT,
              })
            sqlClient.connect()
            return sqlClient;
        }
        return sqlClient;
    }   
}

module.exports = SqlClient;