import { axiosInstance } from '../../utils/AxiosInstance';

export function userLogin(data) {
  return axiosInstance().post('/api/auth/login', data);
}

export function profileUpdate(data) {
  return axiosInstance().post('/api/user/update', data);
}

export function userProfileDetails() {
  return axiosInstance().get('/api/user/profile');
}

export function userRegister(data) {
  return axiosInstance().post('/api/auth/register', data);
}

export function userOtpRequest(data) {
  return axiosInstance().post('/api/auth/request-otp', data);
}

export function userOtpVerify(data) {
  return axiosInstance().post('/api/auth/verify-user', data);
}

export function userLogout({ data }) {
  return axiosInstance().post('/api/auth/logout', data);
}
