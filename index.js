var util = require('util');

function name (level) {
	var levels = {"10":"trace","20":"debug","30":"info","40":"warn","50":"error","60":"fatal"};
	return levels[level];
}

exports = module.exports = function(log) {
	var cLog = util.format('%s[%s/%d]: %s: msg=%s', log.name, log.hostname, log.pid, name(log.level), log.msg);

	return cLog;
};