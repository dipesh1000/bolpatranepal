import { axiosInstance } from '../../utils/AxiosInstance';

export function addUserWishList(data) {
  return axiosInstance().post('/api/user/wishlist-store', data);
}

export function fetchAllUsersWishlist() {
  return axiosInstance().get('/api/user/all-wishlists');
}

export function removeSavedWishList(data) {
  return axiosInstance().post('/api/user/wishlist-delete', data);
}

export function getFilterWishListTender() {
  return axiosInstance().get('/api/tender/user-wishlist-filter');
}
