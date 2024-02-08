import axios from "axios";

const BASE_URL = 'https://pickerworkers.azurewebsites.net';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const apiService = {
    get: async (endpoint: string, headers: object) => {
      try {
        const response = await axiosInstance.get(endpoint, { headers });
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  
    post: async (endpoint: string, data: unknown, headers?: object) => {
      try {
        const response = await axiosInstance.post(endpoint, data, { headers });
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  
    put: async (endpoint: string, data: unknown, headers: object) => {
      try {
        const response = await axiosInstance.put(endpoint, data, { headers });
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  
    patch: async (endpoint: string, data: unknown, headers: object) => {
      try {
        const response = await axiosInstance.patch(endpoint, data, { headers });
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  
    delete: async (endpoint: string, headers: object) => {
      try {
        const response = await axiosInstance.delete(endpoint, { headers });
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  };