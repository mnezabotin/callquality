import { createContext, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Auth } from '@/pages'

const TOKEN_STORAGE_KEY = 'callquality_token'

export const getTokenFromStorage = (): string => localStorage.getItem(TOKEN_STORAGE_KEY) || ''
export const setTokenToStorage = (token: string) => localStorage.setItem(TOKEN_STORAGE_KEY, token)

export type AppContextType = {
  token: string
  setToken: (token: string) => void
  theme: 'dark' | 'light'
  setTheme: (theme: 'dark' | 'light') => void
}

export const appContext = createContext<AppContextType | null>(null)

type Props = {
  children: JSX.Element | JSX.Element[]
}

export const AppProvider = ({
  children,
}: Props): JSX.Element | null => {
  const [token, setToken] = useState('1')
  const [theme, setTheme] = useState<'dark' | 'light'>('light')

  return (
    <appContext.Provider
      value={{
        token,
        setToken,
        theme,
        setTheme,
      }}>
      {token ? (
        <>
          {children}
        </>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path='/auth' element={<Auth />} />
            <Route path='*' element={<Navigate to='/auth' replace />} />
          </Routes>
        </BrowserRouter>
      )}
    </appContext.Provider>
  )
}
