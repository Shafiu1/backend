const {readFile} = require('fs');

console.log('startin the first task');

readFile('./content/first.txt','utf8',(err,res)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(res);
    console.log('completed the first task');
})

console.log('Starting the next task');

setInterval(() => {
    console.log('hello world');
}, 2000);
console.log('I will run first');