const{ Pool } = require('pg');
require( 'dotenv' ).config();
const pool = new Pool({
    connectionString:process.env.DATABASE_URL,
    ssl:{
        rejectunauthorized:false
    }
});

module.exports=pool;

