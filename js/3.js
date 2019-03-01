function f() { console.log('I am outside!'); }

(function () {
  if (false) {
    //函数声明
    //1.在支持es6的浏览器下，函数声明被解析为：var f = function(){...}
    function f() { console.log('I am inside!'); }
  	//2.在es6环境下（如node里），函数声明被解释为let函数表达式
  	//let f = function(){...},符合块级作用域规则
  	//3.推荐使用函数表达式
  }

  f();
}());