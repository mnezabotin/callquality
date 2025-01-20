import { useContext, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
// import { useQueryLogin } from '@/queries'

export const Auth = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [code, setCode] = useState('')

  // const { data, isError } = useQueryLogin(code)

  useEffect(() => {
    if (!code) {
      setCode(searchParams.get('code') || '')
      setSearchParams()
    }
  }, [code, searchParams])

  // useEffect(() => {
  //   if (data) {
  //     setToken(data?.session_token || '')
  //   }
  // }, [data])

  return (
    <div />
  )
}
