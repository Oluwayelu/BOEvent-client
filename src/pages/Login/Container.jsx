import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { Auth } from 'components/layout';
import { useQuery, useToast } from 'hooks';
import { LOGIN } from 'api/users/mutations';
import { loginSchema } from 'utils/validations';

import LoginView from './View';

export const LoginContainer = () => {
  const query = useQuery();
  const { toast } = useToast();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(loginSchema),
  });

  const [loginUser, { loading }] = useMutation(LOGIN);
  const onSubmit = ({ email, password }) => {
    loginUser({ variables: { email, password } })
      .then((res) => {
        localStorage.setItem('token', res.data.login?.token);
        const redirect = query.get('redirect');
        if (redirect) {
          navigate(redirect);
        }
        window.location.reload();
      })
      .catch((err) => {
        toast('error', err?.message);
      });
  };

  return (
    <Auth title="Login">
      <LoginView
        errors={errors}
        loading={loading}
        register={register}
        onSubmit={handleSubmit(onSubmit)}
      />
    </Auth>
  );
};
