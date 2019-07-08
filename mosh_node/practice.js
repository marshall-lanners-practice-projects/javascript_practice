// function log(message){
// 	console.log(message)
// }

// let url = "http://myloger"

// module.exports.log = log
//module.exports.url = url

//console.log(module)

// module.exports = log
// nows is no longer an object but a function
// we can call directly

/*

node wraps each module in something like this

//module wrapper function
(function (exports, require, module, __filename, __dirname){
	//code here
})

*/

// console.log(__filename) //path to file
// console.log(__dirname) //path to directory

// node docs can see all modules buit into node
/*
file System
HTTP
OS
Path
Process
Query Strings
Stream
*/

// path.parse(path)

// const path = require('path');

// let pathObj = path.parse(__filename);

// console.log(pathObj)

// const os = require('os');

// let totalMemory = os.totalmem()
// let free = os.freemem()

// console.log(`total memory ${totalMemory}`)
// console.log(`free memory ${free}`);

//working with files

// const fs = require('fs');

//Asyncronius is non blocking always use them

// const files = fs.readdirSync('./')
// console.log(files)

// fs.readdir('./', function(err, files){
// 	if (err) console.log("Error", err);
// 	else console.log('Result', files)
// })

// Always prefere to use Aynchronous methods
// because they are non blocking

// EVENT

// a sinal that something has happened

// HTTP listening on a port and if something happens
// we are listening on that event

const EventsEmitter = require('events'); // this is a class
const emitter = new EventsEmitter();

emitter.on('messageLogged', (arg) => {
	console.log('listener called', arg)
})

emitter.emit('messageLogged', {id: 1, url: 'http://'});

// Raise: logging (data: message)









