/**
 * 命名空间
 */

/// <reference path="./components.ts" />

namespace Home {

  export namespace Ml {
    export const gml: Components.User = {
      name: '9ml'
    }
  }

  export class Page {
    constructor() {
      new Components.Header()
      new Components.Content()
      new Components.Footer()
    }
  }
}
