	let a = {};
	let b = a;
	console.log( Object.is( a,b ) );
	//==:会转化类型
	//===会NaN不等于NaN;+0等于-0
	