var test = require('tape');
var bunyanReadable = require('../index.js');

var logMsg = {"name":"myapp","hostname":"myhost","pid":34572,"level":30,"msg":"start","time":"2013-01-04T07:47:25.814Z","v":0};
test('Logging standard logs with custom fields', function(t) {
	t.plan(2);

	var msg = logMsg;
	msg.custom = true
	t.equal(bunyanReadable(msg), 'myapp[myhost/34572]: info: msg=start custom=true', 'myapp[myhost/34572]: info: msg=start custom=true');

	msg.custom = [1, 2, 'three', 'four'];
	t.equal(bunyanReadable(msg), 'myapp[myhost/34572]: info: msg=start custom=1,2,three,four', 'myapp[myhost/34572]: info: msg=start custom=1,2,three,four');
});