function chan1() {
	var arr =[];
	var result = document.getElementById('result');
	//каждому изображению присвоил переменную,А потом передал в массив
	for (var i = 0; i < document.getElementsByTagName('img').length - 1; i++) {
		var img = document.getElementsByTagName('img')[i];
		arr.push(img.src);
	}
	result.src = arr[0];
}

function chan2() {
	var arr =[];
	var result = document.getElementById('result');
	//каждому изображению присвоил переменную,А потом передал в массив
	for (var i = 0; i < document.getElementsByTagName('img').length - 1; i++) {
		var img = document.getElementsByTagName('img')[i];
		arr.push(img.src);
	}
	result.src = arr[1];
}

function chan3() {
	var arr =[];
	var result = document.getElementById('result');
	//каждому изображению присвоил переменную,А потом передал в массив
	for (var i = 0; i < document.getElementsByTagName('img').length - 1; i++) {
		var img = document.getElementsByTagName('img')[i];
		arr.push(img.src);
	}
	result.src = arr[2];
}
