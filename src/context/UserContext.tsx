'use client'
import { getUser } from '@/utils/getUser';
import { jwtDecode } from 'jwt-decode';
import { Router, User } from 'lucide-react';
import { redirect, useRouter } from 'next/navigation';
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { createContext } from 'react';
import {setCookie, getCookie,deleteCookie } from 'cookies-next'
import { apiService } from '@/utils/apiService';
interface userJWT {
  exp: number
}
interface AuthContextProps {
    user: User | null;
    token: string | null;
    error: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (
    email: string,
    password: string,
    callBack: () => void
    ) => void;
    // removeUser: () => void;
    // isReady: boolean;
    loading: boolean
    isLoaded: boolean;
    logout: () => void;
    userJWT: userJWT | null,
    setUser: React.Dispatch<React.SetStateAction<User | null>>
  }
  
export interface User {
    firstName: string,
    lastName: string,
    token: string
    twoFactorEnabled: boolean,
    email: string
}
export const AuthContext = createContext<AuthContextProps | undefined>(
    undefined
  );
const UserContext = ({children}: {children: React.ReactNode}) => {


    const [user, setUser] = useState<User | null>( null);
    const [token, setToken] = useState<string>('');
    const [userJWT, setUserJWT] = useState<userJWT | null>( null);
const [loading, setLoading] = useState<boolean>(true)
const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null);
const router = useRouter()
  async function loadUser(token: string) {
    if(token) {
      try {
        const resp = await apiService.get('/api/Auth/AccountView', {
          Authorization: `Bearer ${token}`
        })
        if(resp.succeeded === true) {
          setUser(resp.account)
          setToken(token)
          console.log(resp)
        } else {
          logout()
        }
        
      } catch (error) {
        
        logout()
      }
setLoading(false)
    } else {
      logout()
      setLoading(false)
    }
  }
useEffect(() => {
  const token = getCookie('token')
  setLoading(false)
if(token) {
  setLoading(true)
loadUser(token)
} else {
  logout()
}
}, [ ])
const logout =() => {
  setUser(null)
  setToken('')
  setUserJWT(null)
  deleteCookie('token')
  
}
  const login = async (email: string, password: string, callback: () => void) => {
    setLoading(true)
    setIsLoading(true)
    try {
     const resp = await apiService.post('/api/Auth/Signin', {email, password})
     if(resp.succeeded === true) {
        const decodeJwt = jwtDecode(resp.token)
        if(!decodeJwt.exp) return
        try {
          const user = await apiService.get('/api/Auth/AccountView', {
            Authorization: `Bearer ${resp.token}`
          })
          if(resp.succeeded === true) {
            setUser(user.account)
            setIsLoading(false)
          } else {
            setIsLoading(false)
            
          }
          
        } catch (error) {
          setIsLoading(false)
          
        }
        setCookie('token', resp.token, {expires: new Date(decodeJwt.exp * 1000) })
        setToken(resp.token);
       return callback()
     } else {
      setError(resp.responseMessage)
     }
    } catch (error) {
      setIsLoading(false)

    }
  };


      const authContextValue: AuthContextProps = {
        user,
        token,
        login,
        loading,
        error,
        setUser,
        logout,
        isLoading,
        isAuthenticated: !!user,
        userJWT,
        isLoaded: !!(user || token)
      };
      return (
        <AuthContext.Provider value={authContextValue}>
          <div>{children}</div>
        </AuthContext.Provider>
      );
}

export default UserContext


export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  }