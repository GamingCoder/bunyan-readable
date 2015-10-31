#!/usr/bin/env node
var readableBunyan = require('../index.js');

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(data) {
	try {
		console.log(readableBunyan(JSON.parse(data)));
	} catch (e) {
		console.log(data);
	}
});
