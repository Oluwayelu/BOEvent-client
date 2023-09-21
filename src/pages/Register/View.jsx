import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { AUTH_LOGIN } from 'routes/CONSTANTS';
import { Button, Input } from 'components/widgets';

const RegisterView = ({ loading, errors, register, onSubmit }) => {
  return (
    <div className="w-full space-y-5">
      {/* form */}
      <form onSubmit={onSubmit} className="w-full space-y-3">
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
        <p>
          By registering you have accepted the{' '}
          <Link to="#" className="font-bold text-dark hover:text-primary-300">
            Terms & Condition
          </Link>{' '}
          for this website
        </p>
        <Button loading={loading} type="submit" size="lg" className="w-full bg-dark text-gray-50">
          Register
        </Button>
      </form>
      <div className="w-full flex items-center justify-center">
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

RegisterView.propTypes = {
  loading: PropTypes.bool,
  errors: PropTypes.object,
  onSubmit: PropTypes.func,
  register: PropTypes.func,
};

export default RegisterView;
