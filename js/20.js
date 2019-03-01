class IncreasingCounter {
	//实例属性依然建议写在contructor里
	constructor(){
		this._count = 0;
	}
  get count() {
    return this._count;
  }
  set count( val ) {
    this._count = val;
  }
}
let c = new IncreasingCounter( 0 );
console.log( c.count );
c.count = 5;
console.log( c.count );