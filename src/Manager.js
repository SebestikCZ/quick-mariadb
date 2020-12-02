const db = require('mariadb');
const get = require('./get.js');
const set = require('./set.js');

module.exports = {
	get: async function (options, table, key) {
		if (!options | !table | !key) {
			throw new TypeError("One (or more) required parameters unspecified.");
		}
		const pool = mariadb.createPool(options);
		var conn = pool.getConnection();
		var sqlInit = `CREATE TABLE IF NOT EXIST ${table} (key TEXT, json TEXT)`;
		conn.query(sqlInit);
		sqlInit = `SELECT ${key} from ${table}`;
		let result;
		result = conn.query(sqlInit);
		const gettedValue = get.getValue(result);
		return gettedValue;
	},
	set: async function (options, table, key, value) {
		const pool = mariadb.createPool(options);
		var conn = pool.getConnection();
		var selection = conn.query(`SELECT ${key} from ${table}`);
		var sql;
		if (!selection) {
			sql = `CREATE TABLE IF NOT EXIST ${table} (key TEXT, json TEXT)`;
		}
		if (selection.includes(value)) {
			sql = `UPDATE \`${table}\` SET \`key\`=${key}, \`json\`=${value} WHERE ID = (?)`
		} else {
			sql = `INSERT ${key} INTO ${table}`;
		}
		conn.query(sql, []
	}
}
