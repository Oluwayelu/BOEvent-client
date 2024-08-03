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
      url: '',
      summary: '',
      description: '',
      location: '',
      category: '',
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
      price: 0,
      free: false,
      banner: ['/img/bg-img3.jpg'],
      eventType: 'online',
      eventRepeat: 'single event',
    },
    resolver: yupResolver(eventSchema),
  });

  const [createEvent, { loading }] = useMutation(CREATE_EVENT);
  const onSubmit = (data) => {
    console.log(data);
    createEvent({
      variables: {
        eventInput: {
          title: data.title,
          url: data.url,
          price: data.price,
          banner: data.banner,
          summary: data.summary,
          category: data.category,
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
        console.error(err);
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
