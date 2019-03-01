//会用到iterator接口的场合
//1.for...of循环会默认调研
//2. ...扩展运算符，可以解构所有有[Symbal.iterator]属性的集合对象
const obj = {
  data:['iphone','hw','ganlex'],
};
obj[Symbol.iterator] = function(){
  let index = 0;
  const self = this;
  return {
    next(){
      return index<self.data.length?{ value:self.data[index++],done:false }:{value:undefined,done:true};
    }
  };
}

//解构对象和数组、类数组、map、set
let arr = ['a','b','c'];//数组
let arrlike = {//类数组
  0:'11',
  1:'22',
  2:'33',
  length:3
};
//给类数组对象部署Symbol.iterator属性
arrlike[Symbol.iterator] = Array.prototype[Symbol.iterator];
//set成员是唯一的，没有重复成员
let s = new Set(['car','motor','bicycle']);//set
//map
let map = new Map([['name','msl'],['age',29],['sex','female']]);

let arr_comp = [...arr,...obj,...s,...map.values()];
//console.log( arr_comp );
//3.解构赋值会用到
// let [x,...y] = [1,2,3,4,5];
// console.log( x );
// console.log( y );
//4.yield后面接一个可遍历的结构，会调用该结构的遍历器接口
let f1 = function* (){
  yield 'a';
  yield 'b';
  yield 'c';
}
let generator = function* (){
  yield 1;
  yield* [2,3,4];
  //yield* f1();//调用其他遍历器接口得加*
  yield 5;
}
let ig = generator();
// console.log( ig.next() );
// console.log( ig.next() );
// console.log( ig.next() );
// console.log( ig.next() );
// console.log( ig.next() );
// console.log( ig.next() );
// console.log( ig.next() );


