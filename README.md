# bunyan-readable [![Build Status](https://travis-ci.org/GamingCoder/bunyan-readable.svg?branch=master)](https://travis-ci.org/GamingCoder/bunyan-readable)
This project aims to make [bunyan](https://www.npmjs.org/package/bunyan) logs more readable. It is meant to produce output for humans and not machines.

# Format
## Bunyan
```json
{
  "name": "name",
  "hostname": "hostname",
  "pid": "pid",
  "level": "level",
  "msg": "msg",
  "time": "time",
  "v": "log_version",
  "custom_field": "whatever"
}
```
## bunyan-readable
```
name[hostname/pid]: name(level): msg=msg custom_field=whatever
```
Note: name(level) turns log level codes into level names e.g. 30 into info

# Install
```bash
$ npm install bunyan-readable -g
```
Now you can pipe bunyan output to `bunyan-readable'
```bash
$ node yourscript.js | bunyan-readable
```
