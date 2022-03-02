const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
/************************************************************************************* */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
/************************************************************************************* */

//reading from the JSON file
let obj1 = fs.readFileSync('panList.json','utf8',(err,data)=>{
    if(error){
        console.error("couldn't read list of pan-numbers");
    }
});

//convert the obj1 string to an object using JSON.parse()
let panList = JSON.parse(obj1);
 
//updating the existing list using push()

//template & testing purpose object for now 
let newPanNumber={
    "id":'',
    "pan-number":""
};

panList.push(newPanNumber);
fs.writeFileSync('./panList.json',JSON.stringify(panList),(error)=>{
    console.log("failed to update");
});


/************************************************************************************* */
const PORT = process.env.port || 8000;
console.log(`node server port running on : ${PORT}`);
