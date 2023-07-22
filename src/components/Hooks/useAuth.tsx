import React, { useEffect, useState } from 'react'
import { useAppDispatch } from './useApp';

export const useAuth = (userData: any) => {
  const [isLoading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(false);

  // const dispatch = useAppDispatch();

  useEffect(() => {

    setLoading(true);

    const getAuthToken = async () => {
      const response = await await fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(userData)
      })
      const result = await response.json();
      setLoading(false);
      setIsAuth(true);
      setToken(result.token);
    }

    getAuthToken();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    isLoading,
    isAuth,
    token
  }
}
