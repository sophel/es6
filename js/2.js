function f(){
	let n = 10;
	if( true ){
		//1.内层块级作用域不覆盖外层
		let n = 5;
		console.log( n );//5
	}
	console.log( n );//10
}
f();
//{{
//	let o = "123";	
//}
////2.在外层块级作用域无法访问内层
//console.log( o );
//}

let tmp = 100;
//(function(){
//	let tmp = 20;
//	console.log( 20 );
//})();
//3.闭包立即执行不再必要
{
	let tmp = 20;
	console.log( tmp );
}
