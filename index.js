const Manager = require(./src/Manager.js);

module.exports = {
	get: async function(config, table, key) {
		Manager.get(config, table, key);
	},
	set: async function(config, table, key, value) {
		Manager.set(config, table, key, value);
	}
}
