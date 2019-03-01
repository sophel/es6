let proto = {
	foo:'proto_foo'
};
let obj = {
	name:'msl'
};
Object.setPrototypeOf( obj,proto );
console.log( obj );
