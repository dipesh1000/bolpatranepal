import { axiosInstance } from '../../utils/AxiosInstance';

export function getAllTender(page) {
  return axiosInstance().get(`/api/tender?page=${page}`);
}

export function getSingleTendor(params) {
  return axiosInstance().get(`/api/tender/${params}`);
}

export function getAllTenderByUserInterest() {
  return axiosInstance().get('/api/tender/user-interest-tenders');
}

export function getFilterInterestTender() {
  return axiosInstance().get('/api/tender/user-interest-filter');
}
