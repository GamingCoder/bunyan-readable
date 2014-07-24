#!/usr/bin/env node
var readableBunyan = require('../index.js');

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(data) {
	if (data[0] === '{') {
		console.log(readableBunyan(JSON.parse(data)));
	} else{
		console.log(data);
	}
});