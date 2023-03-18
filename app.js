const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response', () => {
    console.log(`data recieved`)
}) //listen for event




customEmitter.emit('response')