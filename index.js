const Manager = require(./src/Manager.js);

module.exports = {
	get: async function(config, table, key) {
		return Manager.get(config, table, key);
	},
	set: async function(config, table, key, value) {
		return Manager.set(config, table, key, value);
	}
}
