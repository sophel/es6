//class类定义iterator接口
class range{
  constructor( start,end ){
    this.start = start;
    this.end = end;
  }
  [Symbol.iterator](){
    let value = this.start;
    let self = this;
    return {
      next(){
        return value>self.end?{value:undefined,done:true}:{value:value++,done:false};
      }
    }
  }
}
let r1 = new range( 1,5 );
// let iter = r1[Symbol.iterator]();
// console.log( iter.next() );
// console.log( iter.next() );
// console.log( iter.next() );
// console.log( iter.next() );
// console.log( iter.next() );
// console.log( iter.next() );
// console.log( iter.next() );
//for..of底层会自动去调[Symbol.iterator]方法，生成一个迭代器对象，但如果程序中自己要显式调用时
//需要手动去执行[Symbol.iterator]方法
//所谓的迭代器：一个包含next方法的对象，如果对象自己包含next方法呢？
class sequence{
  constructor( start,end ){
    this.start = start;
    this.end = end;
  }
  [Symbol.iterator](){ return this; }
  next() {
    //改变了自身的start属性值
    const value = this.start;
    if( this.start<= this.end ){
      this.start++;
      return{ value:value,done:false };
    }
    return{ value:undefined,done:true };
  }
}
const s = new sequence( 3,8 );
console.log( s );

const obj = {};
// Result of the Symbol.iterator method is not an object
obj[Symbol.iterator] = ()=>1;
console.log(...obj);


