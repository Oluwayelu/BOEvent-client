import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MdLocationPin, MdCalendarToday } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';

import { useToast } from 'hooks';
import { getDate } from 'utils/date-time';
import { Button, Input, NairaIcon, Select, Spinner } from 'components/widgets';
import { AuthContext } from 'context';
import { CREATE_BOOKING } from 'api/booking/mutations';
import { country } from 'utils/CONSTANTS';

const Checkout = ({ close, data }) => {
  // useEffect(() => {
  //   const scrollY = window.scrollY;
  //   document.body.style.position = 'fixed';
  //   document.body.style.top = `-${scrollY}px`;

  //   return () => {
  //     document.body.style.position = '';
  //     document.body.style.top = '';
  //     window.scrollTo(0, scrollY);
  //   };
  // }, [window.scrollY]);
  const { user } = useContext(AuthContext);
  const { toast } = useToast();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: user?.name.firstname ? user.name.firstname : '',
      lastname: user?.name.lastname ? user.name.lastname : '',
      email: user?.email ? user.email : '',
      state: '',
      address: '',
      postal: '',
      country: 'nigeria',
    },
  });

  const [createBooking, { loading }] = useMutation(CREATE_BOOKING);

  const onSubmit = (checkoutData) => {
    console.log(checkoutData);
    createBooking({
      variables: {
        bookingInput: {
          ...checkoutData,
          event: data.id,
          totalPrice: data.totalPrice,
          noOfTickets: data.noOfTickets,
        },
      },
    })
      .then((res) => {
        toast('success', res.data?.createBooking?.message);
      })
      .catch((err) => {
        toast('error', err?.message);
      });
  };

  return (
    <div className="w-full h-[90vh] flex fixed inset-x-0 bottom-0 bg-background/40">
      <div onClick={close} className="w-1/4 md:w-2/3" />
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0, transition: { duration: 1 } }}
        exit={{ x: 100 }}
        className="w-4/5 md:w-1/3 h-full p-5 absolute inset-y-0 right-0 bg-white overflow-y-auto z-50"
      >
        <div className="relative w-full h-full">
          {loading && (
            <div className="w-3/4 md:w-1/3 h-[90vh] fixed bottom-0 right-0 bg-white/70 ">
              <Spinner />
            </div>
          )}
          <div className="space-y-2 md:space-y-5">
            <h2>Checkout</h2>

            <div className="w-full ">
              <div className="w-full flex flex-col md:flex-row p-3 border rounded-xl shadow gap-3">
                <div className="w-1/3 flex items-center justify-center">
                  <div className="w-full h-fit">
                    <img
                      src={data.banner[0]}
                      alt=""
                      className="w-full h-full filter object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="font-bold">{data.title}</p>
                  <div className="w-full flex items-center gap-1">
                    <MdCalendarToday size={20} className="text-primary-300" />
                    <p className="w-fit">
                      <span>{getDate(data.time.startDate).date}</span>
                      {data.time.startDate !== data.time.endDate && (
                        <span> - {getDate(data.time.endDate).date}</span>
                      )}
                    </p>
                  </div>
                  <div className="w-full flex items-center gap-1">
                    <MdLocationPin size={20} className="text-primary-300" />
                    <p className="w-fit">
                      {data.venue.type === 'online' ? 'Online event' : data.venue.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full flex justify-end">
                <div className="md:text-lg text-right font-bold">
                  <p>Tickets: {data.noOfTickets}</p>
                  <p>
                    Total price:{' '}
                    {data.totalPrice > 0 ? (
                      <span>
                        <NairaIcon /> {data.totalPrice.toLocaleString()}
                      </span>
                    ) : (
                      <span className="italic">free</span>
                    )}
                  </p>
                </div>
              </div>

              <div>
                <h3>Shipping Address</h3>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="w-full grid grid-cols-2 gap-3 pb-3"
                >
                  <Input
                    label="Firstname"
                    error={errors.firstname}
                    placeholder="John"
                    {...register('firstname')}
                  />
                  <Input
                    label="Lastname"
                    error={errors.lastname}
                    placeholder="Doe"
                    {...register('lastname')}
                  />
                  <div className="col-span-2">
                    <Input
                      type="email"
                      label="Email"
                      error={errors.email}
                      placeholder="example@gmail.com"
                      {...register('email')}
                    />
                  </div>
                  <Select
                    label="Country"
                    options={country}
                    error={errors.country}
                    {...register('country')}
                  />
                  <Input
                    label="State"
                    error={errors.state}
                    placeholder="Lagos State"
                    {...register('state')}
                  />
                  <Input
                    label="Address"
                    error={errors.address}
                    placeholder="123, John doe street"
                    {...register('address')}
                  />
                  <Input
                    label="Zip/Postal code"
                    error={errors.postal}
                    placeholder="000000"
                    {...register('postal')}
                  />
                  <Button type="submit" className="col-span-2 bg-primary">
                    {data.ticket.type === 'free' ? 'Place order' : 'Pay with paystack'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

Checkout.propTypes = {
  close: PropTypes.func,
  data: PropTypes.object.isRequired,
};

export default Checkout;
