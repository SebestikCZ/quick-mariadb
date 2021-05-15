# quick-mariadb
**What it is?**

This npm module comes with new age of mariadb, which makes it easier and familier to use.

**How I can use it?**

It is simple. First of all, you must define an options:
```js
const db = require("quick-mariadb");
var options = {
  host: "ip_address",
  user: "username",
  password: "password",
  database: "database",
  port: port
```
And more you can find in [mariadb's documentation](https://mariadb.com/kb/en/connector-nodejs-promise-api/#connection-options)

Then you just use set or get method.
```js
async function get(options) {
  const getted = await db.get(options, "table_name", "key");
  return getted;
}

async function set(options) {
  const setted = await db.set(options, "table_name", "key", "value");
  return setted;
}
```
