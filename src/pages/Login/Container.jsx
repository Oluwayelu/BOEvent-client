import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { useQuery } from 'hooks';
import { Auth } from 'components/layout';
import { LOGIN } from 'api/users/mutations';
import { loginSchema } from 'utils/validations';

import LoginView from './View';

export const LoginContainer = () => {
  const query = useQuery();
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

  const [loginUser, { loading, error, data }] = useMutation(LOGIN);
  const onSubmit = ({ email, password }) => {
    loginUser({ variables: { email, password } }).then((res) => {
      localStorage.setItem('token', res.data.login?.token);
      const redirect = query.get('redirect');
      console.log(redirect);
      if (redirect) {
        navigate(redirect);
      }
      window.location.reload();
    });
  };

  return (
    <Auth title="Login">
      <LoginView
        errors={errors}
        loading={loading}
        register={register}
        sucMsg={data?.message}
        errMsg={error?.message}
        onSubmit={handleSubmit(onSubmit)}
      />
    </Auth>
  );
};
