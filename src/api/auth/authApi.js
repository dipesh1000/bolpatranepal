import { axiosInstance } from '../../utils/AxiosInstance';

export function userLogin(data) {
  return axiosInstance().post('/api/user/login', data);
}
