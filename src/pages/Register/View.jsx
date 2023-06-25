import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { AUTH_LOGIN } from 'routes/CONSTANTS';
import { Button, Input } from 'components/widgets';
import { registerSchema } from 'utils/validations';

const RegisterView = () => {
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

  const onSubmit = (data) => console.log(data);
  return (
    <div className="w-full space-y-5">
      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-3">
        <div className="w-full flex gap-3">
          <Input
            size="lg"
            label="Firstname"
            error={errors.firstname}
            placeholder="Enter firstname"
            {...register('firstname')}
          />
          <Input
            size="lg"
            label="Lastname"
            error={errors.lastname}
            placeholder="Enter lastname"
            {...register('lastname')}
          />
        </div>
        <Input
          size="lg"
          type="email"
          label="Email"
          error={errors.email}
          placeholder="Enter email"
          {...register('email')}
        />
        <div className="w-full flex gap-3">
          <Input
            size="lg"
            type="password"
            label="Password"
            error={errors.password}
            placeholder="Enter password"
            {...register('password')}
          />
          <Input
            size="lg"
            type="password"
            label="Confirm Password"
            error={errors.confirmPassword}
            placeholder="Confirm password"
            {...register('confirmPassword')}
          />
        </div>

        <Button type="submit" size="lg" className="w-full bg-dark text-gray-50">
          Register
        </Button>
      </form>
      <div className="w-full flex items-center justify-between">
        <p>
          Already have an account?{' '}
          <Link to={AUTH_LOGIN} className="font-bold text-dark hover:text-primary-300">
            Login.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterView;
