//import引用里面路径的特殊性，同级需要用./来引用
//console.log( fn );
//console.log( ln );
//console.log( year );
//console.log( getWholeName() );
//import{fn,ln,year,getWholeName} from './profile.js'
//逐一加载
//import { area, circumference } from './circle';
//整体加载，接口对象是静态的，不允许随意扩展、修改属性
//import * as circle from './circle.js'
//console.log( circle.area(1) );
//console.log( circle.circumference(1) );
//为匿名模块指定任意名字
//import命令可以为该匿名函数指定任意名字
//export default导出的内容不用{}来接收
//export直接导出，需要{}来接收接口
//普通导入与default导入混用
//import _,{fn,ln} from './exportDefault.js'
//_();
//console.log( fn+' '+ln );
//import {Person} from './exportClass.js'
//import Person from './exportClass.js'
//let p = new Person( 'Micheal Jackson','male' );
//p.printInfo();
//export与import合用
//export...from...
//接收转发的default不需要{}
//import Person,{log} from './exportImport.js'
//let p = new Person( 'Micheal Jackson','male' );
//p.printInfo();
//log();
//import *后面一定要跟as 对象，作为接收接口
import * as holder from './exportAll.js'
console.log( holder.PI );
holder.default();
//import无法实现动态加载

