namespace Components {
  // 子命名空间
  export namespace SubComponents {
    export class test { }
  }
  // 接口
  export interface User {
    name: string
  }

  export class Header {
    constructor() {
      const elem = document.createElement('div')
      elem.innerText = 'This is a Header.'
      document.body.appendChild(elem)
    }
  }
  
  export class Content {
    constructor() {
      const elem = document.createElement('div')
      elem.innerText = 'This is a Content.'
      document.body.appendChild(elem)
    }
  }
  
  export class Footer {
    constructor() {
      const elem = document.createElement('div')
      elem.innerText = 'This is a Footer.'
      document.body.appendChild(elem)
    }
  }
}
