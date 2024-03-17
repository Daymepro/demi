import { User } from "@/context/UserContext";
import { BASE_URL, apiService } from "./apiService";
import { deleteCookie, getCookie, setCookie, getCookies } from "cookies-next";
import { jwtDecode } from "jwt-decode";

export interface UpstreamApiResponse {
    status: number
    data: any
    isSuccess: boolean
    error?: string
    exception?: Error
}
export const saveToken = (token: string) => {
    setCookie("token", token);
    localStorage.setItem("token", token);
  };
  
  export const getToken = () => {
    const cookieToken = getCookie("token");
    if (typeof window !== "undefined") {
      return localStorage.getItem("token") === cookieToken ? cookieToken : null;
    }
    return cookieToken;
  };
  
  export const clearToken = () => {
    deleteCookie("token");
    localStorage.removeItem("token");
  };
  

export interface TypedUpstreamApiResponse<T> extends UpstreamApiResponse{
    data: T
    error: any
}
export interface BackendAPIResponse<T> extends TypedUpstreamApiResponse<APIResponseData<T>> {
}
export interface APIResponseData<T> {
    data: T
    message: string
    status: string
}

export const normalizeError = <T>(response: TypedUpstreamApiResponse<any>): BackendAPIResponse<T> => {
    if (!response.data || response.data.status !== 'ok') {
        response.error = response.data?.error || response.data?.message || 'An error occured, please try again'
    }
    return response
}

export const getUser = async (token: string) => {
  const user = jwtDecode(token);
    return user
  };