'use client'
import { getUser } from '@/utils/getUser';
import { jwtDecode } from 'jwt-decode';
import { User } from 'lucide-react';
import { redirect } from 'next/navigation';
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { createContext } from 'react';


interface userJWT {
  exp: number
}
interface AuthContextProps {
    user: User | null;
    token: string | null;
    error: string | null;
    // isAuthenticated: () => boolean;
    initializeUser: (
      userData: User,
      callback: () => void
    ) => void;
    // removeUser: () => void;
    // isLoading: boolean;
    // isReady: boolean;
    isLoaded: boolean;
    // logout: () => void;
    userJWT: userJWT | null
  }
  
export interface User {
    name: string,
    token: string
    exp: number
}
export const AuthContext = createContext<AuthContextProps | undefined>(
    undefined
  );
const UserContext = ({children}: {children: React.ReactNode}) => {


    const [user, setUser] = useState<User | null>( null);
    const [token, setToken] = useState<string>('' );
    const [userJWT, setUserJWT] = useState<userJWT | null>( null);

  const [error, setError] = useState<string | null>(null);


  const getUser = async (token: string) => {
    const user = jwtDecode(token) as userJWT;
    setUserJWT(user)
    localStorage.setItem('userJWT', JSON.stringify(user))


  }
  useEffect(() => {
setUser(JSON.parse(localStorage.getItem('user') as string) as unknown as User)
setToken(JSON.parse(localStorage.getItem('token') as string) as string)
setUserJWT(JSON.parse(localStorage.getItem('userJWT') as string) as unknown as userJWT )
  }, [])
  function calculateTimeRemaining() {
    const now = Math.floor(Date.now() / 1000);
    if(userJWT)
    return Math.max(0, userJWT.exp - now); 
}
useEffect(() => {
  const remainingTime = calculateTimeRemaining();
  console.log(remainingTime)
  if(remainingTime)
  setTimeout(() => logout(), remainingTime * 1000);
}, [])

const logout =() => {
  setUser(null)
  setToken('')
  setUserJWT(null)
}
  const initializeUser = async (
    userData: User,
    callback: () => void
  ) => {
    setUser(userData)
    setToken(userData.token);
    getUser(userData.token)
    localStorage.setItem('user', JSON.stringify(userData))
    localStorage.setItem('token', JSON.stringify(userData.token))


    callback()
  };


      const authContextValue: AuthContextProps = {
        user,
        token,
        initializeUser,
        error,
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