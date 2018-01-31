{
	let obj = {
		time: '2017-01-10',
		name: 'net',
		_r: 123
	}

	let monitor = new Proxy(obj,{
		get(target, key) {
			return target[key].replace('2017', '2018')
		},
		set(target, key, value) {
			if(key === 'name') {
				return target[key] = value
			} else {
				return target[key]
			}
		}
	})
	monitor.name = 'abc'
	console.info(monitor)
},