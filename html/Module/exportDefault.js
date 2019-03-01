//用户无需提前约定接口名
//输出匿名函数
//export default function () {
//console.log('foo');
//}
//输出具名函数
//一个模块只能有一个默认输出
//export default不能跟变量声明语句。
export default function foo() {
	console.log('foo');
}
let fn = 'Ma';
let ln = 'Shaoling';
export { fn,ln }
