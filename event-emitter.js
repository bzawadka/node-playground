const events = require('events');

var eventEmitter = new events.EventEmitter();

// Bind the connection event with the handler
eventEmitter.on('connection', function() {
  console.log('connection succesful.');
  eventEmitter.emit('data_received');
});

eventEmitter.on('data_received', function() {
   console.log('data received succesfully.');
});

// Fire the connection event
eventEmitter.emit('connection');

console.log("Program Ended.");
