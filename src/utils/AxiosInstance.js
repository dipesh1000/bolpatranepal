import axios from 'axios';
// import Store from "../redux/store";
// import { baseUrl } from "./baseUrl";

export const axiosInstance = () => {
  const baseUrl = `http://localhost:5000`;

  // const store = Store.getState();
  // const token = store.auth.token;
  const token = localStorage.getItem('token');
  let headers = {
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
