const db = require('mariadb');

get: async function (options, table, key) {
	const pool = mariadb.createPool(options);
	var conn = pool.getConnection();
	var sql = `SELECT ${key} from ${table}`;
	let result;
	conn.query(sql).then(result = {});
}
