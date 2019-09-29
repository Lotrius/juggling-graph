import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker.css';

const DateSelect = ({ date, setDate }) => {
  return (
    <div>
      <DatePicker
        className="br3 pl2 blue bg-light-gray"
        selected={date}
        onChange={newDate => setDate(newDate)}
      />
    </div>
  );
};

DateSelect.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  date: PropTypes.object,
  setDate: PropTypes.func
};

DateSelect.defaultProps = {
  date: new Date(),
  setDate: null
};

export default DateSelect;
