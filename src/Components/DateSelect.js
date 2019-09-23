import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class DateSelect extends Component {
  render() {
    const { date } = this.props;

    return (
      <div >
        <DatePicker
          className='br3 pl2 blue bg-light-gray'
          selected={date}
          onChange={date => this.props.setDate(date)} />
      </div>

    );
  }
}

export default DateSelect;