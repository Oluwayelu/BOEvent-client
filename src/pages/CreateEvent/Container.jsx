import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';

import { Landing } from 'components/layout';
import { eventSchema } from 'utils/validations';

import CreateEventView from './View';
import { CREATE_EVENT } from 'api/event/mutations';

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
      banner: ['/img/sample-event.png'],
      eventType: 'venue',
      eventRepeat: 'once',
    },
    resolver: yupResolver(eventSchema),
  });

  const [createEvent, { loading, error, data }] = useMutation(CREATE_EVENT);
  const onSubmit = (data) => {
    createEvent({
      variables: {
        eventInput: {
          title: data.title,
          price: data.price,
          banner: data.banner,
          summary: data.summary,
          description: data.description,
          time: {
            endDate: data.endDate,
            endTime: data.endTime,
            startTime: data.startTime,
            startDate: data.startDate,
          },
          venue: {
            type: data.eventType,
            location: data.location,
          },
        },
      },
    });
  };

  return (
    <Landing footer={false}>
      <CreateEventView
        errors={errors}
        control={control}
        loading={loading}
        register={register}
        getValues={getValues}
        sucMsg={data?.createEvent?.message}
        errMsg={error?.message}
        onSubmit={handleSubmit(onSubmit)}
      />
    </Landing>
  );
};
