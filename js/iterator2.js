//给对象实现iterator接口
const person = {
  name:'msl',
  age:29,
  company:'JD',
};
//接口实现方式1
person[Symbol.iterator] = function(){
  const keylist = ['name','age','company'];
  let index = 0;
  return {//记住，自定义函数返回遍历接口对象也好，利用generator也行，next返回的数据必须符合
    //{value:val,done:boolean}格式，否则，for...of接口将执行失败
    next:function(){
      return index<keylist.length?{ value:person[keylist[index++]],done:false }:{value:undefined,done:true};
    }
  };
};
//接口实现方式2，generator
// person[Symbol.iterator] = function* (){
//   const keylist = ['name','age','company'];
//   for( let i=0;i<keylist.length;i++ ){
//     yield person[ keylist[i] ];
//   }
//   //return undefined;
// }
//调用属性，生成iterator接口
let iter = person[Symbol.iterator]();
// console.log( iter.next() );
// console.log( iter.next() );
// console.log( iter.next() );
// console.log( iter.next() );
for( let v of person ){
  console.log( v );
}
