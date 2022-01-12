import { axiosInstance } from '../../utils/AxiosInstance';

export function getAllProcrumentInterest() {
  return axiosInstance().get('/api/tender/interests');
}

export function storeUserInterest(data) {
  return axiosInstance().post('/api/user/user-interests-store', data);
}

export function getAllUserInterest() {
  return axiosInstance().get('/api/user/user-interests-lists');
}
