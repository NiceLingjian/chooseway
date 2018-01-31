{
	let say = 'hello';
	let name = 'world';
	let str = `I am ${say} ${name}`
	document.write(str)
}


{
	/*let arr = ['1','n','a']
	for(let [index,values] of arr.entries()){
		console.log(index,values)
	}*/
}

{
	/*console.log([1,2,3,4,5,6].find(item=>{return item>3}));
	console.log([1,2,3,4,5,6].findIndex(item=>{return item>3}));*/
}

{
	function test(x, y='world') {
		console.log(x,y)
	}
	test('hello')
}

{
	function test2(...arg) {
		for(let v of arg) {
			console.log('rest', v)
		}
	}
	test2(1,2,3,4,'a')
}

{
	let arrow = v=> v*3;
	let arrow2 = ()=> 8
	console.log(arrow(2),arrow2());
}

{
	function tail(x){
		console.log('tail',x)
	}

	function fx(x){
		return tail(x)
	}
	fx(123)
}

{
	console.log('拷贝', Object.assign({a: 'a'}, {b: 'b'}));
}
{
	let map = new Map();
	let arr = ['123',123]
	map.set(arr, 456)
	console.log(map, map.get(arr))
}