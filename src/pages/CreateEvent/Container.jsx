import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';

import { useToast } from 'hooks';
import { Landing } from 'components/layout';
import { eventSchema } from 'utils/validations';
import { CREATE_EVENT } from 'api/event/mutations';

import CreateEventView from './View';

export const CreateEventContainer = () => {
  const { toast } = useToast();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
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

  const [createEvent, { loading }] = useMutation(CREATE_EVENT);
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
    })
      .then((res) => {
        toast('success', res.data?.createEvent?.message);
      })
      .catch((err) => {
        toast('error', err?.message);
      });
  };

  return (
    <Landing footer={false}>
      <CreateEventView
        errors={errors}
        control={control}
        loading={loading}
        register={register}
        onSubmit={handleSubmit(onSubmit)}
      />
    </Landing>
  );
};
