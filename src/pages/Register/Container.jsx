import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { useToast } from 'hooks';
import { Auth } from 'components/layout';
import { AUTH_LOGIN } from 'routes/CONSTANTS';
import { REGISTER } from 'api/users/mutations';
import { registerSchema } from 'utils/validations';

import RegisterView from './View';

export const RegisterContainer = () => {
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
      lastname: '',
      firstname: '',
      confirmPassword: '',
    },
    resolver: yupResolver(registerSchema),
  });

  const [registerUser, { loading }] = useMutation(REGISTER);

  const onSubmit = ({ email, password, lastname, firstname }) => {
    registerUser({ variables: { email, password, lastname, firstname } })
      .then((res) => {
        navigate(AUTH_LOGIN);
      })
      .catch((err) => {
        toast('error', err?.message);
      });
  };

  return (
    <Auth title="Register">
      <RegisterView
        errors={errors}
        loading={loading}
        register={register}
        onSubmit={handleSubmit(onSubmit)}
      />
    </Auth>
  );
};
