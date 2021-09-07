import React from 'react'

export default class Form extends React.Component {
  state = {
    inputText: '',
    textarea: '',
    city: 3,
    isChecked: false
  }
  inputTextChange = e => {
    this.setState({
      inputText: e.target.value
    })
  }

  textareaChange = e => {
    this.setState({
      textarea: e.target.value
    })
  }

  selectChange = e => {
    this.setState({
      city: e.target.value
    })
  }

  checkboxChange = e => {
    this.setState({
      isChecked: e.target.checked
    })
  }

  // 优化为一个事件处理
  handleChange = e => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({
      [e.target.name]: value
    })
  }
 
  render() {
    return (
      <div>
        {/* 文本框 */}
        <input type="text" name="inputText" value={ this.state.inputText } onChange={ this.inputTextChange } />
        <br />
        {/* 富文本 */}
        <textarea name="textarea" value={ this.state.textarea } onChange={ this.textareaChange }></textarea>
        <br />
        {/* 下拉框 */}
        <select name="city" value={ this.state.city } onChange={ this.selectChange }>
          <option value="1">上海</option>
          <option value="2">广州</option>
          <option value="3">深圳</option>
          <option value="4">北京</option>
        </select>
        <br />
        {/* 复选框 */}
        <input name="isChecked" type="checkbox" checked={ this.state.isChecked } onChange={ this.checkboxChange } />
      </div>
    )
  }
}
