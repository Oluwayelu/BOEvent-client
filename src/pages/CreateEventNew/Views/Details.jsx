import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

import { categories, eventRepeat, eventType } from 'utils/CONSTANTS';
import { EXPLORE_EVENTS } from 'routes/CONSTANTS';
import { Card, Dropzone, Editor } from 'components/modules';
import { Button, Input, Select, TextArea } from 'components/widgets';

export const Details = ({ loading, control, errors, register, nextPage }) => {
  return (
    <div className="w-full pb-10 space-y-5 lg:space-y-10">
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
          rows={2}
          label="Summary"
          placeholder="Enter a short summary of your event"
          error={errors.summary}
          {...register('summary')}
        />
        <Controller
          name="description"
          control={control}
          render={({ field: { onChange } }) => (
            <Editor onChange={onChange} label="Description" error={errors.description} />
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
                  <Select
                    label="Event Frequency"
                    placeholder="Select Event time type"
                    options={['Every day', 'Every week', 'Every two weeks', 'Every month']}
                  />
                </div>
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

      <div className="w-full flex justify-end">
        <Button size="lg" type="button" onClick={nextPage} className="bg-primary">
          Next
        </Button>
      </div>
    </div>
  );
};

Details.propTypes = {
  loading: PropTypes.bool,
  errors: PropTypes.object,
  control: PropTypes.object,
  register: PropTypes.func,
  nextPage: PropTypes.func,
};
