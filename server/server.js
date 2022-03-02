const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
/************************************************************************************* */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
/************************************************************************************* */
let obj1 = fs.readFileSync('panList.json','utf8',(err,data)=>{
    if(error){
        console.error("couldn't read list of pan-numbers");
    }
});
console.log("type of obj1:",typeof(obj1)); //type of obj1 : string
console.log("content of obj1:",obj1);
//reading from panList.json has been successful so far ....

//convert the obj1 string to an object using JSON.parse()
let panList = JSON.parse(obj1);
console.log("type of panList:",typeof(panList),"\n",panList);  //object 
 
//dummy data
let newPanNumber = {"id":4,"pan-number":"abcde4422g"};
console.log("\n","type of newPanNumber:",typeof(newPanNumber),"\n","it's contents:",newPanNumber);

//updating the existing list using push()
console.log("\n","now let's update the existing list");
panList.push(newPanNumber);
console.log(panList);

fs.writeFileSync('./panList.json',JSON.stringify(panList),(error)=>{
    console.log("failed to update");
});


/************************************************************************************* */
const PORT = process.env.port || 8000;
console.log(`node server port running on : ${PORT}`);
