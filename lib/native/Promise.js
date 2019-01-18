Promise.sleep = function (ms = 0) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(ms)
		}, ms)
	})
}