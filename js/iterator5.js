//可以修改原生的遍历器以达到定制需求
const arr1 = ['aa','bb','cc'];
arr1[ Symbol.iterator ] = function(){
  let index = 0;
  let self = this;
  return {
    next:function(){
      return  index<self.length?{value:index++,done:false}:{value:undefined,done:true};
    }
  };
}
for( let v of arr1 ){
  console.log( v );
}
console.log([...arr1]);
arr1.forEach( (v,i)=>{
  console.log( v );
  // console.log( i );
} );

