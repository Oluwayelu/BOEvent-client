import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { AUTH_REGISTER } from 'routes/CONSTANTS';
import { Button, Input } from 'components/widgets';
import { loginSchema } from 'utils/validations';

const LoginView = () => {
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

  const onSubmit = (data) => console.log(data);
  return (
    <div className="w-full space-y-5">
      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-3">
        <Input
          size="lg"
          type="email"
          label="Email"
          error={errors.email}
          placeholder="Enter email"
          {...register('email')}
        />
        <Input
          size="lg"
          type="password"
          label="Password"
          error={errors.password}
          placeholder="Enter password"
          {...register('password')}
        />

        <Button type="submit" size="lg" className="w-full bg-dark text-gray-50">
          Login
        </Button>
      </form>
      <div className="w-full flex flex-col lg:flex-row items-center justify-between">
        <p>
          Don't have an account?{' '}
          <Link to={AUTH_REGISTER} className="font-bold text-dark hover:text-primary-300">
            Register.
          </Link>
        </p>
        <Link to="#" className="font-bold text-dark hover:text-primary-300">
          Forgotten password?
        </Link>
      </div>
    </div>
  );
};

export default LoginView;
