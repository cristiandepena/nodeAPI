
const fs = require('fs');
const filename = "target.txt";

const data = fs.readFileSync(filename);

const errHandler = err => console.log(err);
const dataHandler = data => console.log(data.toString());



fs.readFile(filename, (err, data) => {
    if (err) errHandler(err);
    dataHandler(data);
    
});

console.log("Node js async");



