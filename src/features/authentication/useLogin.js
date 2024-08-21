import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { login as loginApi } from '../../services/apiAuth';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data.user);
      toast.success('You are logged in!');
      navigate('/dashboard', { replace: true });
    },
    onError: (err) => {
      console.error('Error', err);
      toast.error('Provided email or password are incorrect');
    },
  });

  return { login, isLoading };
}
