import PropTypes from 'prop-types';

import { Button, Input } from 'components/widgets';
import { Sidebar } from './sidebar';

const SettingsUserInfoView = ({ loading, errMsg, errors, register, onSubmit }) => {
  return (
    <div className="w-full flex flex-col md:flex-row">
      {/* sidebar */}
      <Sidebar />

      {/* body content */}
      <div className="w-full md:w-3/4 space-y-3">
        <div className="w-20 h-20 md:w-28 md:h-28 lg:w-48 lg:h-48 border-4 md:border-8 border-white bg-gray rounded-full overflow-hidden">
          <img src="/img/user-male.png" className="w-full h-full object-center object-cover" />
        </div>
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
          disabled
          size="lg"
          type="email"
          label="Email"
          error={errors.email}
          placeholder="Enter email"
          {...register('email')}
        />

        <Button type="submit" size="lg" className="w-full bg-dark text-gray-50">
          Update profile
        </Button>
      </div>
    </div>
  );
};

SettingsUserInfoView.propTypes = {
  loading: PropTypes.bool,
  errors: PropTypes.object,
  onSubmit: PropTypes.func,
  register: PropTypes.func,
  errMsg: PropTypes.string,
};

export default SettingsUserInfoView;
