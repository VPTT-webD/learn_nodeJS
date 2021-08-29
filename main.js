const fs = require("fs");

console.log('start executing tasks...');
fs.readFile("./examples/ex_file.txt", 'utf8', function(err, data){
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
    console.log('complete task');
});

console.log('continue executing other task...');