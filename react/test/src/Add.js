import React from 'react';

export default class Add extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.handleAdd = this.handleAdd.bind(this)
  }
  handleAdd() {
    this.setState({
      count: this.state.count + 1
    })
  }
  handleAdds = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <h1>计数器：{ this.state.count }</h1>
        <button onClick={ () => this.handleAdd() }>
          +1
        </button>
        <button onClick={ this.handleAdd }>
          +1
        </button>
        <button onClick={ this.handleAdds }>
          +1
        </button>
      </div>
    )
  }
}
