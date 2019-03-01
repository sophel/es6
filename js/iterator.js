//1.为各种集合类数据提供一个统一、简便的访问接口
//2.使数据集合的成员能够按某种次序排列
//3.ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费

//1.1模拟遍历器的实现
//用普通函数模拟next
function makeIterator( arr ){
  let index = 0;
  return {
    next:function(){
      return index<arr.length?{ value:arr[index++],done:false }:{value:undefined,done:true};
    }
  };
}
let mi = makeIterator( ['aa','bb'] );
// console.log( mi.next() );
// console.log( mi.next() );
// console.log( mi.next() );
//用generator实现接口
function* makeIterator2( arr ){
  for( let i=0;i<arr.length;i++ ){
    yield arr[i];
  }
  return undefined;
}
let mi2 = makeIterator2( ['aa','bb'] );
// console.log( mi2.next() );
// console.log( mi2.next() );
// console.log( mi2.next() );
//不管是用function模拟next,还是ES6的generator,本质上是返回一个遍历器对象，其next方法可以访问集合里的顺序项
//部署了Symbol.iterator的数据结构均可实现for...of
//let arr = [1,2,3];
// for( let v of arr ){
//   console.log( v );
// }
//对象的Symbol.iterator属性，指向该对象的默认遍历器方法
const obj = {};
obj[Symbol.iterator] = function*(){
  yield 1;
  yield 2;
  yield 3;
  //return undefined;
}
//部署了Symbol.iterator属性,for...of可以直接用，但next不能直接用，要用在Symbol.iterator()执行后返回的遍历器对象上
// for( let v of obj ){
//   console.log( v ); 
// }
// const oi = obj[Symbol.iterator]();
// console.log( oi.next() );
// console.log( oi.next() );
// console.log( oi.next() );
// console.log( oi.next() );

const arr = ['apple','orange','banana'];
// for( let v of arr ){
//   console.log( v );
// }
//调用属性方法，返回iterator接口则可调用next
let iter_arr = arr[Symbol.iterator]();
console.log( iter_arr.next() );
console.log( iter_arr.next() );
console.log( iter_arr.next() );
console.log( iter_arr.next() );
console.log( iter_arr.next() );







