import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

import { categories, eventRepeat, eventType } from 'utils/CONSTANTS';
import { EXPLORE_EVENTS } from 'routes/CONSTANTS';
import { Card, Dropzone } from 'components/modules';
import { Button, Input, Select, TextArea } from 'components/widgets';

export const Appearance = ({ nextPage }) => {
  return (
    <div>
      <div className="w-full lg:pb-10 h-full space-y-5">
        <h2>Create event</h2>
        <Dropzone />
      </div>

      <div className="w-full flex justify-end">
        <Button size="lg" type="button" onClick={nextPage} className="bg-primary">
          Next
        </Button>
      </div>
    </div>
  );
};

Appearance.propTypes = {
  nextPage: PropTypes.func,
};
