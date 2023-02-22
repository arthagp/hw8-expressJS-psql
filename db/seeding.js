const fs = require('fs');
const { encode } = require('punycode');
const pool = require('../query.js')

const seedQuery = fs.readFileSync('db/seeding.sql', {encoding: 'utf-8'});
pool.query(seedQuery, (err, res) => {
    console.log(err);
    console.log('Seeding Complete');
    pool.end();
});
console.log(seedQuery);