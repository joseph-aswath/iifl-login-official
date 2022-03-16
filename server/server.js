const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const pgp = require('pg-promise');
const {Client} = require('pg');
/************************************************************************************* */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
/************************************************************************************* */
var URL = "http://localhost:8000/";
/********************************************************************************** */
// Add Access Control Allow Origin headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
  });
var corsOptions = {
    origin: "http://localhost:4200",
    optionsSuccessStatus: 200
} 

const client = new Client({  //to be replaced by pool in the near future
    user:'me',
    database:'panlist',
    port:5432,
    host:'localhost',
    password:'1234'
});

client.connect();

app.post('/',cors(corsOptions),(req,res)=> {  
    panNumber = req.body.panNumber;
    console.log("pan no to insert:",panNumber);
    client.query('INSERT INTO PAN (panNumber) VALUES ($1)',[panNumber]); 
});

app.listen(8000);
/************************************************************************************* */
const PORT = process.env.port || 8000;
console.log(`node server port running on : ${PORT}`);

