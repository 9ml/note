/**
 * JQuery 类型定义文件
 * declare 定义全局类型
 */
/**
 * 
 
// 定义全局变量
// declare var $: (param: () => void) => void

// 函数重载--------------------------------------------------------
// 定义全局函数
declare function $(readFunc: () => void): void

// declare function $(selector: string): {
//   html: (html: string) => {}
// }
interface JqueryInstance {
  html: (html: string) => JqueryInstance
}
declare function $(selector: string): JqueryInstance

// new $.fn.init() 对 类和对象进行类型定义 以及命名空间的嵌套
declare namespace $ {
  namespace fn {
    class init {}
  }
}
// / 函数重载-------------------------------------------------------

// 使用 interface 实现函数重载
// interface JQuery {
//   (readFunc: () => void): void
//   (selector: string): JqueryInstance
// }
// declare var $: JQuery

* 
 */