import React, { useEffect, useState } from 'react'
import qs from 'qs'

import { List } from "./list"
import { SearchPanel } from "./search-panel"
import { cleanObject, useMount, useDebounce } from 'utils'

const Url = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
  const [users, setUsers] = useState([])

  const [param, setParam] = useState({
    name: '',
    uid: ''
  })

  const debounceParam = useDebounce(param, 500)

  const [list, setList] = useState([])

  useEffect(() => {
    fetch(`${Url}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async res => {
      if (res.ok) {
        setList(await res.json())
      }
    })
  }, [debounceParam])

  useMount(() => {
    fetch(`${Url}/users`).then(async res => {
      if (res.ok) {
        setUsers(await res.json())
      }
    })
  })

  return <div>
    <SearchPanel users={users} param={param} setParam={setParam} ></SearchPanel>
    <List users={users} list={list}></List>
  </div>
}
