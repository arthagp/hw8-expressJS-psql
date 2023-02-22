const fs = require('fs');
const pool = require('../query.js')

const deleteValues = fs.readFileSync('db/delete.sql', {encoding: 'utf-8'});
pool.query(deleteValues, (err, res) => {
    console.log(err);
    console.log('Delete Complete');
    pool.end();
});

console.log(deleteValues);