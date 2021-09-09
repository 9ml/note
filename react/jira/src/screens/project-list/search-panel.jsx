import React from 'react'

export const SearchPanel = ({users, param, setParam}) => {
  

  
  

  return (
    <form>
      {/* setParam(Object.assign({}, param, { name: evt.target.value })) */}
      <input type="text" value={param.name} onChange={evt => setParam({
        ...param,
        name: evt.target.value
      })} />
      <select value={param.uid} onChange={evt => setParam({
        ...param,
        uid: evt.target.value
      })}>
        <option value={''}>负责人</option>
        {
          users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
        }
      </select>
    </form>
  )
}
