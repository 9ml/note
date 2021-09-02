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
