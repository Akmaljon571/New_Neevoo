import { createContext, useEffect, useState } from 'react'

export const host = 'http://localhost:8000'
export const url = 'http://localhost:8000'
export const img_url = ''
export const State = createContext()

export const StatePriveder = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem('access')) || ''
  )
  const refresh_token = JSON.parse(localStorage.getItem('refresh')) || ''

  const [headerModal, setHeaderModal] = useState(false)
  const [headerSearch, setHeaderSearch] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (refresh_token) {
      setTimeout(() => {
        fetch(host + '/user/refresh/', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ refresh_token })
        })
          .then(response => response.json())
          .then(data => {
            if (data.access_token) {
              setToken(data.access_token)
              localStorage.setItem('access', JSON.stringify(data.access_token))
            }
          })
          .catch(error => console.error('Error:', error));
      }, 4 * 60 * 1000);
    }
  }, [token, refresh_token]);

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
