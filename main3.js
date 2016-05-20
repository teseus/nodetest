//import events
var events = require('events');

//Create an emmiter
var eventEmitter = new events.EventEmitter();

var listener1 = function(){
	console.log("listener1 event");
}

var listener2 = function(){
	console.log("listener2 event")
}

eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', listener2);

var eventListners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListners + " eventLisnter(s) is woking");

console.log("event Trigger!!!");
eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);
console.log("listener1 is not woking");

console.log("event Trigger!!!");
eventEmitter.emit('connection');

eventListners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListners + " eventListner(s) is woking");

console.log('Program Ended');
