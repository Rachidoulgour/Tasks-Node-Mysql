const mysql = require('mysql');
const promisify = require('util')
const { database } = require('./words');
const pool = mysql.createPool(database);

pool.getConnection((err, connection)=>{
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.log('conection with database lost')
        }
    }
    if(err){
        if(err.code ==='ER_CON_COUNT_ERROR'){
            console.log('database has too many connection')
        }
    }
    if(err){
        if(err.code ==='ECONNREFUSED'){
            console.log('connection refused with database')
        }
    }
    if(connection) connection.release();
    console.log('DB IS CONNECTED');
    return;
});
pool.query=promisify(pool.query);
module.exports = pool;