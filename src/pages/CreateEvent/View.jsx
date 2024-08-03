import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

import { categories, eventRepeat, eventType } from 'utils/CONSTANTS';
import { EXPLORE_EVENTS } from 'routes/CONSTANTS';
import { Card, Dropzone } from 'components/modules';
import { Button, Input, Select, TextArea } from 'components/widgets';

const CreateEventView = ({ loading, control, errors, register, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="relative w-full lg:h-[90vh] px-5 pt-5 md:pt-10 md:px-10 lg:px-40 flex flex-col lg:flex-row gap-5 lg:gap-5"
    >
      {/* Upload banner */}
      <div className="w-full lg:w-1/3 lg:pb-10 h-full space-y-5">
        <h2>Create event</h2>
        <Dropzone />
      </div>

      {/* event inormation */}
      <div className="relative w-full lg:w-2/3 lg:h-full pb-10 right-0 space-y-5 lg:space-y-10 scroll-snap lg:overflow-scroll lg:no-scrollbar">
        {/* title */}
        <Card>
          <Input
            label="Event Title"
            placeholder="Event title"
            error={errors.title}
            {...register('title')}
          />
          <Select
            label="Select Category"
            placeholder="Select Category"
            options={categories}
            error={errors.category}
            {...register('category')}
          />
          <Input
            label="Customize url"
            startAdorment={<p className="text-xs">https://boevent.netlify.app/book/</p>}
            {...register('url')}
          />
        </Card>

        {/* description */}
        <Card>
          <TextArea
            rows={3}
            label="Summary"
            placeholder="Enter a short summary of your event"
            error={errors.summary}
            {...register('summary')}
          />
          <TextArea
            label="Description"
            placeholder="Enter description of your event"
            error={errors.description}
            {...register('description')}
          />
        </Card>

        {/* time */}
        <Card>
          <Select
            label="Event type"
            placeholder="Select Event type"
            options={eventType}
            error={errors.category}
            {...register('eventType')}
          />

          <Controller
            name="eventType"
            control={control}
            render={({ field: { value } }) => (
              <Input
                error={errors.location}
                label={value === 'live' ? 'Location' : 'Meeting link'}
                placeholder={value === 'live' ? 'Enter location of event' : 'Enter meeting link'}
                {...register('location')}
              />
            )}
          />
        </Card>

        {/* date & time */}
        <Card>
          <Select
            placeholder="Select Event time type"
            options={eventRepeat}
            error={errors.eventRepeat}
            {...register('eventRepeat')}
          />

          <Controller
            name="eventRepeat"
            control={control}
            render={({ field: { value } }) =>
              value === 'recurring event' ? (
                <div className="w-full grid grid-cols-2 items-end gap-3">
                  <div className="col-span-2">
                    <Input
                      type="date"
                      label="Start Date"
                      placeholder="Start Date"
                      error={errors.startDate}
                      {...register('startDate')}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div className="col-span-2">
                    <Select
                      label="Event Frequency"
                      placeholder="Select Event time type"
                      options={['Every day', 'Every week', 'Every two weeks', 'Every month']}
                    />
                  </div>

                  <Input
                    type="time"
                    label="Start Time"
                    placeholder="Start Time"
                    error={errors.startTime}
                    {...register('startTime')}
                  />
                  <Controller
                    name="startTime"
                    control={control}
                    render={({ field: { value } }) => (
                      <Input
                        type="time"
                        label="End Time"
                        placeholder="End Time"
                        error={errors.endTime}
                        min={value}
                        {...register('endTime')}
                      />
                    )}
                  />

                  <div className="col-span-2">
                    <Controller
                      name="startDate"
                      control={control}
                      render={({ field: { value } }) => (
                        <Input
                          type="date"
                          label="End Date"
                          placeholder="End Date"
                          error={errors.endDate}
                          {...register('endDate')}
                          min={value !== '' ? value : new Date().toISOString().split('T')[0]}
                        />
                      )}
                    />
                  </div>
                </div>
              ) : (
                <div className="w-full grid grid-cols-2 items-end gap-3">
                  <Input
                    type="date"
                    label="Start Date"
                    placeholder="Start Date"
                    error={errors.startDate}
                    {...register('startDate')}
                    min={new Date().toISOString().split('T')[0]}
                  />

                  <Input
                    type="time"
                    placeholder="Start Time"
                    error={errors.startTime}
                    {...register('startTime')}
                  />

                  <Controller
                    name="startDate"
                    control={control}
                    render={({ field: { value } }) => (
                      <Input
                        type="date"
                        label="End Date"
                        placeholder="End Date"
                        error={errors.endDate}
                        {...register('endDate')}
                        min={value !== '' ? value : new Date().toISOString().split('T')[0]}
                      />
                    )}
                  />

                  <Controller
                    name="startTime"
                    control={control}
                    render={({ field: { value } }) => (
                      <Input
                        type="time"
                        placeholder="End Time"
                        error={errors.endTime}
                        min={value}
                        {...register('endTime')}
                      />
                    )}
                  />
                </div>
              )
            }
          />
        </Card>

        {/* price */}
        <Card>
          <div className="w-full flex flex-col space-y-1">
            <label className="font-bold md:text-xl">Ticket price</label>
            <div className="flex space-x-5">
              <Controller
                name="free"
                control={control}
                render={({ field: { value } }) => (
                  <label
                    htmlFor="free"
                    className={`${
                      value ? ' bg-primary' : 'bg-white'
                    } px-4 h-12 flex items-center text-base border border-dark rounded-lg font-bold cursor-pointer`}
                  >
                    <input hidden id="free" type="checkbox" {...register('free')} />
                    Free
                  </label>
                )}
              />
              <Controller
                name="free"
                control={control}
                render={({ field: { value } }) => (
                  <label
                    htmlFor="paid"
                    className={`${
                      !value ? ' bg-primary' : 'bg-white'
                    } px-4 h-12 flex items-center text-base border border-dark rounded-lg font-bold cursor-pointer`}
                  >
                    <input hidden id="paid" type="checkbox" {...register('free')} />
                    Paid
                  </label>
                )}
              />
            </div>
          </div>
          <Input
            type="number"
            label="Ticket Stock"
            startAdorment={
              <select className="bg-transparent">
                <option>Limited stock</option>
                <option>Unlimited stock</option>
              </select>
            }
          />
          <Controller
            name="free"
            control={control}
            render={({ field: { value } }) => {
              if (!value) {
                return (
                  <Input
                    type="number"
                    label="Ticket Price"
                    placeholder="Enter price for 1 ticket"
                    {...register('price')}
                    startAdorment={<p className="text-xl font-bold">&#x20A6;</p>}
                  />
                );
              }
            }}
          />
        </Card>

        <div className="w-full flex items-center justify-end space-x-5 lg:space-x-10">
          <Button href={EXPLORE_EVENTS} size="lg" className="bg-error text-white">
            Cancel
          </Button>
          <Button loading={loading} type="submit" size="lg" className="bg-primary">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

CreateEventView.propTypes = {
  loading: PropTypes.bool,
  errors: PropTypes.object,
  control: PropTypes.object,
  onSubmit: PropTypes.func,
  register: PropTypes.func,
};

export default CreateEventView;
