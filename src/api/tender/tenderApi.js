import { axiosInstance } from '../../utils/AxiosInstance';

export function getAllTender(page) {
  return axiosInstance().get(`/api/tender?page=${page}`);
}

export function getSingleTendor(params) {
  return axiosInstance().get(`/api/tender/${params}`);
}

export function fetchTenderParams() {
  return axiosInstance().get('/api/tender/procurement-category');
}

export function fetchBudgetParams() {
  return axiosInstance().get('/api/tender/budget');
}

export function fetchProjectTypeParams() {
  return axiosInstance().get('/api/tender/project-type');
}
