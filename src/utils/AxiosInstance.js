import axios from 'axios';
// import Store from "../redux/store";
// import { baseUrl } from "./baseUrl";

export const axiosInstance = () => {
  const baseUrl = process.env.REACT_APP_BOLPATRA;

  const token = localStorage.getItem('token');
  let headers = {
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return axios.create({
    baseURL: baseUrl,
    headers,
  });
};
