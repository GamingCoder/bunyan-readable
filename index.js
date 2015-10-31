var util = require('util');

function name (level) {
	var levels = {"10":"trace","20":"debug","30":"info","40":"warn","50":"error","60":"fatal"};
	return levels[level];
}

function custom (xlog) {
	var result = '';

	for (var key in xlog) if (key != 'v' && key != 'name' && key != 'hostname' && key != 'time' && key != 'pid' && key != 'msg' && key != 'level') result += ' ' + key + '=' + xlog[key];

	return result;
}

module.exports = function(log) {
	if (typeof log === 'object') {
		return util.format('%s[%s/%d]: %s: msg=%s', log.name, log.hostname, log.pid, name(log.level), log.msg).toString() + custom(log);
	} else{
		return log;
	}
};
