import React from 'react'

export default class App extends React.Component {
  constructor() {
    super()

    // 创建 Ref
    this.txtRef = React.createRef()
  }
  getValue = () => {
    console.log(this.txtRef.current.value)
  }
  render() {
    return (
      <div>
        <input type="text" ref={ this.txtRef } />
        <button onClick={ this.getValue }>获取input值</button>
      </div>
    )
  }
}
