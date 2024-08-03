import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { AiFillCheckCircle } from 'react-icons/ai';

import { useToast } from 'hooks';
import { Landing } from 'components/layout';
import { eventSchema } from 'utils/validations';
import { CREATE_EVENT } from 'api/event/mutations';

import { Details, Tickets, Appearance } from './Views';
import { useState } from 'react';

const pages = ['Details', 'Appearance', 'Tickets'];

export const CreateEventContainer = () => {
  const { toast } = useToast();
  const [currentPage, setCurrentPage] = useState(0);
  const [completedPage, setCompletedPage] = useState([]);

  const nextPage = () => {
    setCurrentPage((prev) => {
      setCompletedPage((prevPages) => [...prevPages, prev]);
      return prev < pages.length && prev + 1;
    });
  };

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
      stock: 50,
      ticketType: 'free',
      ticketStockType: 'limited',
      eventType: 'online',
      eventRepeat: 'single event',
      banner: ['/img/bg-img3.jpg'],
    },
    // resolver: yupResolver(eventSchema),
  });

  const [createEvent, { loading }] = useMutation(CREATE_EVENT);
  const onSubmit = (data) => {
    console.log({ ...data, stock: data.ticketStockType === 'unlimited' ? null : data.stock });
    const {
      title,
      url,
      price,
      stock,
      banner,
      summary,
      category,
      endDate,
      endTime,
      startTime,
      startDate,
      eventType,
      location,
      ticketType,
      description,
      eventRepeat,
      ticketStockType,
    } = data;
    createEvent({
      variables: {
        eventInput: {
          title,
          url,
          banner,
          summary,
          category,
          description,
          ticket: {
            type: ticketType,
            stockType: ticketStockType,
            price: ticketType === 'free' ? 0 : parseInt(price),
            stock: ticketStockType === 'unlimited' ? null : parseInt(stock),
          },
          time: {
            endDate,
            endTime,
            startTime,
            startDate,
            type: eventRepeat
          },
          venue: {
            location,
            type: eventType,
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
  console.log(errors);
  return (
    <Landing footer={false}>
      <div className="max-w-4xl mx-auto container px-5 ">
        <div className="w-full h-[8vh] flex justify-between items-center">
          {pages.map((page, key) => (
            <div key={key} className="inline-flex items-center gap-1">
              {completedPage.includes(key) && <AiFillCheckCircle className="text-green-500" />}
              <button
                onClick={() => completedPage.includes(key) && setCurrentPage(key)}
                className={`${completedPage.includes(key) && 'font-bold text-green-500'}`}
              >
                {page}
              </button>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {currentPage === 0 && (
            <Details
              errors={errors}
              control={control}
              loading={loading}
              register={register}
              nextPage={nextPage}
            />
          )}
          {currentPage === 1 && (
            <Appearance
              errors={errors}
              control={control}
              loading={loading}
              register={register}
              nextPage={nextPage}
            />
          )}
          {currentPage === 2 && (
            <Tickets errors={errors} control={control} loading={loading} register={register} />
          )}
        </form>
      </div>
    </Landing>
  );
};
