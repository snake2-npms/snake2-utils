Object.isObject = function (v) {
	return typeof v === 'function' || toString.call(v) === '[object Object]'
}
Object.isClass = function (v) {
	return typeof v === 'function' && /^\s*class\s+/.test(v.toString())
}
Object.assignDeep = function (target, ...args) {
	if (Object.isObject(target)) {
		for (let i = 0; i < args.length; i++) {
			if (Object.isObject(args[i])) {
				Object.keys(args[i]).forEach(key => {
					if (Object.isObject(target[key]) && Object.isObject(args[i][key])) {
						Object.assignDeep(target[key], args[i][key])
					} else {
						target[key] = args[i][key]
					}
				})
			}
		}
		return target
	} else {
		throw new Error('target is not a object')
	}
}

// instance methods
Object.prototype.pick = function (keys = []) {
	if (typeof keys === 'string') {
		keys = arguments
	}
	if (Array.isArray(this)) {
		return this.map(item => item.pick(keys))
	}
  return keys.map(k => k in this ? {[k]: this[k]} : {}).reduce((res, o) => Object.assign(res, o), {})
}

Object.prototype.reject = function (keys) {
  if (typeof keys === 'string') {
    keys = arguments
  }
  if (Array.isArray(this)) {
    return this.map(item => item.reject(keys))
  }
  const vkeys = Object.keys(this).filter(k => !keys.includes(k))
	return this.pick(vkeys)
}