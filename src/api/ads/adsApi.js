import { axiosInstance } from '../../utils/AxiosInstance';

export function fetchAllAds() {
  return axiosInstance().get('/api/earn/front');
}
