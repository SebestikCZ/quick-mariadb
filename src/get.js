module.exports = {
	getValue: async function (result, key) {
		console.log(result);
		var string = [];
		for (var i = 0; i <= (result.length - 1); i++) {
			string.push(JSON.parse(result[i].json));
		}
		return string[0];
	}
}
