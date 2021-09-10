// 在真实环境中，如果使用 firebase 这种第三方 auth 服务的话，本文件不需要开发。
import { User } from 'screens/project-list/search-panel'

const localStorageKey = '__auth_provider_token__'

export const getToken = () => window.localStorage.getItem(localStorageKey)

export const handleUserResponse = ({user}: {user: User}) => {
  window.localStorage.setItem(localStorageKey, user.token || '')
  return user
}

const Url = process.env.REACT_APP_API_URL

export const login = (data: {username: string, password: string}) => {
  fetch(`${Url}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(async res => {
    if (res.ok) {
      return handleUserResponse(await res.json())
    }
  })
}

export const register = (data: {username: string, password: string}) => {
  fetch(`${Url}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(async res => {
    if (res.ok) {
      return handleUserResponse(await res.json())
    }
  })
}

export const logout = () => window.localStorage.removeItem(localStorageKey)
