import axios from "axios";
import { config } from "../config";



const axiosInstance = {
  getData: async (url, params) => {
   try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${config.baseUrl}/${url}`, {
      params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(token)
    return response.data;
   } catch (error) {
    return error
   }
  },
  postData: async (url, payload) => {
   try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${config.baseUrl}/${url}`, payload,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
   } catch (error) {
    return error
   }
  },
  transaction: async (url, payload) => {
   try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${config.imageUrl}/${url}`, payload,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
   } catch (error) {
    return error
   }
  },
  login: async (url, payload) => {
    try {
      const response = await axios.post(`${config.baseUrl}/${url}`, {
        email: payload.email,
        password: payload.password,
      });
      return response.data;
    } catch (error) {
      return error;
    }
  },
  register: async ( payload) => {
    try {
      const response = await axios.post(`${config.baseUrl}/users/register`, {
        name: payload.name,
        email: payload.email,
        password: payload.password,
      });
      return response.data;
    } catch (error) {
      return error;
    }
  },
};

export default axiosInstance;
