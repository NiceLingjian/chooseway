{
	function loadimg(src) {
		return new Promise((resolve,reject) => {
			let img = document.createElement('img');
			img.src = src;
			img.onload = function() {
				resolve(img)
			}
			img.onerror = function(err) {
				reject(err)
			}
		})
	}

	function showimgs(imgs) {
		console.log(imgs)
		imgs.forEach(img=> document.body.append(img))
	}

	Promise.all([
		loadimg('https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=731019747,1287543710&fm=27&gp=0.jpg'),
		loadimg('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=236558083,2946371118&fm=27&gp=0.jpg'),
		loadimg('https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=479039441,2373180467&fm=27&gp=0.jpg')
	]).then(showimgs)
}