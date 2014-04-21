# bunyan-readable EXPERIMENTAL
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
  "v": "log_version"
  "custom_field": "whatever"
}
```
## bunyan-readable
```
name[hostname/pid]: name(level): msg=msg custom_field=whatever
```