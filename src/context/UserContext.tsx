'use client'
import { getUser } from '@/utils/getUser';
import { jwtDecode } from 'jwt-decode';
import { Router, User } from 'lucide-react';
import { redirect, useRouter } from 'next/navigation';
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { createContext } from 'react';
import {setCookie, getCookie, } from 'cookies-next'
import { apiService } from '@/utils/apiService';

interface userJWT {
  exp: number
}
interface AuthContextProps {
    user: User | null;
    token: string | null;
    error: string | null;
    isAuthenticated: boolean;
    login: (
    email: string,
    password: string,
    callBack: () => void
    ) => void;
    // removeUser: () => void;
    // isReady: boolean;
    loading: boolean
    isLoaded: boolean;
    // logout: () => void;
    userJWT: userJWT | null
  }
  
export interface User {
    firstName: string,
    lastName: string,
    token: string
    twoFactorEnabled: boolean
}
export const AuthContext = createContext<AuthContextProps | undefined>(
    undefined
  );
const UserContext = ({children}: {children: React.ReactNode}) => {


    const [user, setUser] = useState<User | null>( null);
    const [token, setToken] = useState<string>('');
    const [userJWT, setUserJWT] = useState<userJWT | null>( null);
const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null);

  async function loadUser(token: string) {
    if(token) {
      try {
        const resp = await apiService.get('/api/Auth/AccountView', {
          Authorization: `Bearer ${token}`
        })
        if(resp.succeeded === true) {
          setUser(resp.account)
        } else {
          
        }
        
      } catch (error) {
        
      }
setLoading(false)
    }
  }
useEffect(() => {
  const token = getCookie('token')
  setLoading(false)
if(token) {
  setLoading(true)
loadUser(token)
}
}, [ ])
const logout =() => {
  setUser(null)
  setToken('')
  setUserJWT(null)
  localStorage.clear()
  // router.push('/signin')
}
  const login = async (email: string, password: string, callback: () => void) => {
    setLoading(true)
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
          } else {
            
          }
          
        } catch (error) {
          
        }
        setCookie('token', resp.token, {expires: new Date(decodeJwt.exp * 1000) })
        setToken(resp.token);
       return callback()
     } else {
      setError(resp.responseMessage)

     }
    } catch (error) {
    }
  };


      const authContextValue: AuthContextProps = {
        user,
        token,
        login,
        loading,
        error,
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