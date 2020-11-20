const db = require('mariadb');
const get = require('./get.js');
const set = require('./set.js');

module.exports = {
	get: async function (options, table, key) {
		const pool = mariadb.createPool(options);
		var conn = pool.getConnection();
		var sql = `SELECT ${key} from ${table}`;
		let result;
		conn.query(sql).then(result = {});
		const gettedValue = get.getValue(result);
		return gettedValue;
	},
	set: async function (options, table, key, value) {
		const pool = mariadb.createPool(options);
		var conn = pool.getConnection();
		var selection = conn.query(`SELECT ${key} from ${table}`);
		var sql;
		if (selection.includes(value)) {
			sql = `UPDATE \`${table}\` SET WHERE ${selection.indexof(value)}`
		}
		sql = `INSERT ${key} INTO ${table}`;
	}
}
