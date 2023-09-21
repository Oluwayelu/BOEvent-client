import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

import { EXPLORE_EVENTS } from 'routes/CONSTANTS';
import { Button, Input, TextArea } from 'components/widgets';
import { Card, Dropzone } from 'components/modules';

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
          <div className="w-full flex flex-col space-y-1">
            <label className="font-bold md:text-xl">Event Type</label>
            <div className="flex space-x-5">
              <Controller
                name="eventType"
                control={control}
                render={({ field: { value } }) => (
                  <label
                    htmlFor="venue"
                    className={`${
                      value === 'venue' ? 'bg-primary' : ''
                    } px-4 h-12 flex items-center text-base border border-dark rounded-lg font-bold cursor-pointer`}
                  >
                    <input
                      hidden
                      id="venue"
                      type="radio"
                      value="venue"
                      {...register('eventType')}
                    />
                    venue
                  </label>
                )}
              />

              <Controller
                name="eventType"
                control={control}
                render={({ field: { value } }) => (
                  <label
                    htmlFor="online"
                    className={`${
                      value === 'online' ? 'bg-primary' : ''
                    } px-4 h-12 flex items-center text-base border border-dark rounded-lg font-bold cursor-pointer`}
                  >
                    <input
                      hidden
                      id="online"
                      type="radio"
                      value="online"
                      {...register('eventType')}
                    />
                    online
                  </label>
                )}
              />
            </div>
          </div>
          <Controller
            name="eventType"
            control={control}
            render={({ field: { value } }) => (
              <Input
                error={errors.location}
                label={value === 'venue' ? 'Location' : 'Meeting link'}
                placeholder={value === 'venue' ? 'Enter location of event' : 'Enter meeting link'}
                {...register('location')}
              />
            )}
          />
        </Card>

        {/* date & time */}
        <Card>
          <div className="w-full flex flex-col space-y-1">
            <label className="font-bold md:text-xl">Event Repeat</label>
            <div className="flex space-x-5">
              <Controller
                name="eventRepeat"
                control={control}
                render={({ field: { value } }) => (
                  <label
                    htmlFor="once"
                    className={`${
                      value === 'once' ? 'bg-primary' : 'bg-white'
                    } px-4 h-12 flex items-center text-base border border-dark rounded-lg font-bold cursor-pointer`}
                  >
                    <input
                      hidden
                      id="once"
                      type="radio"
                      value="once"
                      {...register('eventRepeat')}
                    />
                    once
                  </label>
                )}
              />

              <Controller
                name="eventRepeat"
                control={control}
                render={({ field: { value } }) => (
                  <label
                    htmlFor="repeat"
                    className={`${
                      value === 'repeat' ? 'bg-primary' : 'bg-white'
                    } px-4 h-12 flex items-center text-base border border-dark rounded-lg font-bold cursor-pointer`}
                  >
                    <input
                      hidden
                      id="repeat"
                      type="radio"
                      value="repeat"
                      {...register('eventRepeat')}
                    />
                    repeat
                  </label>
                )}
              />
            </div>
          </div>

          <div className="w-full grid grid-cols-2 gap-5">
            <Input
              type="date"
              label="Start Date"
              placeholder="Start Date"
              error={errors.startDate}
              {...register('startDate')}
              min={new Date().toISOString().split('T')[0]}
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
          </div>
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
                    free
                  </label>
                )}
              />
            </div>
          </div>
          <Controller
            name="free"
            control={control}
            render={({ field: { value } }) => {
              if (!value) {
                return <Input placeholder="Enter price for 1 ticket" {...register('price')} />;
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
