import React from 'react'

import './demo.css'

export default class Comment extends React.Component {
  state = {
    user: '',
    comment: '',
    cmtList: []
  }

  // 渲染评论列表
  renderList() {
    return this.state.cmtList.length === 0
    ? (<div className="no-comment">快来抢评论吧</div>)
    : (<ul>
      {
        this.state.cmtList.map(i => (
          <li key={ i.id }>
            <h3>评论人：{ i.user }</h3>
            <p>评论内容：{ i.comment }</p>
          </li>
        ))
      }
      </ul>)
  }

  handleChange = e => {
    // const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  submit = () => {
    const { user, comment, cmtList } = this.state
    if (!user || !comment) {
      return alert('请输入评论信息')
    }
    const newList = [{
      id: cmtList.length + 1,
      user,
      comment,
    }, ...cmtList]
    this.setState({
      cmtList: newList,
      user: '',
      comment: ''
    })


    // cmtList.push({
    //   id: cmtList.length + 1,
    //   user,
    //   comment
    // })
    // this.setState({
    //   cmtList,
    //   user: '',
    //   comment: ''
    // })
  }

  render() {
    const { user, comment } = this.state
    return(
      <div>
        <input type="text" placeholder="请输入评论人" name="user" value={ user } onChange={ this.handleChange } />
        <br />
        <textarea type="text" placeholder="请输入评论内容" name="comment" value={ comment } onChange={ this.handleChange } />
        <br />
        <button onClick={ this.submit }>发表评论</button>
        {/* {
          this.state.cmtList.length === 0
          ? (<div className="no-comment">快来抢评论吧</div>)
          : (<ul>
            {
              this.state.cmtList.map(i => (
                <li key={ i.id }>
                  <h3>评论人：{ i.user }</h3>
                  <p>评论内容：{ i.comment }</p>
                </li>
              ))
            }
            </ul>)
        } */}
        { this.renderList() }

      </div>
    )
  }
}