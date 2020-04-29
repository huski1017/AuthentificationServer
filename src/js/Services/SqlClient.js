const sql = require('mssql');

let client = null;

class SqlClient {    
    constructor(connectionString) {
        if (!client) {
            let connectDatabase = async () => {
                await this.connect(connectionString)
            }
            connectDatabase();
            client = this;
            return client;
        }
        return client;
    }   

    async connect(connectionString) {
        try {
            this.pool = await sql.connect(connectionString);
        }
        catch (error) {
            console.log(error)
            return false;
        }
        console.log('All good mate')
        return true;
    }
}

module.exports = SqlClient;