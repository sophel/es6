//const
//1.声明时赋值
const PI = 3.1415926
//2.不可赋值
//PI = 3;
//3.const对象，只是说const常量里保存的内存地址不变，内存地址指向的内存块里的内容仍然可以改变
const foo = {};
foo.name = 'mm';
//4.真正保持一个对象不改变，需要用freeze+递归冻结对象及其属性
//function constantize( obj ){
//	//console.log( obj );
//	Object.freeze( obj );
//	Object.keys( obj ).forEach( function( key,index ){
//		if(  typeof obj[key] ==="object" ){
//			constantize( obj[key] );
//		}
//	} );
//}
