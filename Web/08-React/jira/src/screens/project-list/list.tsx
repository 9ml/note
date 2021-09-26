import React from "react"

import { User } from './search-panel'

interface Project {
  id: string
  name: string
  uid: string
  pin: boolean
  organization: string
}

interface ListProps {
  users: User[]
  list: Project[]
}

export const List = ({users, list}: ListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {
          list.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{users.find(user => user.id === item.uid)?.name || '未知'}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
