String.prototype.toUnderscore = function () {
	return this.replace(/[A-Z]/g, function (x, i) {
		x = x.toLowerCase()
		return i ? `_${x}` : x
	})
}

String.prototype.toCapitalize = function () {
	return this.replace(/^[a-z]/g, x => x.toUpperCase()).replace(/ [a-z]/g, x => x.toUpperCase())
}

String.prototype.toVarCase = function () {
	return this.replace(/^[A-Z]/g, x => x.toLowerCase()).replace(/_[a-z]/g, x => x.replace('_', '').toUpperCase())
}

String.prototype.toSnakeCase = function () {
	return this.replace(/^[A-Z]/g, x => x.toLowerCase()).replace(/[A-Z]/g, x => `_${x.toLowerCase()}`).replace(/-/g, '_')
}
