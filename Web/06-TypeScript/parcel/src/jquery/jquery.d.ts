// ES6 模块化
declare module 'jquery' {

  interface JqueryInstance {
    html: (html: string) => JqueryInstance
  }

  // $ 混合类型
  // 函数重载
  function $(readFunc: () => void): void
  function $(selector: string): JqueryInstance

  namespace $ {
    namespace fn {
      class init {}
    }
  }

  export = $
}

