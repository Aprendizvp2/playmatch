import { useDispatch } from 'react-redux';
import { logout, setCredentials } from '../store/authSlice';

export const useAuthActions = () => {
  const dispatch = useDispatch();

  const login = (payload: { token: string; user: any }) => {
    dispatch(setCredentials(payload));
  };

  const signOut = () => {
    dispatch(logout());
  };

  return { login, signOut };
};
