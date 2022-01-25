import axios from 'axios';

export const verifyUser = async (setContext: (e: any) => void, user: { token: string; }) => {
  if (user.token) return
  try {
    const response = await axios.post('/api/auth/refreshToken');
    const { data } = response;
    setContext((prev: any) => ({...prev, token: data.token }) );
  } catch (error) {
    setContext((prev: any) => ({...prev, token: null }) );
  }
}