/***
 * Author:msl
 * Subject:let & const
 * Date:2018-12-20
 * ***/
/*1.let的块级作用域的具体体现*/
	var f;
	if(true){
		let a = 10;
		f = function(){
			console.log( a );
		}
	}
	f();
/*2.不存在变量“提升”*/
	console.log( flag );
	var flag;
	console.log( bar );
	let bar = "bar";

