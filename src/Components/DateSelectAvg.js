import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';

const DateSelectAvg = ({ averageDate, setDate }) => {
  return (
    <div>
      <DatePicker
        className="br3 pl2 blue bg-light-gray"
        selected={averageDate}
        onChange={date => setDate(date)}
        dateFormat="MM/yyyy"
        showMonthYearPicker
      />
    </div>
  );
};

DateSelectAvg.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  averageDate: PropTypes.object,
  setDate: PropTypes.func
};

DateSelectAvg.defaultProps = {
  averageDate: new Date(),
  setDate: null
};

export default DateSelectAvg;
