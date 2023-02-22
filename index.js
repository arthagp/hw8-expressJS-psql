const express = require('express');
const app = express();
const port = 3000;
const route = require('./routes.js');
const pool = require('./query.js');


app.use('/', route);
// app.use('/film', route);


pool.connect((err,res)=>{
    console.log(err);
    console.log('Connect');
})



app.listen(port);