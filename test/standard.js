var test = require('tape');
var bunyanReadable = require('../index.js');

test('Logging standard logs without custom fields', function(t) {
	t.plan(1);

	var logMsg = {"name":"myapp","hostname":"myhost","pid":34572,"level":30,"msg":"start","time":"2013-01-04T07:47:25.814Z","v":0};
	
	t.equal(bunyanReadable(logMsg), 'myapp[myhost/34572]: info: msg=start', 'myapp[myhost/34572]: info: msg=start');
});