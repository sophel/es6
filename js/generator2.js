//1.generator是一个状态机
//2.generator是一个遍历器生成函数
function* stateFac(){
  yield 'start';
  yield 'processing';
  yield 'finish';
}
//yield只能用在状态机函数里
// function test(){
//   yield 'a';
// }
let states = stateFac();
// console.log( states.next() );
//与iterator的关系
let myIterable = {};
//用generator实现遍历器接口
myIterable[Symbol.iterator] = function* (){
  yield 'start';//yield的底层也是用next方式实现的
  yield 'processing';
  yield 'finish';
}
// for( let v of myIterable ){
//   console.log( v );
// }
//console.log( [...myIterable] );
//用next来实现
let myIterable2 = {
  [Symbol.iterator]:function(){
    return this;
  },
  index:0,
  data:['Volvo','BMW','Benz'],
  next:function(){//要想给for...of或者...识别，next返回的必须是对象
    return this.index<this.data.length?{value:this.data[ this.index++ ],isdone:false}:{value:undefined,isdone:true};
  }
};
//generator实现semi-coroutine半协程
//主要是因为next函数可以接受参数，可以实现状态机的内部注入，进而改变里面的运行顺序
function* f( x ){
  let y = 2*(yield(x+1));
  let z = yield(y/3);
  return x+y+z;
}
let a = f(5);
console.log( a.next() );
console.log( a.next( 12 ) );//将12当做上一个yield表达式的返回值







