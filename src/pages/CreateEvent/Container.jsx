import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Landing } from 'components/layout';
import { eventSchema } from 'utils/validations';

import CreateEventView from './View';

export const CreateEventContainer = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      title: '',
      summary: '',
      description: '',
      location: '',
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
      price: 0,
      free: false,
      banners: [],
      eventType: 'venue',
      eventRepeat: 'once',
    },
    resolver: yupResolver(eventSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Landing footer={false}>
      <CreateEventView
        errors={errors}
        control={control}
        // loading={loading}
        register={register}
        getValues={getValues}
        // sucMsg={data?.message}
        // errMsg={error?.message}
        onSubmit={handleSubmit(onSubmit)}
      />
    </Landing>
  );
};
