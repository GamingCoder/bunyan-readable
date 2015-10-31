var test = require('tape');
var bunyanReadable = require('../index.js');

var logMsg = {"name":"myapp","hostname":"myhost","pid":34572,"level":30,"msg":"start","time":"2013-01-04T07:47:25.814Z","v":0};
test('Testing behavior when logging non bunyan messages', function(t) {
	t.plan(2);

	t.equal(bunyanReadable('hello world'), 'hello world', 'hello world');
	t.equal(bunyanReadable('{test:hello}'), '{test:hello}', '{test:hello}');
});
test('Should not parse json', function(t) {
	t.plan(1);

	var msg = {test: 'string'};
	t.equal(bunyanReadable(msg), msg, msg);
});
