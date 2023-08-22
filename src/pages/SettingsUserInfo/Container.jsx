import { useContext } from 'react';

import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { Profile } from 'components/layout';
import { registerSchema } from 'utils/validations';

import SettingsUserInfoView from './View';
import { AuthContext } from 'context/auth';

export const SettingsUserInfoContainer = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: user?.email,
      lastname: user?.name?.lastname,
      firstname: user?.name?.firstname,
    },
    resolver: yupResolver(registerSchema),
  });
  // console.log(user);
  const onSubmit = () => {
    console.log(data);
  };
  return (
    <Profile>
      <SettingsUserInfoView
        errors={errors}
        // loading={loading}
        register={register}
        // sucMsg={data?.message}
        // errMsg={error?.message}
        onSubmit={handleSubmit(onSubmit)}
      />
    </Profile>
  );
};
