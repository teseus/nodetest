var buffer1 = new Buffer('Test buffer 1 ');
var buffer2 = new Buffer('Test buffer 2 ');
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("buffer3 content is: " + buffer3.toString() + "buffer size = " + buffer3.length);
console.log("buffer3 json =" + buffer3.toJSON());