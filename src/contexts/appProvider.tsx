import { createContext, useCallback, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Auth } from '@/pages'

const TOKEN_STORAGE_KEY = 'callquality_token'
const APP_THEME = 'callquality_theme'

export const getTokenFromStorage = (): string => localStorage.getItem(TOKEN_STORAGE_KEY) || ''
export const setTokenToStorage = (token: string) => localStorage.setItem(TOKEN_STORAGE_KEY, token)

export const getThemeFromStorage = (): string => localStorage.getItem(APP_THEME) || ''
export const setThemeToStorage = (theme: string) => localStorage.setItem(APP_THEME, theme)

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
  const [token, setTokenInner] = useState(getTokenFromStorage() || '')
  const [theme, setThemeInner] = useState<'dark' | 'light'>(getThemeFromStorage() as 'dark' | 'light' || 'light')

  const setToken = useCallback((token: string) => {
    setTokenInner(token)
    setTokenToStorage(token)
  }, [setTokenInner])

  const setTheme = useCallback((theme: 'dark' | 'light') => {
    setThemeInner(theme)
    setThemeToStorage(theme)
  }, [setThemeInner])

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
