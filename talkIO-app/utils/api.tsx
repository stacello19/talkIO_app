import axios from 'axios';

export const getApi = (url: string, token: string) => axios.get(url, { withCredentials: true, headers: {
  "Authorization": `Bearer ${token}`
} }).then((response) => response.data);