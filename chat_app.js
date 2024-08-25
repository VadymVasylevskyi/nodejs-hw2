const events = require('events');

const eventEmitter = new events.EventEmitter();

function sendMessage(username, message, eventEmitter) {
    eventEmitter.emit('message', username, message);
}

eventEmitter.on('message', (username, message) => {
    console.log(`${username}: ${message}`);
});

sendMessage('Bot', 'Hi', eventEmitter);
sendMessage('Player', 'Hello!', eventEmitter);
sendMessage('User', 'GM!', eventEmitter);
