const db = require('mariadb');
const get = require('./get.js');
const set = require('./set.js');

module.exports = {
	get: async function (options, table, key) {
		if (!options | !table | !key) {
			throw new TypeError("One (or more) required parameters unspecified.");
		}
		const pool = db.createPool(options);
		var conn = await pool.getConnection();
		var sqlInit = `CREATE TABLE IF NOT EXISTS ${table} (ID TEXT, json TEXT)`;
		await conn.query(sqlInit, function (err, result) {
			if (err) throw err;
			console.log(result);
		});
		sqlInit = `SELECT json FROM ${table} WHERE ID = ${key}`;
		let result;
		result = await conn.query(sqlInit);
		const gettedValue = await get.getValue(result, key);
		console.log(gettedValue);
		conn.close();
		return gettedValue;
	},
	set: async function (options, table, key, value) {
		var sqlInit = `CREATE TABLE IF NOT EXISTS \`${table}\` (ID TEXT, json TEXT)`;
		const pool = db.createPool(options);
		var conn = await pool.getConnection();
		conn.query(sqlInit);
		try {
			var selection = await conn.query(`SELECT json FROM ${table} WHERE ID = '${key}'`);
		} catch (e) {}
		console.log(selection);
		var sql;
		var ops;
		if (!selection) {
			sql = `INSERT INTO ${table} (ID, json) VALUES ('${key}', '${JSON.stringify(value)}')`;
			queriedOutput = await set.queryValue(sql, conn);
			conn.close();
			return queriedOutput;
		}
		if (selection.length <= 0) {
			sql = `CREATE TABLE IF NOT EXISTS \`${table}\` (ID TEXT, json TEXT)`;
		}
		if (selection !== null) {
			sql = `UPDATE ${table} SET json='${JSON.stringify(value)}' WHERE ID = '${key}'`;	
		}
		var queriedOutput;
		console.log(sql);
		try {
			queriedOutput = await set.queryValue(sql, conn);
			if (queriedOutput.affectedRows <= 0) {
				sql = `INSERT INTO ${table} (ID, json) VALUES ('${key}', '${JSON.stringify(value)}')`;
				queriedOutput = await set.queryValue(sql, conn);
				conn.close();
				return queriedOutput;
			}
			conn.close();
			return queriedOutput;
		} catch (e) {
			sql = `INSERT INTO ${table} (ID, json) VALUES ('${key}', '${JSON.stringify(value)}')`;
			queriedOutput = await set.queryValue(sql, conn);
			conn.close();
			return queriedOutput;
		}
	}
}