import { axiosInstance } from '../../utils/AxiosInstance';

export function searchList(data) {
  return axiosInstance().post('/api/tender/search', data);
}

export function searchListWithMeta(data) {
  return axiosInstance().post('/api/tender/filter', data);
}

export function fetchAllProvinces() {
  return axiosInstance().get('/api/global/option/province');
}
