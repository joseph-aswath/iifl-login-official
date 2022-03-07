const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
/************************************************************************************* */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
/************************************************************************************* */
var URL = "http://localhost:8000/";
//reading from the JSON file
let obj1 = fs.readFileSync('panList.json','utf8',(err,data)=>{
    if(error){
        console.error("couldn't read list of pan-numbers");
    }
});

//convert the obj1 string to an object using JSON.parse()
let panList = JSON.parse(obj1);

//template & testing purpose object for now 
let newPanNumber={
    "id":0,
    "panNumber":""
};
/********************************************************************************** */
// Add Access Control Allow Origin headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, application/json, Accept"
    );
    next();
  });

app.get('/',(req,res)=>{
    res.send("node:i can hear you ");
});

app.post('/', (req,res)=> {
    /*** */
    console.log(req.body);
    console.log("hello test");
    newPanNumber.id = req.body.id;
    newPanNumber.panNumber = req.body.panNumber;
    panList.push(newPanNumber);
    fs.writeFileSync('./panList.json',JSON.stringify(panList),(error)=>{
    console.log("failed to update");
    });
    res.send(panList);
});

app.listen(8000);

/************************************************************************************ */
/*
LOGIC TO ASSIGN AN ID NUMBER 
1.length of json array of items 
2. id = length + 1 
3. new id = id++

function to delete duplicate PAN numbers 
function to sort PAN numbers in asceding order 
search algorithm implementation -> for view-data-base component 
post gre sql connection pool 

*/


/************************************************************************************* */
const PORT = process.env.port || 8000;
console.log(`node server port running on : ${PORT}`);
