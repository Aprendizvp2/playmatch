import { useDispatch } from 'react-redux';
import { logout, setCredentials } from '../store/authSlice';
import { router } from 'expo-router';

export const useAuthActions = () => {
  const dispatch = useDispatch();

  const login = (payload: { token: string; user: any }) => {
    dispatch(setCredentials(payload));
  };

  const signOut = () => {
    dispatch(logout());
    router.push('/(auth)/signin');
  };

  return { login, signOut };
};
