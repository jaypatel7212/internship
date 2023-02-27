const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on('WaterFull',() =>{
    console.log('please turn off the motor!');
    setTimeout(()=>{
        console.log('please turn off  the motor ! it is gentle reminder');
    },3000);
});

console.log("The script is running")

myEmitter.emit('WaterFull');