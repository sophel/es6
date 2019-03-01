//class Person{
//	constructor( name,sex ){
//		this.name = name;
//		this.sex = sex;
//	}
//	printInfo(){
//		console.log( this.name+","+this.sex );
//	}
//}
//export { Person }
//class Person{
//	constructor( name,sex ){
//		this.name = name;
//		this.sex = sex;
//	}
//	printInfo(){
//		console.log( this.name+","+this.sex );
//	}
//}
export default class{ 
	constructor( name,sex ){
		this.name = name;
		this.sex = sex;
	}
	printInfo(){
		console.log( this.name+","+this.sex );
	}
}
function log(){
	console.log( 'logs are to print below:' );
}
export {log};
