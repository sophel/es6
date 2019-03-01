//generator生成器
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  yield 'nice';
  return 'ending';
}
let hw = helloWorldGenerator();//function*用于生成iterator接口
//next方法返回一个对象，内含yield返回值和isdone属性，这是es6内部构建的
// console.log( hw.next() );
// console.log( hw.next() );
// console.log( hw.next() );
// console.log( hw.next() );
// for( let v of hw ){//实现了iterator接口的数据结构，可以用for...of来遍历
//   console.log( v );
// }

//语法糖：功能没变，增加了程序的易读性
//generator可以接收参数？
function* states( states ){
  if( states instanceof Array ){
    for( let state of states ){//for..of里取到的是value
      yield state;
    }
    return 'ending';
  }
}
let s = states( ['start','processing','finish'] );
// for( let state of s ){
//   console.log( state );
// }

//generator的互相调用
function* func1(){
  yield 'd';
  yield 'e';
  yield 'f';
  return 'end';
}
function* func2(){
  yield 'a';
  yield 'b';
  yield 'c';
  //在一个generator里调用另一个generator需要用到yield*表达式，直接调用没有任何效果
  yield* func1();//返回新的next指针
  return 'end';
}
let f2 = func2();
// for( let v of f2 ){
//   console.log( v );
// }
//generator“抹平”多维数组——递归实现
function* flat( arr ){
  for( let i=0;i<arr.length;i++ ){
    if( arr[i] instanceof Array ){
      yield* flat( arr[i] );
    }else{
      yield arr[i];
    }
  }
}
let fl = flat(['a','b',['e','f',[1,2,[3,4]]],'c','d']);
for( let v of fl ){
  console.log( v );
}
let o = {name:'msl',age:26};
//给数据部署generator时，yield什么，则for...of遍历返回什么
function* IteratorObject( obj ){
  if( typeof obj === "object" ){
    for( let prop in obj ){
      yield obj[prop];
      //yield prop;
    }
    return 'end';
  }else return;
}
const io = IteratorObject( o );
//for...of的本质就是在调用next()方法，因此这两个不能一起用
// for( let prop of io ){
//   console.log( prop );
// }
console.log( io.next() );
console.log( io.next() );
console.log( io.next() );



  