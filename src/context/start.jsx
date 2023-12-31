import { createContext, useState } from 'react'

export const host = 'http://localhost:8000'
export const url = 'http://localhost:8000/'
export const img_url = ''
export const State = createContext()

export const StatePriveder = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem('access')) || ''
  )
  const [headerModal, setHeaderModal] = useState(false)
  const [headerSearch, setHeaderSearch] = useState(false)
  const [count, setCount] = useState(0)

  const data = {
    token,
    setToken,
    headerModal,
    setHeaderModal,
    headerSearch,
    setHeaderSearch,
    count,
    setCount
  }

  return <State.Provider value={data}>{children}</State.Provider>
}
