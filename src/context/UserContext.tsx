'use client'
import { getUser } from '@/utils/getUser';
import { jwtDecode } from 'jwt-decode';
import { User } from 'lucide-react';
import React, { useCallback, useContext, useState } from 'react'
import { createContext } from 'react';


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
    // reloadContext: () => void;
    // isLoading: boolean;
    // isReady: boolean;
    // isLoaded: boolean;
    // logout: () => void;
  }
  
export interface User {
    name: string,
    token: string
}
export const AuthContext = createContext<AuthContextProps | undefined>(
    undefined
  );
const UserContext = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const getUser = async (token: string) => {
    const user = jwtDecode(token);
    console.log(user)
    // setUser(user)
    //   return user

  }

  const initializeUser = async (
    userData: User,
    callback: () => void
  ) => {
 
    setToken(userData.token);
    getUser(userData.token)

    callback()
  };


      const authContextValue: AuthContextProps = {
        user,
        token,
        initializeUser,
        error
 
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