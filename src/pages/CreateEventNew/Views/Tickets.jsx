import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

import { categories, eventRepeat, eventType } from 'utils/CONSTANTS';
import { EXPLORE_EVENTS } from 'routes/CONSTANTS';
import { Card, Dropzone } from 'components/modules';
import { Button, Input, Select, TextArea } from 'components/widgets';

export const Tickets = ({ loading, control, errors, register }) => {
  return (
    <div>
      {/* price */}
      <Card>
        <div className="w-full flex flex-col space-y-1">
          <label className="font-bold md:text-xl">Ticket price</label>
          <div className="flex space-x-5">
            <Controller
              name="ticketType"
              control={control}
              render={({ field: { value } }) => (
                <label
                  htmlFor="free"
                  className={`${
                    value === 'free' ? ' bg-primary' : 'bg-white'
                  } px-4 h-12 flex items-center text-base border border-dark rounded-lg font-bold cursor-pointer`}
                >
                  <input hidden id="free" type="radio" value="free" {...register('ticketType')} />
                  Free
                </label>
              )}
            />
            <Controller
              name="ticketType"
              control={control}
              render={({ field: { value } }) => (
                <label
                  htmlFor="paid"
                  className={`${
                    value === 'paid' ? ' bg-primary' : 'bg-white'
                  } px-4 h-12 flex items-center text-base border border-dark rounded-lg font-bold cursor-pointer`}
                >
                  <input hidden id="paid" type="radio" value="paid" {...register('ticketType')} />
                  Paid
                </label>
              )}
            />
          </div>
        </div>

        <Controller
          name="ticketStockType"
          control={control}
          render={({ field: { value } }) => (
            <Input
              type="number"
              label="Ticket Stock"
              startAdorment={
                <select className="bg-transparent" {...register('ticketStockType')}>
                  <option value="limited">Limited stock</option>
                  <option value="unlimited">Unlimited stock</option>
                </select>
              }
              disabled={value === 'unlimited'}
              // value={value === 'unlimited' && undefined}
              {...register('stock')}
            />
          )}
        />
        <Controller
          name="ticketType"
          control={control}
          render={({ field: { value } }) => {
            if (value === 'paid') {
              return (
                <Input
                  type="number"
                  label="Ticket Price"
                  placeholder="Enter price for 1 ticket"
                  error={errors.price}
                  {...register('price')}
                  startAdorment={<p className="text-xl font-bold">&#x20A6;</p>}
                />
              );
            }
          }}
        />
      </Card>

      <Button type="submit">Submit</Button>
    </div>
  );
};

Tickets.propTypes = {
  loading: PropTypes.bool,
  errors: PropTypes.object,
  control: PropTypes.object,
  register: PropTypes.func,
};
