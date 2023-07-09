import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { Auth } from 'components/layout';
import { AUTH_LOGIN } from 'routes/CONSTANTS';
import { REGISTER } from 'api/users/mutations';
import { registerSchema } from 'utils/validations';

import RegisterView from './View';

export const RegisterContainer = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      lastname: '',
      firstname: '',
      confirmPassword: '',
    },
    resolver: yupResolver(registerSchema),
  });

  const [registerUser, { loading, error, data }] = useMutation(REGISTER);

  const onSubmit = ({ email, password, lastname, firstname }) => {
    registerUser({ variables: { email, password, lastname, firstname } }).then((res) => {
      navigate(AUTH_LOGIN);
    });
  };

  return (
    <Auth title="Register">
      <RegisterView
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
