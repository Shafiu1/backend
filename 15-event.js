const EventEmitter = require('events');

const customEmitter = new EventEmitter();

//on-listen for an event


customEmitter.on('response', (name, id)=>{
    console.log(`data recieved user ${name} with id ${id}`);
})

customEmitter.on('response', () => {
    console.log(`some other logic here`);
})
//emit - emit an event
// customEmitter.emit('response')
customEmitter.emit('response','john',34)

