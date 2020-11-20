const Manager = require(./src/Manager.js);

module.exports = {
	get: async function(config, table, key) {
		Manager.get(config, table, key);
	}
}
