import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { AUTH_REGISTER } from 'routes/CONSTANTS';
import { Button, Input } from 'components/widgets';

const LoginView = ({ loading, errors, register, onSubmit }) => {
  return (
    <div className="w-full space-y-3 md:space-y-5">
      {/* form */}
      <form onSubmit={onSubmit} className="w-full space-y-3">
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

        <Button loading={loading} type="submit" size="lg" className="w-full bg-dark text-gray-50">
          Login
        </Button>
        <div className="w-full flex items-center justify-end">
          <Link to="#" className="font-bold text-dark hover:text-primary-300">
            Forgotten password?
          </Link>
        </div>
      </form>

      <div className="w-full flex items-center justify-center">
        <p>
          Don't have an account?{' '}
          <Link to={AUTH_REGISTER} className="font-bold text-dark hover:text-primary-300">
            Register.
          </Link>
        </p>
      </div>
    </div>
  );
};

LoginView.propTypes = {
  loading: PropTypes.bool,
  errors: PropTypes.object,
  onSubmit: PropTypes.func,
  register: PropTypes.func,
};

export default LoginView;
