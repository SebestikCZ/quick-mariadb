const db = require('mariadb');
const get = require('./get.js');
const set = require('./set.js');

get: async function (options, table, key) {
	const pool = mariadb.createPool(options);
	var conn = pool.getConnection();
	var sql = `SELECT ${key} from ${table}`;
	let result;
	conn.query(sql).then(result = {});
	const gettedValue = get.getValue(result);
	return gettedValue;
}
